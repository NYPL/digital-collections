import { useRef } from "react";

export const useScrollIntoViewIfNeeded = () => {
  const elementRef = useRef<HTMLButtonElement | null>(null);

  const scrollIntoViewIfNeeded = () => {
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

  return { ref: elementRef, scrollIntoViewIfNeeded };
};
