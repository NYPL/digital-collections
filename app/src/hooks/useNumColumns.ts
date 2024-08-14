import useBreakpoints from "./useBreakpoints";

/* Returns number of needed columns based on breakpoints. */
export function useNumColumns() {
  const { isLargerThanLargeTablet, isLargerThanLargeMobile } = useBreakpoints();
  const numColumns = isLargerThanLargeTablet
    ? 4
    : isLargerThanLargeMobile
    ? 2
    : 1;
  return numColumns;
}
