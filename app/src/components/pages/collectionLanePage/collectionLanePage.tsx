"use client";
import {
  Box,
  Heading,
  HorizontalRule,
  Pagination,
} from "@nypl/design-system-react-components";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { headerBreakpoints } from "../../../utils/breakpoints";
import { slugToString, totalNumPages } from "../../../utils/utils";
import { CardsGrid } from "../../grids/cardsGrid";
import React, { useEffect, useRef, useState } from "react";
import PageLayout from "../../pageLayout/pageLayout";
import LaneLoading from "../../lane/laneLoading";

export default function CollectionLanePage({ data }: any) {
  const params = useParams();
  const slug = params.slug as string;
  const title = slugToString(slug);
  const [isLoaded, setIsLoaded] = useState(false);
  const pageName = `collections|lane|${slug}`;

  const firstCardRef = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();
  const queryParams = useSearchParams();

  const [currentPage, setCurrentPage] = useState(
    Number(queryParams.get("page")) || 1
  );

  const { replace } = useRouter();

  const totalPages = totalNumPages(data.numResults, data.perPage);

  const updatePageURL = async (pageNumber: number) => {
    const params = new URLSearchParams();
    params.set("page", pageNumber.toString());
    setCurrentPage(pageNumber);
    const url = `${pathname}?${params.toString()}}`;
    replace(url);
    const firstChild = firstCardRef.current?.children[0] as HTMLElement;
    firstChild?.focus();
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
      adobeAnalyticsPageName={pageName}
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
      {isLoaded ? (
        <>
          <CardsGrid ref={firstCardRef} records={data.collection} />
        </>
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
