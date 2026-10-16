import Table from 'antd/es/table'
import React, { RefObject, useEffect, useLayoutEffect, useState } from 'react'

import { isColumnVisible } from '../common'
import { useResizableColumnsContext } from '../stickyHeader/ResizableColumnsContext'

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

type VirtualizationColumnsWidthHelperProps = {
  Tag: 'th' | 'col',
  classname: string,
  /** helper thead of StickyHeaderWrapper, it lives in the body table */
  bodyTheadRef: RefObject<HTMLTableSectionElement>,
  /** sticky header table */
  headerTableRef: RefObject<HTMLTableElement>,
  /** copy body column widths to the header, enabled for one of the two helpers */
  syncWidths?: boolean
}

/**
 * StickyHeaderWrapper column width cells for the `virtualization` prop: repeats the body column structure
 * (selection and expand columns included) and keeps the header column widths equal to the body ones
 */
export function VirtualizationColumnsWidthHelper ({
  Tag,
  classname,
  bodyTheadRef,
  headerTableRef,
  syncWidths
}: VirtualizationColumnsWidthHelperProps) {
  const { columns, hasRowSelection } = useResizableColumnsContext()
  const [slots, setSlots] = useState<ColumnSlot[] | null>(null)

  const measureSlots = () => {
    const bodyTable = bodyTheadRef.current?.closest('table')
    if (!bodyTable) return
    const bodySlots = getBodyColumnSlots(bodyTable)
    if (!isSameSlots(slots, bodySlots)) setSlots(bodySlots)
  }
  useLayoutEffect(measureSlots)
  // on mount the parent thead ref is attached after this component's layout effects: measure once refs are set
  useEffect(measureSlots, [])

  useLayoutEffect(() => {
    const bodyThead = bodyTheadRef.current
    const bodyTable = bodyThead?.closest('table')
    const headerTable = headerTableRef.current
    if (!syncWidths || !bodyThead || !bodyTable || !headerTable) return

    const sync = () => syncHeaderColumnWidths(bodyTable, headerTable)
    sync()
    const observer = new ResizeObserver(sync)
    observer.observe(bodyTable)
    // helper cells span whole columns: they resize when a column width changes inside a table of the same width
    bodyThead.querySelectorAll('th').forEach(th => observer.observe(th))
    return () => observer.disconnect()
  }, [syncWidths, slots, columns])

  // Keys are positions, not column keys: column keys may repeat (they fall back to dataIndex), and repeated
  // keys leave stale cells behind when the cells switch from the initial render to the body structure

  // until the body is rendered: the same cells as StickyHeaderWrapper renders
  if (!slots) {
    return (
      <>
        {hasRowSelection ? <Tag key="selection" className={`ant-table-selection-${classname}`} /> : null}
        {columns.filter(isColumnVisible).map((item, index) => (
          <Tag key={`data-${index}`} style={{ width: item.width, minWidth: item.minWidth }} />
        ))}
      </>
    )
  }

  const dataColumns = columns.filter(column =>
    isColumnVisible(column) && column !== Table.SELECTION_COLUMN && column !== Table.EXPAND_COLUMN)
  let dataIndex = 0
  return (
    <>
      {slots.map((slot, i) => {
        if (slot === 'selection') return <Tag key="selection" className={`ant-table-selection-${classname}`} />
        if (slot === 'expand') return <Tag key={`expand-${i}`} className={`ant-table-expand-icon-${classname}`} />
        const key = `data-${dataIndex}`
        const item = dataColumns[dataIndex++]
        return <Tag key={key} style={item && { width: item.width, minWidth: item.minWidth }} />
      })}
    </>
  )
}
