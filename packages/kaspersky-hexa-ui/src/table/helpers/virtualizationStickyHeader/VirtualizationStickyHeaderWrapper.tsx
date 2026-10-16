import React from 'react'

import { StickyHeaderWrapper } from '../stickyHeader/StickyHeader'

export const VirtualizationStickyHeaderWrapper = (props: { children: React.ReactNode, className: string }) => (
  <StickyHeaderWrapper {...props} isVirtualization />
)
