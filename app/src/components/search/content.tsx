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
import { useNumColumns } from "../../hooks/useNumColumns";
import useBreakpoints from "../../hooks/useBreakpoints";
import { useRouter } from "next/navigation";

const SearchContent = () => {
  const queryParams = useSearchParams();
  const query = queryParams.toString();
  const numColumns = useNumColumns();
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
            {
              id: "items-descending",
              label: "Number of items most to least",
              onClick: onMenuClick,
              type: "action",
            },
            {
              id: "items-ascending",
              label: "Number of items least to most",
              onClick: onMenuClick,
              type: "action",
            },
          ]}
        />
      </Box>
      <SimpleGrid
        columns={numColumns}
        sx={{
          gridTemplateColumns: `repeat(${numColumns}, minmax(0, 1fr))`,
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
