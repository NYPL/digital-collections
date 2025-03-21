import { SearchCardModel } from "@/src/models/searchCard";
import SearchCard from "../card/searchCard";
import { SimpleGrid } from "@nypl/design-system-react-components";
import SearchCardType from "@/src/types/SearchCardType";
import useBreakpoints from "@/src/hooks/useBreakpoints";
import { useTooltipOffset } from "@/src/hooks/useTooltipOffset";
import { useCardImageHeight } from "@/src/hooks/useCardImageHeight";
import { useRef } from "react";

const SearchCardsGrid = ({ results, keywords }) => {
  const { isLargerThanLargeTablet } = useBreakpoints();
  const cardRef = useRef<HTMLDivElement | null>(null);
  return (
    <SimpleGrid columns={1} gap="grid.l">
      {results.results?.map((result: SearchCardType, index: number) => {
        const searchResult = new SearchCardModel(
          result,
          results.availableFilters.collection
        );
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
