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
  type,
}: {
  results: SearchResultType[];
  keywords: string;
  viewMode: "grid" | "list";
  type: "collection" | "search";
}) => {
  const { isLargerThanLargeTablet } = useBreakpoints();
  const numColumns = type == "collection" ? 3 : 4;
  return (
    <SimpleGrid columns={viewMode === "list" ? 1 : numColumns} gap="grid.l">
      {results?.map((result: SearchResultType, index: number) => {
        const searchResult = new SearchCardModel(result);
        return (
          <SearchCard
            key={index}
            keywords={keywords}
            result={searchResult}
            isLargerThanLargeTablet={isLargerThanLargeTablet}
            viewMode={viewMode}
          />
        );
      })}
    </SimpleGrid>
  );
};

export default SearchCardsGrid;
