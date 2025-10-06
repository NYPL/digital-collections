import type { Page, Locator } from "@playwright/test";

export function getExactByRole(
  page: Page,
  role: string, // Keep role as generic string for function callers
  name: string
): Locator {
  // FINAL FIX: Use 'as const' (if supported) or 'as any' to bypass the strict
  // ARIA Role union check that is causing the error (TS2345).
  return page.getByRole(role as any, { name: name, exact: true });
}
