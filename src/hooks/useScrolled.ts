import { useState, useEffect } from "react";

/* Returns if page is scrolled past header, could be refactored for other elements. */
export function useScrolled(elementId) {
  const [isScrolled, setIsScrolled] = useState(true);
  const DELAY_STICKY_TRANSITION = 300;

  useEffect(() => {
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementId]);
  return isScrolled;
}
