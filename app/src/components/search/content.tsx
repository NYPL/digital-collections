import {
  Box,
  Menu,
  Text,
  Pagination,
} from "@nypl/design-system-react-components";
import { mockItems } from "__tests__/__mocks__/data/mockItems";
import {
  useParams,
  useSearchParams,
  usePathname,
  useRouter,
} from "next/navigation";
import { ItemCardModel } from "../../models/itemCard";
import ItemDataType from "../../types/ItemDataType";
import ItemCard from "../cards/itemCard";
import { mockCollectionCards } from "__tests__/__mocks__/data/mockCollectionCards";
import { CollectionCardModel } from "../../models/collectionCard";
import CollectionCardDataType from "../../types/CollectionCardDataType";
import CollectionCard from "../cards/collectionCard";
import useBreakpoints from "../../hooks/useBreakpoints";
import DCSimpleGrid from "../dcSimpleGrid/dcSimpleGrid";
import { CollectionsGrid } from "../grids/collectionsGrid";
import React, { useEffect, useState, useRef } from "react";
import { slugToString, totalNumPages } from "../../utils/utils";
import { CARDS_PER_PAGE } from "@/src/config/constants";
import CollectionLanesLoading from "../lanes/collectionLanes/collectionLanesLoading";

const SearchContent = ({ showFilter, data }) => {
  const params = useParams();
  const slug = params.slug as string;
  const title = slugToString(slug);
  const pageName = `search|${slug}`;
  const [isLoaded, setIsLoaded] = useState(false);

  const queryParams = useSearchParams();
  const query = queryParams.toString();

  const router = useRouter();

  const pathname = usePathname();
  // const queryParams = useSearchParams();
  const headingRef = useRef<HTMLHeadingElement>(null);

  const [currentPage, setCurrentPage] = useState(
    Number(queryParams.get("page")) || 1
  );

  const { replace } = useRouter();

  const totalPages = totalNumPages(
    data?.numFound || 0,
    data?.perPage || CARDS_PER_PAGE
  );

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const updatePageURL = async (pageNumber: number) => {
    const params = new URLSearchParams();
    params.set("page", pageNumber.toString());
    setCurrentPage(pageNumber);
    const url = `${pathname}?${params.toString()}#${data.slug}`;
    replace(url);
    headingRef.current?.focus;
  };

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
        {showFilter ? (
          <>
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
          </>
        ) : (
          <></>
        )}
      </Box>

      {isLoaded ? (
        <CollectionsGrid collections={mockCollectionCards} />
      ) : (
        <>
          <CollectionLanesLoading withTitle={false} />
        </>
      )}

      {totalPages > 1 && (
        <Pagination
          id="pagination-id"
          initialPage={currentPage}
          currentPage={currentPage}
          pageCount={totalPages}
          onPageChange={updatePageURL}
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "s",
          }}
        />
      )}
    </>
  );
};

export default SearchContent;
