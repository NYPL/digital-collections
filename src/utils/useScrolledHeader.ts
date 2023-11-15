import { useState, useEffect } from "react";

/* Returns if page is scrolled past the header. */
export function useScrolledHeader() {
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const header = document.getElementById("header");
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
  }, []);
  return isScrolled;
}
