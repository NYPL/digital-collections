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
  largeMobileColumns,
}: {
  results: SearchResultType[];
  keywords: string;
  viewMode: "grid" | "list";
  numColumns: number;
  largeMobileColumns?: number;
}) => {
  const {
    isLargerThanLargeTablet,
    isLargerThanSmallTablet,
    isLargerThanLargeMobile,
  } = useBreakpoints();

  const getResponsiveColumns = () => {
    if (viewMode === "list") return 1;
    if (!isLargerThanLargeMobile) return 1;
    if (isLargerThanLargeMobile && !isLargerThanSmallTablet) {
      return largeMobileColumns ?? numColumns;
    }
    if (isLargerThanSmallTablet && !isLargerThanLargeTablet) return 2;
    return numColumns;
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
