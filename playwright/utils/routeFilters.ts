import { Page } from "@playwright/test";

export async function applyRouteFilters(page: Page) {
  // Block analytics, tracking, and third-party domains
  await page.route(/.*adobedc\.net.*/, (route) => route.abort());
  await page.route(/.*adobedtm\.com.*/, (route) => route.abort());
  await page.route(/.*ipify\.org.*/, (route) => route.abort());
  await page.route(/.*demdex\.net.*/, (route) => route.abort());
  await page.route(/.*everesttech\.net.*/, (route) => route.abort());
  await page.route(/.*google-analytics\.com.*/, (route) => route.abort());
  await page.route(/.*googleapis\.com.*/, (route) => route.abort());
  await page.route(/.*google\.com.*/, (route) => route.abort());
  await page.route(/.*googletagmanager\.com.*/, (route) => route.abort());
  await page.route(/.*gstatic\.com.*/, (route) => route.abort());
  await page.route(/.*ipify\.org.*/, (route) => route.abort());
  await page.route(/.*newrelic\.com.*/, (route) => route.abort());
  await page.route(/.*nr-data\.net.*/, (route) => route.abort());
  await page.route(/.*omappapi\.com.*/, (route) => route.abort());
}
