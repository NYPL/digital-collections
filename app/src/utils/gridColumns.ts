export type ViewMode = "grid" | "list";

export interface GridBreakpoints {
  isLargerThanLargeMobile: boolean;
  isLargerThanSmallTablet: boolean;
  isLargerThanLargeTablet: boolean;
}

interface ResolveGridColumnsParams extends GridBreakpoints {
  viewMode: ViewMode;
  baseColumns: number;
  largeMobileColumns?: number;
}

export const resolveGridColumns = ({
  viewMode,
  baseColumns,
  largeMobileColumns,
  isLargerThanLargeMobile,
  isLargerThanSmallTablet,
  isLargerThanLargeTablet,
}: ResolveGridColumnsParams): number => {
  if (viewMode === "list") return 1;
  if (!isLargerThanLargeMobile) return 1;
  if (isLargerThanLargeMobile && !isLargerThanSmallTablet) {
    return largeMobileColumns ?? baseColumns;
  }
  if (isLargerThanSmallTablet && !isLargerThanLargeTablet) return 2;
  return baseColumns;
};
