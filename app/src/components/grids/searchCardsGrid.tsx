import { SearchCardModel } from "@/src/models/searchCard";
import SearchCard from "../card/searchCard";
import { SimpleGrid } from "@nypl/design-system-react-components";
import SearchCardType from "@/src/types/SearchCardType";
import useBreakpoints from "@/src/hooks/useBreakpoints";

const SearchCardsGrid = ({
  results,
  keywords,
}: {
  results: SearchCardType[];
  keywords: string;
}) => {
  const { isLargerThanLargeTablet } = useBreakpoints();
  return (
    <SimpleGrid columns={1} gap="grid.l">
      {results?.map((result: SearchCardType, index: number) => {
        const searchResult = new SearchCardModel(result);
        return (
          <SearchCard
            key={index}
            keywords={keywords}
            result={searchResult}
            isLargerThanLargeTablet={isLargerThanLargeTablet}
          />
        );
      })}
    </SimpleGrid>
  );
};

export default SearchCardsGrid;
