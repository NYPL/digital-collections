/**
 * DEV-ONLY shim for `lodash.mergewith`, aliased in next.config.js when
 * running `next dev`. Not used in production builds.
 *
 * Why: Next 15 renders with its bundled React 19, which in development
 * attaches `_owner` debug info to every React element, linking it to the
 * whole render tree. Chakra v2 (under Reservoir) deep-merges component props
 * with lodash.mergewith to resolve styles, and some Reservoir components pass
 * React elements as style props (e.g. Checkbox `icon`, Card `hasImage`).
 * lodash then tries to deep-clone the entire render tree and the dev server
 * hangs at 100% CPU.
 *
 * Fix: treat React elements as opaque values instead of merging into them.
 * Remove once Reservoir/Chakra no longer pass elements into style merges.
 */
// Import the real module by file path so the webpack alias doesn't point
// this shim back at itself.
const mergeWith = require("lodash.mergewith/index.js");

const REACT_ELEMENT_TYPES = new Set([
  Symbol.for("react.transitional.element"), // React 19
  Symbol.for("react.element"), // React 18
]);

const isReactElement = (value) =>
  value != null &&
  typeof value === "object" &&
  REACT_ELEMENT_TYPES.has(value.$$typeof);

function safeMergeWith(...args) {
  const customizer =
    typeof args[args.length - 1] === "function" ? args.pop() : undefined;

  return mergeWith(...args, (objValue, srcValue, ...rest) => {
    if (isReactElement(srcValue)) return srcValue;
    return customizer ? customizer(objValue, srcValue, ...rest) : undefined;
  });
}

module.exports = safeMergeWith;
