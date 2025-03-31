import { useState, useEffect, useRef } from "react";

function useHeaderState() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    "up"
  );
  const [headerHeight, setHeaderHeight] = useState<number>(150);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScroll = () => {
      const scrollY = window.scrollY;
      let direction: "up" | "down" | null =
        scrollY > lastScrollY ? "down" : "up";

      if (
        direction !== scrollDirection &&
        Math.abs(scrollY - lastScrollY) > 20
      ) {
        setScrollDirection(direction);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;

      // Update header height
      if (headerRef.current) {
        const newHeight = headerRef.current.offsetHeight;
        setHeaderHeight((prev) => (prev !== newHeight ? newHeight : prev));
      }
    };

    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, [scrollDirection]);

  return { headerRef, headerHeight, isScrollingUp: scrollDirection === "up" };
}

export default useHeaderState;
