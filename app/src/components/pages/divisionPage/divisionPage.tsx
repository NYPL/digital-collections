"use client";
import {
  Box,
  Heading,
  HorizontalRule,
  Link,
  Pagination,
} from "@nypl/design-system-react-components";
import React, { useEffect, useState, useRef } from "react";
import {
  useParams,
  useSearchParams,
  usePathname,
  useRouter,
} from "next/navigation";
import PageLayout from "../../pageLayout/pageLayout";
import { headerBreakpoints } from "../../../utils/breakpoints";
import { ItemLane } from "../../lanes/itemLane/itemLane";
import { CollectionsGrid } from "../../grids/collectionsGrid";
import CollectionLanesLoading from "../../lanes/collectionLanes/collectionLanesLoading";
import { slugToString, totalNumPages } from "../../../utils/utils";
import useBreakpoints from "../../../hooks/useBreakpoints";

export default function DivisionPage({ data }: any) {
  const params = useParams();
  const slug = params.slug as string;
  const title = slugToString(slug);
  const pageName = `divisions|${slug}`;
  const [isLoaded, setIsLoaded] = useState(false);

  const pathname = usePathname();
  const queryParams = useSearchParams();
  const headingRef = useRef<HTMLHeadingElement>(null);

  const [currentPage, setCurrentPage] = useState(
    Number(queryParams.get("page")) || 1
  );

  const { replace } = useRouter();

  const { isLargerThanLargeTablet } = useBreakpoints();

  const totalPages = totalNumPages(data.numFound, data.perPage);

  const updatePageURL = async (pageNumber: number) => {
    const params = new URLSearchParams();
    params.set("page", pageNumber.toString());
    setCurrentPage(pageNumber);
    const url = `${pathname}?${params.toString()}#${data.slug}`;
    replace(url);
    headingRef.current?.focus;
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const updateCollections = () => {};

  return (
    <PageLayout
      activePage="division"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Divisions", url: "/divisions" },
        { text: `${title}`, url: `/divisions/${data.slug}` },
      ]}
      adobeAnalyticsPageName={pageName}
    >
      <Box
        sx={{
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
        <Heading level="h1" text={title} subtitle={data.summary} />
        <Link
          type="standalone"
          target="_blank"
          href={data.nyplLink}
          style={{ width: "fit-content" }}
        >
          <span> Contact info and more </span>
        </Link>
      </Box>

      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />

      {isLoaded ? (
        <ItemLane data={data} />
      ) : (
        <>
          <CollectionLanesLoading withTitle={false} />
        </>
      )}

      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />

      <Heading
        ref={headingRef}
        tabIndex={0}
        level="h2"
        id={slug}
        size="heading3"
        style={{ width: "fit-content" }}
      >
        {`Collections in the ${data.name}`}
      </Heading>

      {isLoaded ? (
        <CollectionsGrid collections={data.collections} />
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
    </PageLayout>
  );
}
