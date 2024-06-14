import { useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";

/**
 * This hook is used to determine if the current screen size is larger than
 * the new NYPL breakpoint values. The returned value is an object with
 * boolean values for each breakpoint.
 */
const useBreakpoints = () => {
  // Local state is used and updated with the `useEffect` hook so that the
  // initial breakpoint values are the same on the server and client side.
  const [layoutSize, setLayoutSize] = useState<any>({
    isLargerThanLargeMobile: false,
    isLargerThanSmallTablet: false,
    isLargerThanLargeTablet: false,
    isLargerThanDesktop: false,
  });
  const [
    isLargerThanLargeMobile,
    isLargerThanSmallTablet,
    isLargerThanLargeTablet,
    isLargerThanDesktop,
  ] = useMediaQuery([
    "(min-width: 480px)",
    "(min-width: 768px)",
    "(min-width: 1024px)",
    "(min-width: 1280px)",
  ]);

  useEffect(() => {
    setLayoutSize({
      isLargerThanLargeMobile,
      isLargerThanSmallTablet,
      isLargerThanLargeTablet,
      isLargerThanDesktop,
    });
  }, [
    isLargerThanLargeMobile,
    isLargerThanSmallTablet,
    isLargerThanLargeTablet,
    isLargerThanDesktop,
  ]);

  return {
    isLargerThanLargeMobile: layoutSize.isLargerThanLargeMobile,
    isLargerThanSmallTablet: layoutSize.isLargerThanSmallTablet,
    isLargerThanLargeTablet: layoutSize.isLargerThanLargeTablet,
    isLargerThanDesktop: layoutSize.isLargerThanDesktop,
  };
};

export default useBreakpoints;
