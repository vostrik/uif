import { act, render } from '@testing-library/react'
import React, { ComponentType } from 'react'

import { STICKY_HEADER_CLASS, StickyHeaderWrapper } from '../helpers/stickyHeader'
import { ResizableColumnsContext } from '../helpers/stickyHeader/ResizableColumnsContext'
import { VirtualTanstackStickyHeaderWrapper } from '../helpers/virtualTanstack/VirtualTanstackStickyHeaderWrapper'
import { TableComponent } from '../modules'
import { VIRTUAL_TANSTACK_SPACER_CLASS, VirtualTanstack } from '../modules/VirtualTanstack'
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
  const received: { props?: ITableProps, components?: ITableProps['components'] } = {}
  const Probe = ((probeProps: ITableProps) => {
    received.props = probeProps
    received.components = probeProps.components
    return null
  }) as TableComponent
  const VirtualProbe = VirtualTanstack(Probe)
  render(<VirtualProbe {...props as ITableProps} />)
  return received
}

describe('Table __EXPERIMENTAL__VIRTUAL_TANSTACK', () => {
  /** Body table with selection, expand and two data columns, as antd renders it */
  const stickyHeaderFixture = (
    hasRowSelection: boolean,
    Wrapper: typeof StickyHeaderWrapper | typeof VirtualTanstackStickyHeaderWrapper
  ) => (
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
  const renderStickyHeader = (
    hasRowSelection: boolean,
    Wrapper: typeof StickyHeaderWrapper | typeof VirtualTanstackStickyHeaderWrapper = StickyHeaderWrapper
  ) => {
    const result = render(stickyHeaderFixture(hasRowSelection, Wrapper))
    return { ...result, rerender: () => result.rerender(stickyHeaderFixture(hasRowSelection, Wrapper)) }
  }
  const getHelperCells = (container: HTMLElement) =>
    container.querySelectorAll(`.${STICKY_HEADER_CLASS} > table > thead > tr:first-child > th`)

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

  describe('StickyHeaderWrapper with isVirtualTanstack (VirtualTanstackStickyHeaderWrapper)', () => {
    it('renders the default cells until the body columns are measured', () => {
      const { container } = renderStickyHeader(true, VirtualTanstackStickyHeaderWrapper)

      const helperCells = getHelperCells(container)
      expect(helperCells).toHaveLength(3)
      expect(helperCells[0]).toHaveClass('ant-table-selection-column')
      expect((helperCells[1] as HTMLElement).style.width).toBe('200px')
    })

    it('repeats the body column structure and copies the body column widths', () => {
      const { container, rerender } = renderStickyHeader(true, VirtualTanstackStickyHeaderWrapper)
      // the body columns are measured from the helper thead, its ref is attached after the first commit
      rerender()

      const helperCells = getHelperCells(container)
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

    it('is used for the sticky header of a real table with the flag', async () => {
      const { container } = render(
        <TestTable columns={columns} dataSource={makeData(5)} stickyHeader={0} rowSelection={{}} __EXPERIMENTAL__VIRTUAL_TANSTACK />
      )
      await act(async () => {})

      const portalTable = container.querySelector(`.${STICKY_HEADER_CLASS} .ant-table > table`) as HTMLTableElement
      expect(portalTable).toBeTruthy()
      expect(portalTable.style.tableLayout).toBe('fixed')
      const bodyCols = container.querySelectorAll('.ant-table-content > table > colgroup > col')
      expect(portalTable.querySelectorAll('colgroup > col')).toHaveLength(bodyCols.length)
    })
  })

  describe('VirtualTanstack module', () => {
    it('passes exactly the same props without the flag', () => {
      const Row = (props: object) => <tr {...props} />
      const props = { components: { body: { row: Row } }, rowKey: 'id', __EXPERIMENTAL__VIRTUAL_TANSTACK: false }
      const received = renderVirtualModule(props)

      expect(received.props).toEqual(props)
      expect(received.components).toBe(props.components)
    })

    it('replaces components.body.wrapper and keeps the other props with the flag', () => {
      const received = renderVirtualModule({ __EXPERIMENTAL__VIRTUAL_TANSTACK: true, rowKey: 'id' })

      expect(received.props).toMatchObject({ __EXPERIMENTAL__VIRTUAL_TANSTACK: true, rowKey: 'id' })
      const wrapper = (received.components?.body as { wrapper?: unknown })?.wrapper
      expect(typeof wrapper).toBe('function')
    })

    it('ignores the legacy __EXPERIMENTAL__VIRTUAL flag and passes it down', () => {
      const props = { __EXPERIMENTAL__VIRTUAL: true }
      const received = renderVirtualModule(props)

      expect(received.props).toEqual(props)
      expect(received.components).toBeUndefined()
    })

    it('keeps the other body components', () => {
      const Row = (props: object) => <tr {...props} />
      const received = renderVirtualModule({ __EXPERIMENTAL__VIRTUAL_TANSTACK: true, components: { body: { row: Row } } })

      const body = received.components?.body as { row?: unknown, wrapper?: unknown }
      expect(body.row).toBe(Row)
      expect(typeof body.wrapper).toBe('function')
    })

    it('passes exactly the same props with a custom body renderer (useVT)', () => {
      const customBody = () => null
      const props = { __EXPERIMENTAL__VIRTUAL_TANSTACK: true, components: { body: customBody } as ITableProps['components'] }
      const received = renderVirtualModule(props)

      expect(received.props).toEqual(props)
      expect(received.components).toBe(props.components)
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
      expect(tbody!.querySelector(`.${VIRTUAL_TANSTACK_SPACER_CLASS}`)).toBeNull()
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
      expect(tbody!.querySelector(`.${VIRTUAL_TANSTACK_SPACER_CLASS}`)).toBeNull()
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
      expect(tbody.querySelector(`.${VIRTUAL_TANSTACK_SPACER_CLASS}`)).toBeTruthy()
      expect(resizeObservers.some(observer => observer.observe.mock.calls.some(([node]) => node === tbody))).toBe(true)
    })

    it('renders all rows without the flag', async () => {
      const { container } = render(<TestTable columns={columns} dataSource={makeData(150)} pagination={false} />)
      await act(async () => {})

      const tbody = container.querySelector('.ant-table-tbody')!
      expect(tbody.querySelectorAll('tr[data-row-key]')).toHaveLength(150)
      expect(tbody.querySelector(`.${VIRTUAL_TANSTACK_SPACER_CLASS}`)).toBeNull()
    })
  })
})
