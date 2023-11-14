import { useState, useEffect } from "react";

export function useScrolled(elementId) {
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const header = document.getElementById(elementId);
      if (header) {
        const offset = header.offsetHeight;
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
