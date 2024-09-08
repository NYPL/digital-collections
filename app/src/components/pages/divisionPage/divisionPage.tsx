"use client";
import {
  useParams,
  useSearchParams,
  usePathname,
  useRouter,
} from "next/navigation";
import {
  Box,
  Flex,
  Heading,
  HorizontalRule,
  Link,
  Pagination,
  SimpleGrid,
  Spacer,
} from "@nypl/design-system-react-components";
import PageLayout from "../../pageLayout/pageLayout";
import { useNumColumns } from "../../../hooks/useNumColumns";
import { headerBreakpoints } from "../../../utils/breakpoints";
import { slugToString } from "../../../utils/utils";
import CollectionCard from "../../../components/cards/collectionCard";
import { CollectionCardModel } from "../../../models/collectionCard";
import useBreakpoints from "../../../hooks/useBreakpoints";
import CollectionDataType from "../../../types/CollectionDataType";
import ItemCard from "../../../components/cards/itemCard";
import { ItemCardModel } from "../../../models/itemCard";
import React from "react";
import { titleToDCParam, totalNumPages } from "../../../utils/utils";
import { DC_URL } from "@/src/config/constants";
import { ItemLane } from "../../lanes/itemLanes/itemLane";
import { CollectionsTable } from "../../tables/collectionTable";
import { getDivisionData } from "../../../utils/api";
import { useState } from "react";

export default function DivisionPage({ data }: any, currentPage: number) {
  const params = useParams();
  const queryParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [collections, setCollections] = useState(data.collections);

  const { isLargerThanLargeTablet } = useBreakpoints();
  const numColumns = useNumColumns();

  const slug = params.slug as string;
  const title = slugToString(slug);
  console.log("title is: ", title);
  const pageName = `divisions|${slug}`;
  console.log("data.perPage is: ", data.perPage);
  const totalPages = totalNumPages(data.numFound, data.perPage);
  console.log("data is: ", data);
  const page = Number(queryParams.get("page")) || 1;

  return (
    <PageLayout
      activePage="division"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Divisions", url: "/divisions" },
        { text: `${title}`, url: `/divisions/${slug}` },
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
        <Link type="standalone" target="_blank" href={data.nyplLink}>
          <span> Contact info and more </span>
        </Link>
      </Box>

      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />

      {/* <Box>
        <Flex alignItems="baseline">
          <Heading level="h2" size="heading3">
            {`Items in the ${title}`}
          </Heading>
          <Spacer />
          <Link
            id={`row-see-more-items-${title}`}
            type="standalone"
            href={`${DC_URL}/search/index?filters[divisionFullname_mtxt_s][]=${titleToDCParam(
              title
            )}`} //TO DO: update with slug
            aria-label={`See more items in ${title}`}
            hasVisitedState
            __css={{
              display: { sm: "none", md: "inline" },
              color: "ui.primary.link",
              fontWeight: "500 !important",
              alignItems: "center",
              _hover: { textDecoration: "underline 1px dotted !important" },
            }}
          >
            See more
          </Link>
        </Flex>
        <SimpleGrid
          columns={numColumns}
          sx={{
            gridTemplateColumns: `repeat(${numColumns}, minmax(0, 1fr))`,
          }}
        >
          {data.items.map((item, index) => {
            const itemModel = new ItemCardModel(item);
            return (
              <ItemCard
                key={index}
                id={`item-${index}-${data.title}`}
                item={itemModel}
                isLargerThanLargeTablet={isLargerThanLargeTablet}
              />
            );
          })}
        </SimpleGrid>
        <Link
          id={`row-see-more-items-mobile-${title}`}
          type="standalone"
          href={`#`}
          aria-label={`See more items in ${title}`}
          className="smlink"
          hasVisitedState
          __css={{
            display: { sm: "flex", md: "none" },
            fontWeight: "regular",
            justifyContent: "flex-end",
            marginTop: "s",
            alignItems: "center",
            "& svg": {
              marginTop: "1px",
            },
          }}
        >
          See more
        </Link>
      </Box> */}

      <ItemLane items={data.items} data={data} />

      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />
      {/* <Heading level="h2" size="heading3">
        {`Collections in the ${title}`}
      </Heading> */}

      <CollectionsTable data={data} currentPage={page} />
      {/* <SimpleGrid
        columns={numColumns}
        sx={{
          marginBottom: "xxl",
          gridTemplateColumns: `repeat(${numColumns}, minmax(0, 1fr))`,
        }}
      >
        {data.collections.map((collection: CollectionDataType, index) => {
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
      <Pagination
        id="pagination-id"
        // initialPage={1}
        // getPageHref={function Ua(){}}
        currentPage={currentPage}
        pageCount={totalPages}
        onPageChange={createPageURL}
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "s",
        }}
      /> */}
    </PageLayout>
  );
}
