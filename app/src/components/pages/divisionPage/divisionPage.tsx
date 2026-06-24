"use client";
import {
  Box,
  Heading,
  HorizontalRule,
  Link,
  Pagination,
  Flex,
} from "@nypl/design-system-react-components";
import {
  useParams,
  useSearchParams,
  usePathname,
  useRouter,
} from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import PageLayout from "../../pageLayout/pageLayout";
import { headerBreakpoints } from "../../../utils/breakpoints";
import { CardsGrid } from "../../grids/cardsGrid";
import { totalNumPages, displayResults } from "../../../utils/utils";
import { Lane as DCLane } from "../../lane/lane";
import LaneLoading from "../../lane/laneLoading";
import ViewingOptionsMenu from "../../viewingOptionsMenu/viewingOptionsMenu";
import { GeneralSearchManager } from "../../../utils/searchManager/searchManager";
import {
  RESULTS_PER_PAGE_OPTIONS,
  DEFAULT_PAGE_NUM,
} from "../../../config/constants";
import useBreakpoints from "../../../hooks/useBreakpoints";

export default function DivisionPage({ data }: any) {
  const params = useParams();
  const slug = params.slug as string;
  const [isLoaded, setIsLoaded] = useState(false);

  const pathname = usePathname();
  const queryParams = useSearchParams();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { isLargerThanSmallTablet } = useBreakpoints();

  const [currentPage, setCurrentPage] = useState(
    Number(queryParams.get("page")) || 1
  );

  const { push } = useRouter();

  const collectionSearchManager = new GeneralSearchManager({
    initialPage: Number(queryParams.get("page")) || DEFAULT_PAGE_NUM,
    initialPerPage: Number(queryParams.get("perPage")) || undefined,
    lastFilterRef: useRef<string | null>(null),
  });

  const totalPages = totalNumPages(data.numFound, data.perPage);

  const updatePageURL = async (pageNumber: number) => {
    const params = new URLSearchParams(queryParams.toString());
    params.set("page", pageNumber.toString());
    setCurrentPage(pageNumber);
    const url = `${pathname}?${params.toString()}#${data.slug}`;
    setIsLoaded(false);
    push(url);
    setTimeout(() => {
      setIsLoaded(true);
      headingRef.current?.focus();
    }, 2000);
  };

  const updateURL = (queryString: string) => {
    const newUrl = `${pathname}?${queryString}#${data.slug}`;
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
      activePage="division"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Divisions", url: "/divisions" },
        { text: `${data.name}`, url: `/divisions/${data.slug}` },
      ]}
      ga4Data={{ division: data.name }}
    >
      <Box
        sx={{
          maxWidth: "730px",
          display: "flex",
          flexDirection: "column",
          "> hgroup": {
            marginBottom: 0,
          },
          [`@media screen and (min-width: ${headerBreakpoints.smTablet})`]: {
            maxWidth: "715px",
          },
          "> hgroup > p": {
            fontWeight: "400 !important",
          },
          "> a > span": {
            fontWeight: "500",
          },
          gap: "m",
        }}
      >
        <Heading level="h1" text={data.name} subtitle={data.summary} />
        <Link
          variant="standalone"
          target="_blank"
          href={data.nyplLink}
          style={{ width: "fit-content" }}
        >
          <span> Contact info and more </span>
        </Link>
      </Box>
      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />
      {isLoaded ? (
        <DCLane
          records={data.items}
          seeMoreLink={`/divisions`}
          laneName={data.name}
        />
      ) : (
        <LaneLoading id="unloaded" withTitle={false} />
      )}
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
            data.numFound,
            data.perPage,
            data.page
          )} results`}
        </Heading>
        <ViewingOptionsMenu
          options={{}}
          searchManager={collectionSearchManager}
          sort=""
          perPageOptions={
            isLargerThanSmallTablet ? RESULTS_PER_PAGE_OPTIONS : []
          }
          updateURL={updateURL}
          setFiltersExpanded={() => {}}
          showViewModeButtons={false}
          hideSortFilter
        />
      </Flex>

      <Heading level="h2" size="heading3" style={{ width: "fit-content" }}>
        {`Collections in the ${data.name}`}
      </Heading>

      {isLoaded ? (
        <CardsGrid records={data.collections} />
      ) : (
        Array(Math.ceil(data.collections.length / 4))
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
            marginTop: "xxl",
          }}
        />
      )}
    </PageLayout>
  );
}
