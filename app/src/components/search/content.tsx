import {
  Box,
  Menu,
  Text,
  Pagination,
} from "@nypl/design-system-react-components";
import React, { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { CardsGrid } from "../grids/cardsGrid";
import LaneLoading from "../lane/laneLoading";

const SearchContent = ({ showFilter, isSearchPage, data }) => {
  const isLoaded = true;
  const queryParams = useSearchParams();
  const query = queryParams.toString();

  const router = useRouter();
  const pathname = usePathname();

  const totalPages = 3; // TODO: change to be dynamic after API hookup

  const [currentPage, setCurrentPage] = useState(
    Number(queryParams.get("page")) || 1
  );

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
        ) : null}
      </Box>

      {isLoaded ? (
        <CardsGrid records={data} />
      ) : (
        <>
          <LaneLoading withTitle={false} />,
          <LaneLoading withTitle={false} />,
          <LaneLoading withTitle={false} />,
        </>
      )}

      {totalPages > 1 && (
        <Pagination
          id="pagination-id"
          initialPage={currentPage}
          currentPage={currentPage}
          pageCount={totalPages}
          // onPageChange={updatePageURL} // TODO: pagination stuff
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "s",
            marginTop: "xxl",
          }}
        />
      )}
    </>
  );
};

export default SearchContent;
