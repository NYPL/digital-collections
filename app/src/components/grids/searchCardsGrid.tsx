import { SearchCardModel } from "@/src/models/searchCard";
import SearchCard from "../card/searchCard";
import { SimpleGrid } from "@nypl/design-system-react-components";
import SearchCardType from "@/src/types/SearchCardType";
import useBreakpoints from "@/src/hooks/useBreakpoints";
import { SearchResultType } from "@/src/types/SearchResultsType";

const SearchCardsGrid = ({
  results,
  keywords,
  viewMode,
  numColumns,
}: {
  results: SearchResultType[];
  keywords: string;
  viewMode: "grid" | "list";
  numColumns: number;
}) => {
  const {
    isLargerThanLargeTablet,
    isLargerThanSmallTablet,
    isLargerThanLargeMobile,
  } = useBreakpoints();

  // Calculate responsive columns based on viewport
  // If viewport is mobile (< 768px), use 1 column
  // If viewport is between tablet (768-1024px), use 2 columns
  // Otherwise use the max numColumns passed from parent
  const getResponsiveColumns = () => {
    if (viewMode === "list") return 1;
    if (!isLargerThanLargeMobile) return 1; // Mobile: 1 column
    if (isLargerThanSmallTablet && !isLargerThanLargeTablet) return 2; // Tablet (768-1024px): 2 columns
    return numColumns; // Desktop: use max numColumns (4 for Search, 3/4 for Collection)
  };

  const responsiveColumns = getResponsiveColumns();

  return (
    <SimpleGrid columns={responsiveColumns} gap="grid.l">
      {results?.map((result: SearchResultType, index: number) => {
        const searchResult = new SearchCardModel(result);
        return (
          <SearchCard
            key={index}
            keywords={keywords}
            result={searchResult}
            isLargerThanLargeTablet={isLargerThanLargeTablet}
            viewMode={viewMode}
            numColumns={responsiveColumns}
          />
        );
      })}
    </SimpleGrid>
  );
};

export default SearchCardsGrid;
