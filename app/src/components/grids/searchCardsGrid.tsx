import { SearchCardModel } from "@/src/models/searchCard";
import SearchCard from "../card/searchCard";
import { SimpleGrid } from "@nypl/design-system-react-components";
import useBreakpoints from "@/src/hooks/useBreakpoints";
import { SearchResultType } from "@/src/types/SearchResultsType";
import { resolveGridColumns } from "@/src/utils/gridColumns";

interface SearchCardsGridProps {
  results: SearchResultType[];
  keywords: string;
  viewMode: "grid" | "list";
  numColumns: number;
  largeMobileColumns?: number;
  resolvedColumns?: number;
}

const SearchCardsGrid = ({
  results,
  keywords,
  viewMode,
  numColumns,
  largeMobileColumns,
  resolvedColumns,
}: SearchCardsGridProps) => {
  const {
    isLargerThanLargeTablet,
    isLargerThanSmallTablet,
    isLargerThanLargeMobile,
  } = useBreakpoints();

  const responsiveColumns =
    resolvedColumns ??
    resolveGridColumns({
      viewMode,
      baseColumns: numColumns,
      largeMobileColumns,
      isLargerThanLargeMobile,
      isLargerThanSmallTablet,
      isLargerThanLargeTablet,
    });

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
