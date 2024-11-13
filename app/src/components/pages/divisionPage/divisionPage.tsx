"use client";
import {
  Box,
  Heading,
  HorizontalRule,
  Link,
  Pagination,
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
import {
  totalNumPages,
  createAdobeAnalyticsPageName,
} from "../../../utils/utils";
import useBreakpoints from "../../../hooks/useBreakpoints";
import { DC_URL } from "@/src/config/constants";
import { Lane as DCLane } from "../../lane/lane";
import LaneLoading from "../../lane/laneLoading";

export default function DivisionPage({ data }: any) {
  const params = useParams();
  const slug = params.slug as string;
  const [isLoaded, setIsLoaded] = useState(false);

  const pathname = usePathname();
  const queryParams = useSearchParams();
  const headingRef = useRef<HTMLHeadingElement>(null);

  const [currentPage, setCurrentPage] = useState(
    Number(queryParams.get("page")) || 1
  );

  const { push } = useRouter();

  const totalPages = totalNumPages(data.numFound, data.perPage);

  const updatePageURL = async (pageNumber: number) => {
    const params = new URLSearchParams();
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
      adobeAnalyticsPageName={createAdobeAnalyticsPageName("divisions", slug)}
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
        <DCLane
          records={data.items}
          seeMoreLink={`${DC_URL}/divisions`}
          laneName={data.name}
        />
      ) : (
        <LaneLoading withTitle={false} />
      )}
      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />

      <Heading
        level="h2"
        id={slug}
        size="heading3"
        style={{ width: "fit-content" }}
      >
        {`Collections in the ${data.name}`}
      </Heading>

      <Heading
        size="heading6"
        sx={{ fontWeight: "300" }}
        ref={headingRef}
        tabIndex={-1}
        width="max-content"
      >
        {`Page ${data.page} of ${totalPages}`}
      </Heading>

      {isLoaded ? (
        <CardsGrid records={data.collections} />
      ) : (
        Array(Math.ceil(data.collections.length / 4)).fill(
          <LaneLoading withTitle={false} />
        )
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
