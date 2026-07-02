"use client";
import {
  Box,
  Heading,
  HorizontalRule,
  Menu,
  Flex,
} from "@nypl/design-system-react-components";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { headerBreakpoints } from "../../../utils/breakpoints";
import {
  displayResults,
  slugToString,
  totalNumPages,
} from "../../../utils/utils";
import { CardsGrid } from "../../grids/cardsGrid";
import React, { useEffect, useRef, useState } from "react";
import PageLayout from "../../pageLayout/pageLayout";
import LaneLoading from "../../lane/laneLoading";
import {
  RESULTS_PER_PAGE_OPTIONS,
  CARDS_PER_PAGE,
} from "../../../config/constants";
import useBreakpoints from "@/src/hooks/useBreakpoints";
import BottomPaginationSection from "../../bottomPaginationSection/bottomPaginationSection";

export default function CollectionLanePage({ data }: any) {
  const params = useParams();
  const slug = params.slug as string;
  const title = slugToString(slug);
  const [isLoaded, setIsLoaded] = useState(false);

  const pathname = usePathname();
  const queryParams = useSearchParams();

  const [currentPage, setCurrentPage] = useState(
    Number(queryParams.get("page")) || 1
  );

  const [currentPerPage, setCurrentPerPage] = useState(
    Number(queryParams.get("perPage")) || CARDS_PER_PAGE
  );

  const { push } = useRouter();
  const { isLargerThanSmallTablet } = useBreakpoints();

  const totalPages = totalNumPages(data.numResults, data.perPage);

  const headingRef = useRef<HTMLHeadingElement>(null);

  const updatePageURL = async (pageNumber: number) => {
    const params = new URLSearchParams(queryParams.toString());
    params.set("page", pageNumber.toString());
    setCurrentPage(pageNumber);
    const url = `${pathname}?${params.toString()}`;
    setIsLoaded(false);
    push(url);
    setTimeout(() => {
      setIsLoaded(true);
      headingRef.current?.focus();
    }, 2000);
  };

  const updateURL = (queryString: string) => {
    const newUrl = `${pathname}?${queryString}`;
    setIsLoaded(false);
    push(newUrl);
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <PageLayout
      activePage="swimlane"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Collections", url: "/collections" },
        { text: `${title}`, url: `/collections/lane/${slug}` },
      ]}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          [`@media screen and (min-width: ${headerBreakpoints.smTablet})`]: {
            maxWidth: "715px",
          },
          gap: "m",
        }}
      >
        <Heading sx={{ marginBottom: 0 }} level="h1" id={slug} text={title} />
      </Box>
      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />
      <Flex
        sx={{
          gap: "m",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "l",
        }}
      >
        <Heading
          size="heading5"
          sx={{ margin: 0 }}
          aria-live="polite"
          aria-atomic="true"
          ref={headingRef}
          tabIndex={-1}
          id={slug}
        >
          {`Displaying ${displayResults(
            data.numResults,
            data.perPage,
            data.page
          )} results`}
        </Heading>
        <Box
          sx={{
            display: "none",
            [`@media screen and (min-width: ${headerBreakpoints.smTablet}px)`]:
              {
                display: "block",
              },
          }}
        >
          <Menu
            key={`per-page-${currentPerPage}`}
            id="results-per-page-menu"
            showLabel
            selectedItem={currentPerPage.toString()}
            labelText={`Results per page: ${currentPerPage}`}
            labelAsAriaLabel
            listItemsData={RESULTS_PER_PAGE_OPTIONS.map((value) => ({
              id: value.toString(),
              label: value.toString(),
              onClick: () => {
                setCurrentPerPage(value);
                const newParams = new URLSearchParams(queryParams.toString());
                newParams.set("perPage", String(value));
                newParams.set("page", "1");
                updateURL(newParams.toString());
              },
              type: "action",
            }))}
          />
        </Box>
      </Flex>
      {isLoaded ? (
        <CardsGrid records={data.collections} />
      ) : (
        Array(Math.ceil(data.collections?.length / 4))
          .fill(null)
          .map((_, index) => (
            <LaneLoading
              id={`lane-loading-${index}`}
              key={`lane-loading-${index}`}
              withTitle={false}
            />
          ))
      )}
      {totalPages > 1 && (
        <BottomPaginationSection
          currentPage={currentPage}
          initialPage={currentPage}
          pageCount={totalPages}
          onPageChange={updatePageURL}
          rightContent={
            isLargerThanSmallTablet ? (
              <Menu
                key={`per-page-bottom-${currentPerPage}`}
                id="results-per-page-menu-bottom"
                showLabel
                selectedItem={currentPerPage.toString()}
                labelText={`Results per page: ${currentPerPage}`}
                labelAsAriaLabel
                listItemsData={RESULTS_PER_PAGE_OPTIONS.map((value) => ({
                  id: value.toString(),
                  label: value.toString(),
                  onClick: () => {
                    setCurrentPerPage(value);
                    const newParams = new URLSearchParams(
                      queryParams.toString()
                    );
                    newParams.set("perPage", String(value));
                    newParams.set("page", "1");
                    updateURL(newParams.toString());
                  },
                  type: "action",
                }))}
              />
            ) : null
          }
        />
      )}
    </PageLayout>
  );
}
