import {
  Box,
  Menu,
  SimpleGrid,
  Text,
} from "@nypl/design-system-react-components";
import { mockCollections } from "__tests__/__mocks__/data/mockCollections";
import { useSearchParams } from "next/navigation";
import { CollectionCardModel } from "../../models/collectionCard";
import CollectionDataType from "../../types/CollectionDataType";
import CollectionCard from "../cards/collectionCard";
import useBreakpoints from "../../hooks/useBreakpoints";
import { useRouter } from "next/navigation";
import { headerBreakpoints } from "@/src/utils/breakpoints";

const SearchContent = () => {
  const queryParams = useSearchParams();
  const query = queryParams.toString();
  const { isLargerThanLargeTablet } = useBreakpoints();

  const router = useRouter();

  const createQueryString = (name, value) => {
    const params = new URLSearchParams();
    params.set(name, value);
    return params.toString();
  };

  function onMenuClick(id) {
    query
      ? router.push(
          "/collections" + "?" + query + "&" + createQueryString("sort", id)
        )
      : router.push("/collections" + "?" + createQueryString("sort", id));
  }

  return (
    <>
      <h2>Search params: {query} </h2>
      <br />
      <Box sx={{ display: "flex", gap: "xs", marginBottom: "l" }}>
        <Text sx={{ fontWeight: "500", marginBottom: 0, marginTop: "xs" }}>
          {" "}
          Sort by{" "}
        </Text>{" "}
        <Menu
          //showSelectionAsLabel
          showLabel
          selectedItem="chronological-descending"
          labelText={"Sort By"}
          listItemsData={[
            {
              id: "chronological-descending",
              label: "Newest to oldest",
              onClick: onMenuClick,
              type: "action",
            },
            {
              id: "chronological-ascending",
              label: "Oldest to newest",
              onClick: onMenuClick,
              type: "action",
            },
            {
              id: "alphabetical-descending",
              label: "Title A to Z",
              onClick: onMenuClick,
              type: "action",
            },
            {
              id: "alphabetical-ascending",
              label: "Title Z to A",
              onClick: onMenuClick,
              type: "action",
            },
          ]}
        />
      </Box>
      <SimpleGrid
        sx={{
          [`@media screen and (min-width: ${headerBreakpoints.lgMobile}px)`]: {
            gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
          },
          [`@media screen and (min-width: ${headerBreakpoints.lgTablet}px)`]: {
            gridTemplateColumns: `repeat(4, minmax(0, 1fr))`,
          },
        }}
      >
        {mockCollections.map((collection: CollectionDataType, index) => {
          const collectionModel = new CollectionCardModel(collection);
          return (
            <CollectionCard
              key={index}
              id={index}
              slug={collectionModel.title}
              collection={collectionModel}
              isLargerThanLargeTablet={isLargerThanLargeTablet}
            />
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default SearchContent;
