import Table from 'antd/es/table'
import React, {
  ElementType,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react'
import { createPortal } from 'react-dom'

import { TableColumn } from '../../types'
import { findParentForClassName, isColumnVisible } from '../common'
import { useResizableColumnsContext } from '../stickyHeader/ResizableColumnsContext'
import { STICKY_HEADER_CLASS } from '../stickyHeader/StickyHeader'

type ColumnSlot = 'selection' | 'expand' | 'data'

const getBodyCols = (bodyTable: HTMLTableElement) => bodyTable.querySelectorAll(':scope > colgroup > col')

/** Body column structure as antd rendered it: selection and expand columns are not in `columns` */
const getBodyColumnSlots = (bodyTable: HTMLTableElement): ColumnSlot[] =>
  Array.from(getBodyCols(bodyTable)).map(col => {
    if (col.classList.contains('ant-table-selection-col')) return 'selection'
    if (col.classList.contains('ant-table-expand-icon-col')) return 'expand'
    return 'data'
  })

const isSameSlots = (a: ColumnSlot[] | null, b: ColumnSlot[]) =>
  a !== null && a.length === b.length && a.every((slot, i) => slot === b[i])

const syncHeaderColumnWidths = (bodyTable: HTMLTableElement, headerTable: HTMLTableElement) => {
  const bodyCols = getBodyCols(bodyTable)
  const headerCols = headerTable.querySelectorAll(':scope > colgroup > col')
  if (!bodyCols.length || bodyCols.length !== headerCols.length) return

  // header content must not make its columns wider than the body ones
  headerTable.style.tableLayout = 'fixed'
  bodyCols.forEach((bodyCol, i) => {
    const width = `${bodyCol.getBoundingClientRect().width}px`
    const headerCol = headerCols[i] as HTMLElement
    if (headerCol.style.width !== width) headerCol.style.width = width
  })
  const tableWidth = `${bodyTable.getBoundingClientRect().width}px`
  if (headerTable.style.width !== tableWidth) headerTable.style.width = tableWidth
}

const renderColumnsWidthHelper = (
  Tag: ElementType,
  classname: string,
  slots: ColumnSlot[] | null,
  columns: TableColumn[],
  hasRowSelection?: boolean
) => {
  // until the body is rendered: the same cells as StickyHeaderWrapper renders
  if (!slots) {
    return (
      <>
        {hasRowSelection ? <Tag className={`ant-table-selection-${classname}`} /> : null}
        {columns.filter(isColumnVisible).map(item => (
          <Tag key={item.key} style={{ width: item.width, minWidth: item.minWidth }} />
        ))}
      </>
    )
  }

  const dataColumns = columns.filter(column =>
    isColumnVisible(column) && column !== Table.SELECTION_COLUMN && column !== Table.EXPAND_COLUMN)
  let dataIndex = 0
  return slots.map((slot, i) => {
    if (slot === 'selection') return <Tag key={`selection-${i}`} className={`ant-table-selection-${classname}`} />
    if (slot === 'expand') return <Tag key={`expand-${i}`} className={`ant-table-expand-icon-${classname}`} />
    const item = dataColumns[dataIndex++]
    return <Tag key={item?.key ?? `col-${i}`} style={item && { width: item.width, minWidth: item.minWidth }} />
  })
}

/**
 * StickyHeaderWrapper for __EXPERIMENTAL__VIRTUAL_TANSTACK: the sticky header repeats the body column structure
 * (with selection and expand columns) and copies the real body column widths, so it stays aligned on resize
 */
export function VirtualTanstackStickyHeaderWrapper ({ children, className }: {
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

  useEffect(() => {
    if (portalRef.current && theadRef.current && !portalRef.current.parentNode) {
      const node = findParentForClassName(theadRef.current, STICKY_HEADER_CLASS)
      const tableContainer = node?.querySelector('.ant-table') as HTMLElement
      tableContainer?.appendChild(portalRef.current)
    }

    return () => {
      portalRef.current?.remove()
    }
  }, [])

  useLayoutEffect(() => {
    const bodyTable = theadRef.current?.closest('table')
    if (!bodyTable) return
    const bodySlots = getBodyColumnSlots(bodyTable)
    if (!isSameSlots(slots, bodySlots)) setSlots(bodySlots)
  })

  useLayoutEffect(() => {
    const bodyTable = theadRef.current?.closest('table')
    const headerTable = portalRef.current
    if (!bodyTable || !headerTable || !theadRef.current) return

    const sync = () => syncHeaderColumnWidths(bodyTable, headerTable)
    sync()
    const observer = new ResizeObserver(sync)
    observer.observe(bodyTable)
    // helper cells span whole columns: they resize when a column width changes inside a table of the same width
    theadRef.current.querySelectorAll('th').forEach(th => observer.observe(th))
    return () => observer.disconnect()
  }, [slots, columns])

  return (
    <thead ref={theadRef} style={{ visibility: 'collapse' }}>
      <tr>
        {renderColumnsWidthHelper('th', 'column', slots, columns, hasRowSelection)}
      </tr>
      {portalRef.current ? createPortal(
        <>
          <colgroup>
            {renderColumnsWidthHelper('col', 'col', slots, columns, hasRowSelection)}
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
