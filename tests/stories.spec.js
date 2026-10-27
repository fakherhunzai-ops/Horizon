import { test, expect } from "@playwright/test";
import { services } from "../src/data.js";
import { stories } from "../src/service-stories.js";
test("service stories have distinct content and deliberate adjacent services", () => {
  expect(Object.keys(stories).sort()).toEqual(services.map((s) => s[1]).sort());
  for (const field of [
    "lead",
    "copy",
    "problem",
    "deliverTitle",
    "workflowTitle",
    "type",
  ])
    expect(new Set(Object.values(stories).map((s) => s[field])).size).toBe(15);
  const allDeliverables = Object.values(stories).flatMap((s) =>
    s.deliver.map((d) => d[0]),
  );
  expect(new Set(allDeliverables).size).toBe(allDeliverables.length);
  for (const [slug, s] of Object.entries(stories)) {
    expect(s.related).toHaveLength(3);
    expect(s.related).not.toContain(slug);
    for (const r of s.related) expect(stories[r]).toBeTruthy();
    expect(s.faq).toHaveLength(3);
    expect(s.proof).toEqual([]);
  }
});
test("service pages show their own copy, visuals, FAQ and related services", async ({
  page,
}) => {
  test.setTimeout(90000);
  for (const [slug, s] of Object.entries(stories)) {
    await page.goto("/services/" + slug);
    await expect(page.locator("h1")).toHaveText(
      s.lead + s.highlight + (s.tail || ""),
    );
    await expect(page.locator("h1 em")).toHaveText(s.highlight);
    await expect(page.locator(".breadcrumbs [aria-current=page]")).toHaveText(
      services.find((x) => x[1] === slug)[0],
    );
    await expect(
      page.locator(".service-story-hero .story-" + s.type),
    ).toBeVisible();
    await expect(page.locator(".story-process li")).toHaveCount(5);
    for (const [q, a] of s.faq) {
      await page.locator("summary").filter({ hasText: q }).click();
      await expect(page.getByText(a, { exact: true })).toBeVisible();
    }
    for (const related of s.related)
      await expect(
        page.locator(
          '.service-story-page .directory-card[href="/services/' +
            related +
            '"]',
        ),
      ).toHaveCount(1);
    await expect(
      page.getByText("Built around your business.", { exact: true }),
    ).toHaveCount(0);
  }
});
test("all service visuals fit every requested breakpoint", async ({ page }) => {
  test.setTimeout(120000);
  for (const width of [1440, 1280, 1024, 768, 430, 390, 375]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const slug of Object.keys(stories)) {
      await page.goto("/services/" + slug);
      await page.evaluate(() => document.fonts.ready);
      const bounds = await page
        .locator(".story-visual")
        .evaluateAll((els) =>
          els.map((e) => ({
            scroll: e.scrollWidth,
            width: e.clientWidth,
            left: e.getBoundingClientRect().left,
            right: e.getBoundingClientRect().right,
          })),
        );
      for (const b of bounds) {
        expect(b.scroll, slug + " at " + width).toBeLessThanOrEqual(
          b.width + 1,
        );
        expect(b.left).toBeGreaterThanOrEqual(0);
        expect(b.right).toBeLessThanOrEqual(width);
      }
      if (width >= 1024) {
        const lines = await page
          .locator("h1")
          .evaluate(
            (e) => e.offsetHeight / parseFloat(getComputedStyle(e).lineHeight),
          );
        expect(lines, slug + " heading at " + width).toBeLessThan(3.1);
      }
    }
  }
});
