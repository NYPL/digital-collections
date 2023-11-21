import { useEffect } from "react";

/**  Code taken from https://www.tpgi.com/prevent-focused-elements-from-being-obscured-by-sticky-headers/.
 *  Requires data attribute (data-sticky-header) on header, and could be refactored to work
 *  for sticky footer as well.  applyStickyMargin() checks whether a focused element needs a
 *  sticky margin by calculating boundary interactions, then applies that margin (pushing page up)
 *  accordingly. applyStickyMargin() is called by a focus event on any page element or a
 *  ResizeObserver event on the header.
 */

export function useStickyMargin() {
  useEffect(() => {
    const applyStickyMargin = (sticky) => {
      // Specifying which element on the page is focused, if none then defaulting to body.
      const focused = (document.activeElement || document.body) as HTMLElement;
      let applicable = focused !== document.body;
      if (applicable && sticky.header) {
        applicable = !sticky.header.contains(focused);
      }
      // Calculating difference between the edge of the header and the focused element.
      if (applicable) {
        const edge = {
          header: sticky.header
            ? sticky.header.getBoundingClientRect().bottom + sticky.offset
            : 0,
        };
        const diff = sticky.header
          ? focused.getBoundingClientRect().top - edge.header
          : 0;
        // Then scrolls window by that difference (plus a little padding).
        if (diff < 0) {
          window.scrollBy(0, diff - 10);
        }
      }
    };

    /**  For Typescript: defining 'sticky' as an object, because multiple
     *   elements on page could be sticky. See article linked at top for the full
     *   implementation.
     **/
    let sticky: {
      header?: HTMLElement | null;
      // Could have footer, other sticky elements.
      offset?: number;
    } = {};

    sticky.header = document.querySelector(
      `[data-sticky-${"header"}]`
    ) as HTMLElement;

    // Checks if the offset is a number (base 10), defaults to 0.
    sticky.offset = isNaN(parseInt(sticky.offset as any, 10))
      ? 0
      : parseInt(sticky.offset as any, 10);

    /** Creates a ResizeObserver instance with a callback function that calls
     * applyStickyMargin() on the sticky object.
     **/
    const observer = new ResizeObserver(() => applyStickyMargin(sticky));

    // Handles "focus" events.
    const applyStickyMarginWithEvent = (ev) => {
      applyStickyMargin(sticky);
    };

    document.addEventListener("focus", applyStickyMarginWithEvent, true);
    return () => {
      observer.disconnect();
      document.removeEventListener("focus", applyStickyMarginWithEvent, true);
    };
  }, []);
}
