import {
  Box,
  Menu,
  Text,
  Pagination,
  Heading,
  Spacer,
} from "@nypl/design-system-react-components";
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CardsGrid } from "../grids/cardsGrid";
import LaneLoading from "../lane/laneLoading";
import { displayResults } from "@/src/utils/utils";
import { CARDS_PER_PAGE } from "@/src/config/constants";

const SearchContent = ({ showFilter, isSearchPage, data }) => {
  const isLoaded = true;
  const queryParams = useSearchParams();
  const query = queryParams.toString();

  const router = useRouter();

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
      <Box
        sx={{
          position: "absolute",
          left: 0,
          width: "100%",
          gap: "xs",
          marginTop: "-xxl",
          paddingLeft: "225px",
          paddingTop: "m",
          background: "ui.bg.default",
        }}
      >
        <Heading
          size="heading2"
          sx={{
            display: "flex",
            marginBottom: "l",
          }}
          width="max-content"
        >
          {`Displaying ${displayResults(data.numResults, 25, currentPage)}
                    results`}
        </Heading>
        <Heading
          size="heading4"
          sx={{
            display: "flex",
            marginBottom: "l",
          }}
          width="max-content"
        >
          Refine your search
        </Heading>

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

      <Box sx={{ height: "200px" }} />
      {isLoaded ? (
        <CardsGrid records={data.result} />
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
