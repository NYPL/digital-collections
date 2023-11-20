import { useState, useEffect } from "react";

/* Returns if page is scrolled past given element. */
export function useScrolled(elementId) {
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const element = document.getElementById(elementId);
      if (element) {
        const offset = element.offsetHeight + 300;
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
