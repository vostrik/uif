import { expect, Page, test } from '@playwright/test'

const VIRTUAL_STORY = 'hexa-ui-components-table-dev-virtual--virtual-sticky-header-40-k'
const STICKY_STORY = 'hexa-ui-components-table-sticky--sticky-header'

const HEADER_CELLS = '.hexa-ui-table-sticky-header .ant-table > table > thead.ant-table-thead > tr > th'
const BODY_ROWS = '.table-scrolling-wrapper tbody tr[data-row-key]'

const openStory = async (page: Page, id: string, args?: string) => {
  await page.goto(`/iframe.html?id=${id}&viewMode=story${args ? `&args=${args}` : ''}`)
  await page.locator(BODY_ROWS).first().waitFor()
}

type Misalignment = { index: number, header: { left: number, width: number }, body: { left: number, width: number } }

/** Compares the sticky header cells with the cells of the first body row, returns the columns that differ */
const getHeaderMisalignment = (page: Page) => page.evaluate(([headerSelector, rowSelector]) => {
  const headerCells = Array.from(document.querySelectorAll(headerSelector))
  const bodyCells = Array.from(document.querySelector(rowSelector)?.children ?? [])
  if (!headerCells.length || headerCells.length !== bodyCells.length) {
    return { count: { header: headerCells.length, body: bodyCells.length }, misaligned: [] as Misalignment[] }
  }
  const misaligned: Misalignment[] = []
  headerCells.forEach((th, index) => {
    const header = th.getBoundingClientRect()
    const body = bodyCells[index].getBoundingClientRect()
    if (Math.abs(header.left - body.left) > 1 || Math.abs(header.width - body.width) > 1) {
      misaligned.push({
        index,
        header: { left: header.left, width: header.width },
        body: { left: body.left, width: body.width }
      })
    }
  })
  return { count: null, misaligned }
}, [HEADER_CELLS, BODY_ROWS])

const expectHeaderAlignedWithBody = async (page: Page) => {
  await expect.poll(() => getHeaderMisalignment(page)).toEqual({ count: null, misaligned: [] })
}

test.describe('Table __EXPERIMENTAL__VIRTUAL_TANSTACK', () => {
  for (const [mode, args] of [['scroll', undefined], ['last', 'resizingMode:last']] as const) {
    test(`sticky header is aligned with the body on viewport resize (resizingMode: ${mode})`, async ({ page }) => {
      await page.setViewportSize({ width: 1600, height: 900 })
      await openStory(page, VIRTUAL_STORY, args)

      for (const width of [1600, 800, 1300]) {
        await page.setViewportSize({ width, height: 900 })
        await expectHeaderAlignedWithBody(page)
      }
    })
  }

  test('scrolling the window to the end mounts the last row and keeps the DOM small', async ({ page }) => {
    await openStory(page, VIRTUAL_STORY)
    const lastRow = page.locator(`${BODY_ROWS}[data-row-key="39999"]`)

    // row heights are measured while scrolling and the total height changes: scroll until the last row is on screen
    await expect.poll(async () => {
      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight))
      const box = await lastRow.count() ? await lastRow.boundingBox() : null
      return Boolean(box && box.y >= 0 && box.y + box.height <= page.viewportSize()!.height)
    }, { timeout: 30_000 }).toBe(true)

    expect(await page.locator(BODY_ROWS).count()).toBeLessThan(60)
  })

  test('select all selects every row, not only the mounted ones', async ({ page }) => {
    await openStory(page, VIRTUAL_STORY)

    await page.locator(`${HEADER_CELLS}.ant-table-selection-column input[type="checkbox"]`).check()

    await expect(page.getByText('Selected: 40000')).toBeVisible()
  })

  test('expanding a row renders its expanded content', async ({ page }) => {
    await openStory(page, VIRTUAL_STORY)
    await expect(page.locator('tr.ant-table-expanded-row')).toHaveCount(0)

    await page.locator(`${BODY_ROWS}[data-row-key="3"] [data-testid="hexa-ui-table-row-expand-icon"]`).click()

    await expect(page.locator('tr.ant-table-expanded-row')).toHaveCount(1)
    await expect(page.locator('tr.ant-table-expanded-row')).toContainText('Details of Device-3')
  })
})

test.describe('Table sticky header without virtualization', () => {
  test('sticky header is aligned with the body', async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 900 })
    await openStory(page, STICKY_STORY)

    await expectHeaderAlignedWithBody(page)
  })
})
