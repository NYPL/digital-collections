import { useState, useEffect, useRef } from "react";

function useHeaderState() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    "up"
  );
  const [headerHeight, setHeaderHeight] = useState<number>(159);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScroll = () => {
      if (!isFocused) {
        // Only update scroll state when header is not focused
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
      }

      // Update header height
      if (headerRef.current) {
        const newHeight = headerRef.current.offsetHeight;
        setHeaderHeight((prev) => (prev !== newHeight ? newHeight : prev));
      }
    };

    // The translation dropdown changes the effective header height depending
    // on the language selected, we need this observer to keep state fresh
    const resizeObserver = new ResizeObserver(() => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    });
    resizeObserver.observe(headerRef.current!);

    window.addEventListener("scroll", updateScroll);
    window.addEventListener("resize", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      resizeObserver.disconnect();
    };
  }, [scrollDirection, isFocused]);

  useEffect(() => {
    if (isFocused) {
      setScrollDirection("up");
    }
  }, [isFocused]);

  return {
    headerRef,
    headerHeight,
    isScrollingUp: isFocused || scrollDirection === "up",
    isFocused,
    setIsFocused,
  };
}

export default useHeaderState;
