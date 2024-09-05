import { useState, useEffect } from "react";
import { headerBreakpoints } from "../utils/breakpoints";

/* Returns if the page is scrolled past the header, could be refactored for other elements. */
export function useScrolled(elementId: string) {
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    let DELAY_STICKY_TRANSITION =
      window.innerWidth < headerBreakpoints.smTablet ? 0 : 300;
    function handleScroll() {
      const element = document.getElementById(elementId);
      if (element) {
        const offset = element.offsetHeight + DELAY_STICKY_TRANSITION;
        if (window.scrollY > offset) {
          setIsScrolled(false);
        } else {
          setIsScrolled(true);
        }
      }
    }
    function handleScreenSize() {
      const newDelay = window.innerWidth < headerBreakpoints.smTablet ? 0 : 300;
      if (newDelay !== DELAY_STICKY_TRANSITION) {
        setIsScrolled(true);
        DELAY_STICKY_TRANSITION = newDelay;
      }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScreenSize);
    };
  }, [elementId]);

  return isScrolled;
}
