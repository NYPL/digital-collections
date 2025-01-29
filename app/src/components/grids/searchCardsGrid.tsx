import { SearchCardModel } from "@/src/models/searchCard";
import SearchCard from "../card/searchCard";
import { SimpleGrid } from "@nypl/design-system-react-components";

const SearchCardsGrid = ({ results }) => {
  return (
    <SimpleGrid columns={1} gap="grid.m">
      {results?.map((result, index) => {
        const searchResult = new SearchCardModel(result);
        return <SearchCard key={index} result={searchResult} />;
      })}
    </SimpleGrid>
  );
};

export default SearchCardsGrid;
