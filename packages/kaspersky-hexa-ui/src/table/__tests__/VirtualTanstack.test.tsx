import { act, render } from '@testing-library/react'
import React, { ComponentType } from 'react'

import { STICKY_HEADER_CLASS, StickyHeaderWrapper, VirtualStickyHeaderWrapper } from '../helpers/stickyHeader'
import { ResizableColumnsContext } from '../helpers/stickyHeader/ResizableColumnsContext'
import { TableComponent } from '../modules'
import { VIRTUAL_SPACER_CLASS, VirtualTanstack } from '../modules/VirtualTanstack'
import { TestTable } from '../test-utils/TableTestingClass'
import { ITableProps, TableColumn, TableRecord } from '../types'

const ROW_HEIGHT = 40

const columns: TableColumn[] = [
  { key: 'name', dataIndex: 'name', title: 'Name', width: 200 },
  { key: 'description', dataIndex: 'description', title: 'Description', width: 300 },
  { key: 'hidden', dataIndex: 'hidden', title: 'Hidden', show: false }
]

const makeData = (count: number): TableRecord[] => Array.from({ length: count }, (_value, i) => ({
  key: i,
  name: `name ${i}`,
  description: `description ${i}`
}))

let resizeObservers: { observe: jest.Mock, disconnect: jest.Mock }[] = []
const originalResizeObserver = window.ResizeObserver
const originalGetBoundingClientRect = Element.prototype.getBoundingClientRect
const originalScrollTo = window.scrollTo

beforeEach(() => {
  resizeObservers = []
  window.scrollTo = jest.fn()
  window.ResizeObserver = jest.fn().mockImplementation(() => {
    const observer = { observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn() }
    resizeObservers.push(observer)
    return observer
  }) as unknown as typeof ResizeObserver
  // jsdom has no layout: give every row a real height so the virtualizer can measure it
  Element.prototype.getBoundingClientRect = function (this: Element) {
    const height = this.tagName === 'TR' ? ROW_HEIGHT : 0
    return {
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      right: 100,
      bottom: height,
      width: 100,
      height,
      toJSON: () => ({})
    } as DOMRect
  }
})

afterEach(() => {
  window.ResizeObserver = originalResizeObserver
  window.scrollTo = originalScrollTo
  Element.prototype.getBoundingClientRect = originalGetBoundingClientRect
})

/** Renders the VirtualTanstack module over a probe component that records what the module passed down */
const renderVirtualModule = (props: Partial<ITableProps>) => {
  const received: { components?: ITableProps['components'], isVirtual?: boolean, hasLegacyFlag?: boolean } = {}
  const Probe = ((probeProps: ITableProps) => {
    received.components = probeProps.components
    received.isVirtual = probeProps.__EXPERIMENTAL__VIRTUAL_TANSTACK
    received.hasLegacyFlag = '__EXPERIMENTAL__VIRTUAL' in probeProps
    return null
  }) as TableComponent
  const VirtualProbe = VirtualTanstack(Probe)
  render(<VirtualProbe {...props as ITableProps} />)
  return received
}

describe('Table __EXPERIMENTAL__VIRTUAL_TANSTACK', () => {
  /** Body table with selection, expand and two data columns, as antd renders it */
  const renderStickyHeader = (hasRowSelection: boolean, Wrapper: typeof StickyHeaderWrapper = StickyHeaderWrapper) => render(
    <div className={STICKY_HEADER_CLASS}>
      <div className="ant-table" />
      <table>
        <colgroup>
          <col className="ant-table-selection-col" />
          <col className="ant-table-expand-icon-col" />
          <col />
          <col />
        </colgroup>
        <ResizableColumnsContext.Provider value={{ columns, hasRowSelection, setOverflow: () => {}, setColumns: () => {} }}>
          <Wrapper className="sticky-thead">
            <tr><th>Name</th><th>Description</th></tr>
          </Wrapper>
        </ResizableColumnsContext.Provider>
        <tbody><tr><td /></tr></tbody>
      </table>
    </div>
  )

  describe('StickyHeaderWrapper without the flag', () => {
    it('renders the helper row and the colgroup from row selection and visible columns', () => {
      const { container } = renderStickyHeader(true)

      const helperCells = container.querySelectorAll(`.${STICKY_HEADER_CLASS} > table > thead > tr:first-child > th`)
      expect(helperCells).toHaveLength(3)
      expect(helperCells[0]).toHaveClass('ant-table-selection-column')
      expect((helperCells[1] as HTMLElement).style.width).toBe('200px')
      expect((helperCells[2] as HTMLElement).style.width).toBe('300px')

      // the colgroup and the header live in the portal table
      const portalTable = container.querySelector(`.${STICKY_HEADER_CLASS} .ant-table > table`) as HTMLTableElement
      expect(portalTable?.querySelector(':scope > thead.sticky-thead')).toBeTruthy()
      expect(portalTable).toBeTruthy()
      const cols = portalTable!.querySelectorAll(':scope > colgroup > col')
      expect(cols).toHaveLength(3)
      expect(cols[0]).toHaveClass('ant-table-selection-col')
      expect((cols[1] as HTMLElement).style.width).toBe('200px')
      expect((cols[2] as HTMLElement).style.width).toBe('300px')
      // without the flag the header widths are not copied from the body
      expect(portalTable!.style.tableLayout).toBe('')
      expect(resizeObservers).toHaveLength(0)
    })

    it('omits the selection column without row selection', () => {
      const { container } = renderStickyHeader(false)

      const helperCells = container.querySelectorAll(`.${STICKY_HEADER_CLASS} > table > thead > tr:first-child > th`)
      expect(helperCells).toHaveLength(2)
      expect(helperCells[0]).not.toHaveClass('ant-table-selection-column')
    })

    it('renders the sticky header of a real table without the flag the same way', async () => {
      const { container } = render(
        <TestTable columns={columns} dataSource={makeData(5)} stickyHeader={0} rowSelection={{}} />
      )
      await act(async () => {})

      const portalTable = container.querySelector(`.${STICKY_HEADER_CLASS} .ant-table > table`)
      expect(portalTable).toBeTruthy()
      const cols = portalTable!.querySelectorAll(':scope > colgroup > col')
      expect(cols).toHaveLength(3)
      expect(cols[0]).toHaveClass('ant-table-selection-col')
      expect((portalTable as HTMLElement).style.tableLayout).toBe('')
    })
  })

  describe('StickyHeaderWrapper with isVirtual', () => {
    it('repeats the body column structure and copies the body column widths', () => {
      const { container } = renderStickyHeader(true, VirtualStickyHeaderWrapper)

      const helperCells = container.querySelectorAll(`.${STICKY_HEADER_CLASS} > table > thead > tr:first-child > th`)
      expect(helperCells).toHaveLength(4)
      expect(helperCells[0]).toHaveClass('ant-table-selection-column')
      expect(helperCells[1]).toHaveClass('ant-table-expand-icon-column')
      expect((helperCells[2] as HTMLElement).style.width).toBe('200px')
      expect((helperCells[3] as HTMLElement).style.width).toBe('300px')

      const portalTable = container.querySelector(`.${STICKY_HEADER_CLASS} .ant-table > table`) as HTMLTableElement
      const cols = portalTable.querySelectorAll('colgroup > col')
      expect(cols).toHaveLength(4)
      expect(cols[0]).toHaveClass('ant-table-selection-col')
      expect(cols[1]).toHaveClass('ant-table-expand-icon-col')
      // widths come from the body columns (getBoundingClientRect is mocked to 100px)
      expect(portalTable.style.tableLayout).toBe('fixed')
      cols.forEach(col => expect((col as HTMLElement).style.width).toBe('100px'))
      expect(resizeObservers.some(observer => observer.observe.mock.calls.length > 0)).toBe(true)
    })

    it('keeps the default render with isVirtual={false}', () => {
      const NotVirtualWrapper: typeof StickyHeaderWrapper = props => <StickyHeaderWrapper {...props} isVirtual={false} />
      const { container } = renderStickyHeader(true, NotVirtualWrapper)

      const helperCells = container.querySelectorAll(`.${STICKY_HEADER_CLASS} > table > thead > tr:first-child > th`)
      expect(helperCells).toHaveLength(3)
      expect(helperCells[1]).not.toHaveClass('ant-table-expand-icon-column')
    })
  })

  describe('Virtual module', () => {
    it('does nothing without the flag', () => {
      const Row = (props: object) => <tr {...props} />
      const components = { body: { row: Row } }
      const received = renderVirtualModule({ components })

      expect(received.isVirtual).toBe(false)
      expect(received.components).toBe(components)
    })

    it('passes __EXPERIMENTAL__VIRTUAL_TANSTACK and replaces components.body.wrapper with the flag', () => {
      const received = renderVirtualModule({ __EXPERIMENTAL__VIRTUAL_TANSTACK: true })

      expect(received.isVirtual).toBe(true)
      const wrapper = (received.components?.body as { wrapper?: unknown })?.wrapper
      expect(typeof wrapper).toBe('function')
    })

    it('treats the legacy __EXPERIMENTAL__VIRTUAL flag the same way and does not pass it down', () => {
      const received = renderVirtualModule({ __EXPERIMENTAL__VIRTUAL: true })

      expect(received.isVirtual).toBe(true)
      expect(received.hasLegacyFlag).toBe(false)
      expect(typeof (received.components?.body as { wrapper?: unknown })?.wrapper).toBe('function')
    })

    it('keeps the other body components', () => {
      const Row = (props: object) => <tr {...props} />
      const received = renderVirtualModule({ __EXPERIMENTAL__VIRTUAL_TANSTACK: true, components: { body: { row: Row } } })

      const body = received.components?.body as { row?: unknown, wrapper?: unknown }
      expect(body.row).toBe(Row)
      expect(typeof body.wrapper).toBe('function')
    })

    it('keeps a custom body renderer (useVT) and passes __EXPERIMENTAL__VIRTUAL_TANSTACK=false', () => {
      const customBody = () => null
      const components = { body: customBody }
      const received = renderVirtualModule({ __EXPERIMENTAL__VIRTUAL_TANSTACK: true, components: components as ITableProps['components'] })

      expect(received.isVirtual).toBe(false)
      expect(received.components).toBe(components)
    })

    it('renders an empty body with the base wrapper', () => {
      const BaseWrapper = jest.fn((props: object) => <tbody data-base-wrapper {...props} />)
      const received = renderVirtualModule({
        __EXPERIMENTAL__VIRTUAL_TANSTACK: true,
        components: { body: { wrapper: BaseWrapper } }
      })
      const VirtualBody = (received.components?.body as { wrapper: ComponentType<{ children?: React.ReactNode }> }).wrapper

      const { container } = render(
        <table><VirtualBody>{[<tr key="placeholder" className="placeholder"><td>No data</td></tr>]}</VirtualBody></table>
      )

      expect(BaseWrapper).toHaveBeenCalled()
      const tbody = container.querySelector('tbody[data-base-wrapper]')
      expect(tbody).toBeTruthy()
      expect(tbody!.querySelector('.placeholder')).toBeTruthy()
      expect(tbody!.querySelector(`.${VIRTUAL_SPACER_CLASS}`)).toBeNull()
      expect((tbody as HTMLElement).style.overflowAnchor).toBe('')
    })
  })

  describe('Table with the flag', () => {
    it('renders an empty dataSource without spacers', async () => {
      const { container } = render(<TestTable columns={columns} dataSource={[]} __EXPERIMENTAL__VIRTUAL_TANSTACK />)
      await act(async () => {})

      const tbody = container.querySelector('.ant-table-tbody')
      expect(tbody).toBeTruthy()
      expect(tbody!.querySelector('.ant-table-placeholder')).toBeTruthy()
      expect(tbody!.querySelector(`.${VIRTUAL_SPACER_CLASS}`)).toBeNull()
      expect(tbody!.querySelectorAll('tr[data-row-key]')).toHaveLength(0)
    })

    it('mounts only the rows in the viewport', async () => {
      const count = 1000
      const { container } = render(
        <TestTable columns={columns} dataSource={makeData(count)} __EXPERIMENTAL__VIRTUAL_TANSTACK />
      )
      await act(async () => {})

      const tbody = container.querySelector('.ant-table-tbody')!
      const rows = tbody.querySelectorAll('tr[data-row-key]')
      expect(rows.length).toBeGreaterThan(0)
      expect(rows.length).toBeLessThan(100)
      expect(rows[0].getAttribute('data-row-key')).toBe('0')
      expect(tbody.querySelector(`.${VIRTUAL_SPACER_CLASS}`)).toBeTruthy()
      expect(resizeObservers.some(observer => observer.observe.mock.calls.some(([node]) => node === tbody))).toBe(true)
    })

    it('renders all rows without the flag', async () => {
      const { container } = render(<TestTable columns={columns} dataSource={makeData(150)} pagination={false} />)
      await act(async () => {})

      const tbody = container.querySelector('.ant-table-tbody')!
      expect(tbody.querySelectorAll('tr[data-row-key]')).toHaveLength(150)
      expect(tbody.querySelector(`.${VIRTUAL_SPACER_CLASS}`)).toBeNull()
    })
  })
})
