import { useRef } from "react";

/**
 * Calculates whether the referenced element is within the viewport, given the sticky header, and
 * scrolls the element to the center of the screen if it isn't.
 */

export const useScrollHeading = () => {
  const elementRef = useRef<HTMLHeadingElement | null>(null);

  const scrollHeading = () => {
    if (!elementRef.current) return;
    setTimeout(() => {
      const rect = elementRef?.current?.getBoundingClientRect()!;
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      const headerHeight = 200;
      const isAboveViewport = rect.bottom < headerHeight;
      const isBelowViewport = rect.top > windowHeight - 20;

      if (isAboveViewport || isBelowViewport) {
        elementRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 400);
  };

  return { headingRef: elementRef, scrollHeading };
};
