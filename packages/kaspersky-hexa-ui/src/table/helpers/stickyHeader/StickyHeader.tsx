import Table from 'antd/es/table'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

import {
  scrollShadowCss,
  tableCss,
  tableCssProps,
  TableCssProps
} from '../../tableCss'
import { findParentForClassName, isColumnVisible } from '../common'

import { useResizableColumnsContext } from './ResizableColumnsContext'

export const STICKY_HEADER_CLASS = 'hexa-ui-table-sticky-header'

export const TableStickyHeaderWrapper = styled.div.withConfig({
  shouldForwardProp: prop => !tableCssProps.includes(prop as typeof tableCssProps[number])
})<TableCssProps>`
  position: sticky;
  z-index: 3;
  overflow: hidden;
  max-width: 100%;
  ${({ stickyHeader }) => `top: ${stickyHeader}px;`}
`

export const TableStickyHeader = styled.div.withConfig({
  shouldForwardProp: prop => !tableCssProps.includes(prop as typeof tableCssProps[number])
})<TableCssProps>`
  ${tableCss}
  
  & .ant-table table col {
    min-width: unset;
  }

  &.table-sticky-selection {
    ${scrollShadowCss}

    .ant-table-selection-column {
      position: sticky;
      left: 0;
      top: 0;
      z-index: 3;
    }
  }
`

type ColumnSlot = 'selection' | 'expand' | 'data'

/** Column structure of the body table as antd rendered it: service columns are not in `columns` */
const getBodyColumnSlots = (bodyTable: HTMLTableElement): ColumnSlot[] =>
  Array.from(bodyTable.querySelectorAll(':scope > colgroup > col')).map(col => {
    if (col.classList.contains('ant-table-selection-col')) return 'selection'
    if (col.classList.contains('ant-table-expand-icon-col')) return 'expand'
    return 'data'
  })

const isSameSlots = (a: ColumnSlot[] | null, b: ColumnSlot[]) =>
  a !== null && a.length === b.length && a.every((slot, i) => slot === b[i])

/** Copies the real body column widths to the sticky header, so their layouts always match */
const syncHeaderColumnWidths = (bodyTable: HTMLTableElement, headerTable: HTMLTableElement) => {
  const bodyCols = bodyTable.querySelectorAll(':scope > colgroup > col')
  const headerCols = headerTable.querySelectorAll(':scope > colgroup > col')
  if (!bodyCols.length || bodyCols.length !== headerCols.length) return

  // the body decides column widths: header cells must not grow wider than the body columns because of their content
  headerTable.style.tableLayout = 'fixed'
  bodyCols.forEach((bodyCol, i) => {
    const width = `${bodyCol.getBoundingClientRect().width}px`
    const headerCol = headerCols[i] as HTMLElement
    if (headerCol.style.width !== width) headerCol.style.width = width
  })
  const tableWidth = `${bodyTable.getBoundingClientRect().width}px`
  if (headerTable.style.width !== tableWidth) headerTable.style.width = tableWidth
}

export function StickyHeaderWrapper ({ children, className }: {
  children: React.ReactNode,
  className: string
}) {
  const portalRef = useRef<HTMLTableElement | null>(null)
  if (!portalRef.current) {
    portalRef.current = document.createElement('table')
  }
  const theadRef = useRef<HTMLTableSectionElement>(null)
  const { columns, hasRowSelection } = useResizableColumnsContext()
  const [slots, setSlots] = useState<ColumnSlot[] | null>(null)

  // Repeat the body column structure (selection and expand columns included) in the helper row and the header
  useLayoutEffect(() => {
    const bodyTable = theadRef.current?.closest('table')
    if (!bodyTable) return
    const bodySlots = getBodyColumnSlots(bodyTable)
    if (!isSameSlots(slots, bodySlots)) setSlots(bodySlots)
  })

  // Keep header column widths equal to the body ones: window resize, auto width columns, rows rendered on scroll...
  useLayoutEffect(() => {
    const bodyTable = theadRef.current?.closest('table')
    const headerTable = portalRef.current
    if (!bodyTable || !headerTable || !theadRef.current) return

    const sync = () => syncHeaderColumnWidths(bodyTable, headerTable)
    sync()
    const observer = new ResizeObserver(sync)
    observer.observe(bodyTable)
    // helper cells span whole columns, they resize when a column width changes inside a table of the same width
    theadRef.current.querySelectorAll('th').forEach(th => observer.observe(th))
    return () => observer.disconnect()
  }, [slots, columns])

  useEffect(() => {
    if (portalRef.current && theadRef.current) {
      if (!portalRef.current.parentNode) {
        const node = findParentForClassName(theadRef.current, STICKY_HEADER_CLASS)
        const tableContainer = node?.querySelector('.ant-table') as HTMLElement
        tableContainer?.appendChild(portalRef.current)
      }
    }

    return () => {
      if (portalRef.current?.parentNode) {
        portalRef.current.parentNode.removeChild(portalRef.current)
      }

      portalRef.current?.remove()
    }
  }, [])

  function renderColumnsWidthHelper (Tag: React.ElementType, classname: string) {
    if (slots) {
      const dataColumns = columns.filter(column =>
        isColumnVisible(column) && column !== Table.SELECTION_COLUMN && column !== Table.EXPAND_COLUMN)
      let dataIndex = 0
      return (
        <>
          {slots.map((slot, i) => {
            if (slot === 'selection') return <Tag key={`selection-${i}`} className={`ant-table-selection-${classname}`} />
            if (slot === 'expand') return <Tag key={`expand-${i}`} className={`ant-table-expand-icon-${classname}`} />
            const item = dataColumns[dataIndex++]
            return <Tag key={item?.key ?? `col-${i}`} style={item && { width: item.width, minWidth: item.minWidth }} />
          })}
        </>
      )
    }

    return (
      <>
        {hasRowSelection ? <Tag className={`ant-table-selection-${classname}`} /> : null}
        {columns.filter(isColumnVisible).map(item => (
          <Tag key={item.key} style={{ width: item.width, minWidth: item.minWidth }} />
        ))}
      </>
    )
  }

  return (
    <thead ref={theadRef} style={{ visibility: 'collapse' }}>
      <tr>
        {renderColumnsWidthHelper('th', 'column')}
      </tr>
      {portalRef.current ? createPortal(
        <>
          <colgroup>
            {renderColumnsWidthHelper('col', 'col')}
          </colgroup>
          <thead className={className}>
            {children}
          </thead>
        </>,
        portalRef.current
      ) : null}
    </thead>
  )
}
