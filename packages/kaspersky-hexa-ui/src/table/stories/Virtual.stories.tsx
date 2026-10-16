import { withMeta } from '@sb/components/Meta'
import { Button } from '@src/button'
import { Link } from '@src/link'
import { SectionMessage } from '@src/section-message'
import { Space } from '@src/space'
import { Tag } from '@src/tag'
import { P, Text } from '@src/typography'
import { Meta } from '@storybook/react'
import React, { Key, useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'

import { Table, TableColumn, TableRecord, useVT } from '../'
import MetaData from '../__meta__/meta.json'
import { ITableProps } from '../types'

import {
  BasicRowType,
  basicTwoColumns,
  Story,
  Wrapper
} from './_commonConstants'

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/[DEV]/Virtual',
  component: Table,
  args: {
    afterColumn: false,
    useDragDrop: false
  },
  parameters: {
    docs: {
      page: withMeta(MetaData)
    }
  },
  tags: ['!autodocs']
}
export default meta

type row = BasicRowType & { index?: number }

const columns = [
  {
    ...basicTwoColumns[0],
    isSortable: true,
    width: 200
  },
  {
    ...basicTwoColumns[1],
    isSortable: true,
    allowMultipleFilters: true,
    filters: [
      {
        name: 'Even',
        filter: (element: row): boolean => {
          const numbers = element.description.match(/\d+/gi)
          if (numbers) return Number(numbers[0]) % 2 === 0
          return false
        }
      },
      {
        name: 'Initial False',
        filter: (): boolean => false
      },
      {
        name: 'Greater than 20',
        filter: (element: row): boolean => {
          const numbers = element.description.match(/\d+/gi)
          if (numbers) return Number(numbers[0]) > 20
          return false
        }
      }
    ],
    width: 200
  },
  {
    title: 'table.column3.name',
    key: 'index',
    dataIndex: 'index',
    filters: [
      {
        name: 'Even',
        filter: (element: row): boolean => {
          return Number(element.index) % 2 === 0
        }
      },
      {
        name: 'Odd',
        filter: (element: row): boolean => {
          return Number(element.index) % 2 !== 0
        }
      }
    ],
    width: 200
  }
] as ITableProps['columns']

const data = Array.from({ length: 200 }, (_, key) => ({
  name: `Name-${key}`,
  index: `Index-${key}`,
  description: `Description-${key}`,
  key
}))

const StyledText = styled(Text)`
  display: inline-block;
  padding-top: 8px;
`

const StyledTag = styled(Tag)`
  margin: 0;
`

const message = (
  <SectionMessage closable={false} mode="info">
    <P>
      @kaspersky/hexa-ui provides <StyledTag>useVT</StyledTag> hook for virtualization. It is <StyledTag>virtualizedtableforantd4</StyledTag> with
      few fixes under the hood. For usage details please
      reference <Link href="https://github.com/wubostc/virtualized-table-for-antd" target="_blank">virtualizedtableforantd4</Link>.
    </P>
  </SectionMessage>
)

export const Basic: Story = {
  render: (args: ITableProps) => {
    const TABLE_BODY_HEIGHT = 300
    const [selected, setSelected] = useState<Key[]>([])
    const [vt, , vtRef] = useVT(() => ({ scroll: { y: TABLE_BODY_HEIGHT } }), [])
    const [dataSource, setDataSource] = useState<TableRecord[]>(data)

    return (
      <Wrapper>
        {message}
        <StyledText>Selected: {selected.length}</StyledText>
        <Space gap={8}>
          <Button onClick={() => vtRef.current.scrollToIndex(0)}>Scroll to Top</Button>
          <Button onClick={() => vtRef.current.scrollTo(-1)}>Scroll to Bottom</Button>
        </Space>
        <Table
          {...args}
          dataSource={dataSource}
          onDragEnd={setDataSource}
          columns={columns}
          components={vt}
          pagination={false}
          rowSelection={{
            selectedRowKeys: selected,
            onChange: setSelected
          }}
          scroll={{ y: TABLE_BODY_HEIGHT }}
        />
      </Wrapper>
    )
  }
}

export const Fetch: Story = {
  render: (args: ITableProps) => {
    const TABLE_BODY_HEIGHT = 300
    const [selected, setSelected] = useState<Key[]>([])
    const [dataSource, setDataSource] = useState<TableRecord[]>(data.slice(0, 15))

    const [loading, setLoading] = useState(false)
    const loadMore = useCallback(async () => {
      setLoading(true)
      await new Promise(resolve => setTimeout(resolve, 500))

      setDataSource(data.slice(0, dataSource.length + 15))
      setLoading(false)
    }, [dataSource.length])

    const [vt, , vtRef] = useVT(() => ({
      onScroll: params => {
        if (params.isEnd) {
          loadMore()
        }
      },
      scroll: { y: TABLE_BODY_HEIGHT }
    }), [loadMore])

    return (
      <Wrapper>
        {message}
        <StyledText>Selected: {selected.length}</StyledText>
        <Space gap={8}>
          <Button onClick={() => vtRef.current.scrollToIndex(0)}>Scroll to Top</Button>
          <Button onClick={() => vtRef.current.scrollTo(-1)}>Scroll to Bottom</Button>
        </Space>
        <Table
          {...args}
          dataSource={dataSource}
          onDragEnd={setDataSource}
          columns={columns}
          components={vt}
          loading={loading}
          pagination={false}
          rowSelection={{
            selectedRowKeys: selected,
            onChange: setSelected
          }}
          scroll={{ y: TABLE_BODY_HEIGHT }}
        />
      </Wrapper>
    )
  }
}

// ---------------------------------------------------------------------------------------------------------------------
// `virtual` prop: 40 000 rows of any height, sticky header and all the table features
// ---------------------------------------------------------------------------------------------------------------------

const ROWS_COUNT = 40_000
const WORDS = ['endpoint', 'policy', 'threat', 'quarantine', 'scan', 'update', 'agent', 'incident', 'rule', 'network']
const STATUSES = ['Online', 'Offline', 'Critical', 'Warning']

type VirtualRow = TableRecord & {
  key: number,
  name: string,
  status: string,
  description: string,
  tags: string[]
}

// Deterministic "random" so rows (and their heights) are stable between renders
const pseudoRandom = (seed: number) => {
  const x = Math.sin(seed * 9301 + 49297) * 233280
  return x - Math.floor(x)
}

const virtualData: VirtualRow[] = Array.from({ length: ROWS_COUNT }, (_, key) => ({
  key,
  name: `Device-${key}`,
  status: STATUSES[key % STATUSES.length],
  // from one word to several lines of text — rows of different heights
  description: Array.from(
    { length: 1 + Math.floor(pseudoRandom(key) ** 3 * 60) },
    (_, i) => WORDS[(key + i) % WORDS.length]
  ).join(' '),
  tags: key % 7 === 0 ? WORDS.slice(0, 1 + key % WORDS.length) : []
}))

const virtualColumns: TableColumn<VirtualRow>[] = [
  {
    key: 'name',
    dataIndex: 'name',
    title: 'Name',
    width: 160,
    isSortable: true,
    sorter: (a, b, isAsc) => (a.key - b.key) * (isAsc ? 1 : -1)
  },
  {
    key: 'status',
    dataIndex: 'status',
    title: 'Status',
    width: 120,
    isSortable: true,
    filters: STATUSES.map(status => ({
      name: status,
      filter: (row: VirtualRow) => row.status === status
    }))
  },
  {
    key: 'description',
    dataIndex: 'description',
    title: 'Description (any length)',
    isSortable: true,
    sorter: (a, b, isAsc) => (a.description.length - b.description.length) * (isAsc ? 1 : -1)
  },
  {
    key: 'tags',
    dataIndex: 'tags',
    title: 'Tags',
    width: 220,
    render: (tags: string[]) => (
      <Space gap={4} direction="vertical">
        {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
      </Space>
    )
  }
]

// Hoisted: the table re-applies `expandable` when its identity changes
const virtualExpandable: ITableProps<VirtualRow>['expandable'] = {
  rowExpandable: row => row.key % 3 === 0,
  expandedRowRender: row => <P>Details of {row.name}: {row.description}</P>
}

export const VirtualStickyHeader40k: Story = {
  name: 'Virtual, sticky header, 40k rows',
  render: (args: ITableProps) => {
    const [selected, setSelected] = useState<Key[]>([])
    const [dataSource, setDataSource] = useState(virtualData)
    const toolbar = useMemo(() => ({
      sticky: 0,
      left: [{ type: 'button', key: 'count', label: `Rows: ${dataSource.length}` }],
      showColumns: true,
      showSettingsSearch: true
    }), [dataSource.length])

    return (
      <Wrapper>
        <StyledText>Selected: {selected.length}</StyledText>
        <Table<VirtualRow>
          {...(args as ITableProps<VirtualRow>)}
          virtual
          stickyHeader={40}
          pagination={false}
          toolbar={toolbar as ITableProps<VirtualRow>['toolbar']}
          dataSource={dataSource}
          columns={virtualColumns}
          onDragEnd={setDataSource}
          rowSelection={{
            selectedRowKeys: selected,
            onChange: setSelected
          }}
          expandable={virtualExpandable}
        />
      </Wrapper>
    )
  }
}
