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
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react'

import { TableRecord } from '../types'

import { TableComponent } from './index'

const ESTIMATED_ROW_HEIGHT = 40
const estimateSize = () => ESTIMATED_ROW_HEIGHT
const OVERSCAN = 10
export const VIRTUAL_TANSTACK_SPACER_CLASS = 'hexa-ui-table-virtual-tanstack-spacer'

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
    <tr ref={ref} className={VIRTUAL_TANSTACK_SPACER_CLASS} aria-hidden="true">
      {/* a single cell without colSpan: a big colSpan would add phantom columns to the table layout */}
      <td style={{ height, padding: 0, border: 0, background: 'transparent' }} />
    </tr>
  )
})

type BodyWrapperProps = { children?: ReactNode } & Record<string, unknown>

const createVirtualTanstackBody = (BaseWrapper: ElementType) =>
  function VirtualTanstackTableBody ({ children, ...wrapperProps }: BodyWrapperProps) {
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

    // stable while rows are the same: a new function makes the virtualizer recompute all measurements
    const getItemKey = useCallback((index: number) => rows[index]?.key ?? index, [rows])

    const topSpacerRef = useRef<HTMLTableRowElement>(null)
    const [scrollElement, setScrollElement] = useState<ScrollElement | null>(null)
    const [scrollMargin, setScrollMargin] = useState(0)

    // useVirtualizer is typed for elements only, the window is supported by switching observers at runtime
    const virtualizer = useVirtualizer<Element, Element>({
      count: rows.length,
      enabled: Boolean(scrollElement), // starts after the scroll container is found
      getScrollElement: () => scrollElement as Element | null,
      initialOffset: () => getScrollOffset(scrollElement),
      getItemKey,
      estimateSize,
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
        if (tr.classList.contains(VIRTUAL_TANSTACK_SPACER_CLASS)) continue
        if (tr.hasAttribute('data-row-key')) sizes.push(0)
        if (sizes.length) sizes[sizes.length - 1] += tr.getBoundingClientRect().height
      }
      sizes.forEach((size, i) => {
        const item = items[i]
        if (item && size > 0 && Math.abs(item.size - size) > 0.5) virtualizer.resizeItem(item.index, size)
      })
    }

    const hasRows = rows.length > 0

    // The scroll container can change when the body height changes: e.g. scroll.y starts to scroll only after
    // real row heights replace the estimated ones. setState with the same element is a no-op
    const updateScrollElement = () => {
      if (topSpacerRef.current) setScrollElement(getScrollParent(topSpacerRef.current))
    }
    const updateScrollElementRef = useRef(updateScrollElement)
    updateScrollElementRef.current = updateScrollElement

    useLayoutEffect(updateScrollElement, [rows.length])

    // After every render: where rows start inside the scroll container (toolbar, header... above) and row heights
    useLayoutEffect(() => {
      if (topSpacerRef.current && scrollElement) {
        const offset = Math.round(getOffsetInScrollElement(topSpacerRef.current, scrollElement))
        if (Math.abs(offset - scrollMargin) > 1) setScrollMargin(offset)
      }
      measureRef.current()
    })

    // Row content can change without a render (images, fonts, column resize) — remeasure on body resize
    // and check the scroll container again
    useLayoutEffect(() => {
      const tbody = topSpacerRef.current?.parentElement
      if (!tbody) return
      const observer = new ResizeObserver(() => {
        measureRef.current()
        updateScrollElementRef.current()
      })
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

export const VirtualTanstack = <T extends TableRecord = TableRecord>(
  Component: TableComponent<T>
): TableComponent<T> => function VirtualTanstackModule ({ __EXPERIMENTAL__VIRTUAL_TANSTACK, __EXPERIMENTAL__VIRTUAL, ...props }) {
  const isVirtualTanstack = Boolean(__EXPERIMENTAL__VIRTUAL_TANSTACK ?? __EXPERIMENTAL__VIRTUAL)

  // a function body is a custom body renderer (e.g. useVT) that virtualizes on its own
  const virtualizesBody = isVirtualTanstack && typeof props.components?.body !== 'function'

  const components = useMemo(() => {
    const body = props.components?.body
    if (!virtualizesBody || typeof body === 'function') return props.components

    return {
      ...props.components,
      body: { ...body, wrapper: createVirtualTanstackBody(body?.wrapper ?? 'tbody') }
    }
  }, [virtualizesBody, props.components])

  return <Component {...props} __EXPERIMENTAL__VIRTUAL_TANSTACK={virtualizesBody} components={components} />
}
