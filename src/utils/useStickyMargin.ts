import { useEffect } from "react";

/* Code taken from https://www.tpgi.com/prevent-focused-elements-from-being-obscured-by-sticky-headers/.
Requires data attribute (data-sticky-header) on header, and could be refactored to work for sticky footer as well.  
applyStickyMargin() checks whether a focused element needs a sticky margin by calculating boundary interactions, then 
applies that margin (pushing page up) accordingly. applyStickyMargin() is called by a focus event on any page element or a 
ResizeObserver event on the header. */

export function useStickyMargin() {
  useEffect(() => {
    const applyStickyMargin = (entries, observer, sticky) => {
      const focused = (document.activeElement || document.body) as HTMLElement;

      let applicable = focused !== document.body;
      if (applicable && sticky.header) {
        applicable = !sticky.header.contains(focused);
      }
      if (applicable && sticky.selector) {
        applicable = focused.matches(sticky.selector);
      }

      if (applicable) {
        const edge = {
          header: sticky.header
            ? sticky.header.getBoundingClientRect().bottom + sticky.offset!
            : 0,
        };
        const diff = sticky.header
          ? focused.getBoundingClientRect().top - edge.header
          : 0;
        if (diff < 0) {
          window.scrollBy(0, diff);
        }
      }
    };

    let sticky: {
      header?: HTMLElement | null;
      selector?: string | null;
      media?: string | null;
      offset?: number;
    } = {};

    sticky.header = document.querySelector(
      `[data-sticky-${"header"}]`
    ) as HTMLElement;

    for (const key of ["selector", "media", "offset"]) {
      sticky[key] = null;
      const source = document.querySelector(
        `[data-sticky-${key}]`
      ) as HTMLElement | null;
      if (source) {
        sticky[key] = source.getAttribute(`data-sticky-${key}`)?.trim() || null;
      }
    }

    sticky.offset = isNaN(parseInt(sticky.offset as any, 10))
      ? 0
      : parseInt(sticky.offset as any, 10);

    const observer = new ResizeObserver((entries, observer) =>
      applyStickyMargin(entries, observer, sticky)
    );

    const enableStickyMonitors = () => {
      if (sticky.header) {
        observer.observe(sticky.header);
      }
    };

    const disableStickyMonitors = () => {
      if (sticky.header) {
        observer.unobserve(sticky.header);
      }
    };

    let matches = true;

    if (sticky.media) {
      const query = window.matchMedia(sticky.media);
      matches = query.matches;
      query.addEventListener("change", (e) => {
        if ((matches = e.matches)) {
          enableStickyMonitors();
        } else {
          disableStickyMonitors();
        }
      });
    }

    if (matches) {
      enableStickyMonitors();
    }

    const applyStickyMarginWithEvent = (ev) => {
      applyStickyMargin([], observer, sticky);
    };

    document.addEventListener("focus", applyStickyMarginWithEvent, true);
    return () => {
      observer.disconnect();
      document.removeEventListener("focus", applyStickyMarginWithEvent, true);
    };
  }, []);
}
