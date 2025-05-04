import { useEffect, useRef, useCallback } from "react";

interface UseInfiniteScrollOptions {
  callback: () => void;
  isLoading: boolean;
  threshold?: number;
}

export const useInfiniteScroll = ({
  callback,
  isLoading,
  threshold = 100,
}: UseInfiniteScrollOptions) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container || isLoading) return;

    const bottomReached =
      container.scrollHeight - container.scrollTop - container.clientHeight <
      threshold;

    if (bottomReached) {
      callback();
    }
  }, [callback, isLoading, threshold]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return containerRef;
};
