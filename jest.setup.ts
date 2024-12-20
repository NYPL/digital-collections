/* eslint-disable no-undef */
import { MatchMedia } from "@nypl/design-system-react-components";
import "@testing-library/jest-dom";
import { toHaveNoViolations } from "jest-axe";
expect.extend(toHaveNoViolations);

// We expect an error to be thrown and we do catch, but it still gets
// logged and we don't want to see expected errors while we test.
jest.spyOn(global.console, "error").mockImplementation(() => jest.fn());
jest.spyOn(global.console, "warn").mockImplementation(() => jest.fn());

new MatchMedia();

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

(global as any).setImmediate = Object.assign(
  (fn: (...args: any[]) => void, ...args: any[]) => setTimeout(fn, 0, ...args),
  {
    __promisify__: () => Promise.resolve(), // Add the __promisify__ property
  }
);
