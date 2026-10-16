import Table from 'antd/es/table'
import React, {
  ElementType,
  ReactNode,
  RefObject,
  useContext,
  useLayoutEffect,
  useState
} from 'react'

import { TableColumn } from '../../types'
import { isColumnVisible } from '../common'

import { VirtualTableContext } from './VirtualTableContext'

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

type UseStickyHeaderBodySyncParams = {
  theadRef: RefObject<HTMLTableSectionElement>,
  portalRef: RefObject<HTMLTableElement>,
  columns: TableColumn[]
}

/**
 * Only for virtual tables: the sticky header repeats the body column structure (with selection and expand
 * columns) and copies the real body column widths, so it stays aligned on resize.
 * Returns a renderer for the helper row and the header colgroup, or null when the default render is used.
 */
export const useStickyHeaderBodySync = ({ theadRef, portalRef, columns }: UseStickyHeaderBodySyncParams) => {
  const isVirtual = useContext(VirtualTableContext)
  const [slots, setSlots] = useState<ColumnSlot[] | null>(null)

  useLayoutEffect(() => {
    const bodyTable = theadRef.current?.closest('table')
    if (!isVirtual || !bodyTable) return
    const bodySlots = getBodyColumnSlots(bodyTable)
    if (!isSameSlots(slots, bodySlots)) setSlots(bodySlots)
  })

  useLayoutEffect(() => {
    const bodyTable = theadRef.current?.closest('table')
    const headerTable = portalRef.current
    if (!isVirtual || !bodyTable || !headerTable || !theadRef.current) return

    const sync = () => syncHeaderColumnWidths(bodyTable, headerTable)
    sync()
    const observer = new ResizeObserver(sync)
    observer.observe(bodyTable)
    // helper cells span whole columns: they resize when a column width changes inside a table of the same width
    theadRef.current.querySelectorAll('th').forEach(th => observer.observe(th))
    return () => observer.disconnect()
  }, [isVirtual, slots, columns])

  if (!isVirtual || !slots) return null

  return (Tag: ElementType, classname: string): ReactNode => {
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
}
