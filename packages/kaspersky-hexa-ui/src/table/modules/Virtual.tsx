/**
 * Row virtualization for Table (`virtual` prop).
 *
 * How it works:
 * antd/rc-table keeps doing all of its work as usual — sorting, filtering, selection (including "select all"),
 * expandable and tree rows, onRow, rowClassName, column renders, drag and drop, etc. It still creates a React
 * element for every row, which is cheap. We only replace the `<tbody>` wrapper: it mounts just the rows that
 * are visible in the scroll container (plus overscan) and replaces the rest with two spacer rows of the right
 * height. Real row heights are measured after render, so rows may have any height.
 *
 * The scroll container is the nearest vertically scrollable ancestor (the window by default), so page scroll,
 * a scrollable parent and antd `scroll.y` all work, and the sticky header is not affected at all.
 */
import {
  elementScroll,
  observeElementOffset,
  observeElementRect,
  observeWindowOffset,
  observeWindowRect,
  useVirtualizer,
  Virtualizer,
  windowScroll
} from '@tanstack/react-virtual'
import React, {
  ElementType,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react'

import { TableRecord } from '../types'

import { TableComponent } from './index'

const ESTIMATED_ROW_HEIGHT = 40
const OVERSCAN = 10
export const VIRTUAL_SPACER_CLASS = 'hexa-ui-table-virtual-spacer'

type ScrollElement = HTMLElement | Window

/** Nearest ancestor that really scrolls vertically, otherwise the window */
const getScrollParent = (node: HTMLElement): ScrollElement => {
  for (let el = node.parentElement; el && el !== document.body && el !== document.documentElement; el = el.parentElement) {
    if (/auto|scroll|overlay/.test(getComputedStyle(el).overflowY) && el.scrollHeight > el.clientHeight) return el
  }
  return window
}

/** Returns the virtualizer typed for the window when it scrolls the window */
const asWindowVirtualizer = (instance: Virtualizer<Element, Element>) =>
  (instance.scrollElement as unknown) instanceof Window ? instance as unknown as Virtualizer<Window, Element> : null

const getScrollOffset = (scrollElement: ScrollElement | null) =>
  scrollElement instanceof Window ? scrollElement.scrollY : scrollElement?.scrollTop ?? 0

/** Distance from the start of the scroll container content to the element */
const getOffsetInScrollElement = (node: HTMLElement, scrollElement: ScrollElement) => {
  const top = node.getBoundingClientRect().top
  return scrollElement instanceof Window
    ? top + scrollElement.scrollY
    : top - scrollElement.getBoundingClientRect().top + scrollElement.scrollTop
}

/** rc-table renders one body row element per (flattened) record, it always has a `record` prop */
const isBodyRow = (node: ReactNode): node is ReactElement =>
  isValidElement(node) && Object.prototype.hasOwnProperty.call(node.props, 'record')

/** Flattens rc-table tbody children (`[measureRow, rows[]]`) without cloning elements */
const flatten = (children: ReactNode, result: ReactNode[] = []): ReactNode[] => {
  if (Array.isArray(children)) children.forEach(child => flatten(child, result))
  else if (children !== null && children !== undefined && children !== false) result.push(children)
  return result
}

const Spacer = forwardRef<HTMLTableRowElement, { height: number }>(function Spacer ({ height }, ref) {
  return (
    <tr ref={ref} className={VIRTUAL_SPACER_CLASS} aria-hidden="true">
      {/* a single cell without colSpan: a big colSpan would add phantom columns to the table layout */}
      <td style={{ height, padding: 0, border: 0, background: 'transparent' }} />
    </tr>
  )
})

type BodyWrapperProps = { children?: ReactNode } & Record<string, unknown>

const createVirtualBody = (BaseWrapper: ElementType) =>
  function VirtualTableBody ({ children, ...wrapperProps }: BodyWrapperProps) {
    // rc-table memoizes its body, so this runs only when data/columns change, not on scroll
    const [rows, serviceRows] = useMemo(() => {
      const bodyRows: ReactElement[] = []
      const otherRows: ReactNode[] = [] // rc-table measure row / empty placeholder
      flatten(children).forEach(node => {
        if (isBodyRow(node)) bodyRows.push(node)
        else otherRows.push(node)
      })
      return [bodyRows, otherRows]
    }, [children])

    const topSpacerRef = useRef<HTMLTableRowElement>(null)
    const [scrollElement, setScrollElement] = useState<ScrollElement | null>(null)
    const [scrollMargin, setScrollMargin] = useState(0)

    // useVirtualizer is typed for elements only, the window is supported by switching observers at runtime
    const virtualizer = useVirtualizer<Element, Element>({
      count: rows.length,
      enabled: Boolean(scrollElement), // starts after the scroll container is found
      getScrollElement: () => scrollElement as Element | null,
      initialOffset: () => getScrollOffset(scrollElement),
      getItemKey: index => rows[index]?.key ?? index,
      estimateSize: () => ESTIMATED_ROW_HEIGHT,
      overscan: OVERSCAN,
      scrollMargin,
      observeElementRect: (instance, cb) => {
        const windowInstance = asWindowVirtualizer(instance)
        return windowInstance ? observeWindowRect(windowInstance, cb) : observeElementRect(instance, cb)
      },
      observeElementOffset: (instance, cb) => {
        const windowInstance = asWindowVirtualizer(instance)
        return windowInstance ? observeWindowOffset(windowInstance, cb) : observeElementOffset(instance, cb)
      },
      scrollToFn: (offset, options, instance) => {
        const windowInstance = asWindowVirtualizer(instance)
        return windowInstance ? windowScroll(offset, options, windowInstance) : elementScroll(offset, options, instance)
      }
    })
    const items = virtualizer.getVirtualItems()

    // Measures rendered rows: a row is its <tr data-row-key> plus following rows without a key (expanded content)
    const measureRef = useRef(() => {})
    measureRef.current = () => {
      const tbody = topSpacerRef.current?.parentElement
      if (!tbody) return
      const sizes: number[] = []
      for (const tr of Array.from(tbody.children)) {
        if (tr.classList.contains(VIRTUAL_SPACER_CLASS)) continue
        if (tr.hasAttribute('data-row-key')) sizes.push(0)
        if (sizes.length) sizes[sizes.length - 1] += tr.getBoundingClientRect().height
      }
      sizes.forEach((size, i) => {
        const item = items[i]
        if (item && size > 0 && Math.abs(item.size - size) > 0.5) virtualizer.resizeItem(item.index, size)
      })
    }

    const hasRows = rows.length > 0

    // Find the scroll container when rows change (the spacers already give the body its full height)
    useLayoutEffect(() => {
      if (topSpacerRef.current) setScrollElement(getScrollParent(topSpacerRef.current))
    }, [rows.length])

    // After every render: where rows start inside the scroll container (toolbar, header... above) and row heights
    useLayoutEffect(() => {
      if (topSpacerRef.current && scrollElement) {
        const offset = Math.round(getOffsetInScrollElement(topSpacerRef.current, scrollElement))
        if (Math.abs(offset - scrollMargin) > 1) setScrollMargin(offset)
      }
      measureRef.current()
    })

    // Row content can change without a render (images, fonts, column resize) — remeasure on body resize
    useLayoutEffect(() => {
      const tbody = topSpacerRef.current?.parentElement
      if (!tbody) return
      const observer = new ResizeObserver(() => measureRef.current())
      observer.observe(tbody)
      return () => observer.disconnect()
    }, [hasRows])

    if (!hasRows) return <BaseWrapper {...wrapperProps}>{children}</BaseWrapper>

    // until the scroll container is found the virtualizer is disabled: reserve the estimated height
    const totalSize = scrollElement ? virtualizer.getTotalSize() : rows.length * ESTIMATED_ROW_HEIGHT
    const start = items.length ? items[0].start - scrollMargin : 0
    const end = items.length ? items[items.length - 1].end - scrollMargin : 0

    return (
      // overflow-anchor: the virtualizer itself keeps the scroll position when rows above change their height
      <BaseWrapper {...wrapperProps} style={{ ...wrapperProps.style as object, overflowAnchor: 'none' }}>
        {serviceRows}
        <Spacer ref={topSpacerRef} height={start} />
        {items.map(item => rows[item.index])}
        {totalSize - end > 0 && <Spacer height={totalSize - end} />}
      </BaseWrapper>
    )
  }

export const Virtual = <T extends TableRecord = TableRecord>(
  Component: TableComponent<T>
): TableComponent<T> => function VirtualModule ({ virtual, __EXPERIMENTAL__VIRTUAL, ...props }) {
  const isVirtual = Boolean(virtual ?? __EXPERIMENTAL__VIRTUAL)

  const components = useMemo(() => {
    const body = props.components?.body
    // a function body is a custom body renderer (e.g. useVT) that virtualizes on its own
    if (!isVirtual || typeof body === 'function') return props.components

    return {
      ...props.components,
      body: { ...body, wrapper: createVirtualBody(body?.wrapper ?? 'tbody') }
    }
  }, [isVirtual, props.components])

  return <Component {...props} components={components} />
}
