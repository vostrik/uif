import React from 'react'

import { StickyHeaderWrapper } from '../stickyHeader/StickyHeader'

export const VirtualTanstackStickyHeaderWrapper = (props: { children: React.ReactNode, className: string }) => (
  <StickyHeaderWrapper {...props} isVirtualTanstack />
)
