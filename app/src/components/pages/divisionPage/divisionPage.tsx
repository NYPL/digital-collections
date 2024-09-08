"use client";
import { useParams, useSearchParams } from "next/navigation";
import {
  Box,
  Heading,
  HorizontalRule,
  Link,
} from "@nypl/design-system-react-components";
import PageLayout from "../../pageLayout/pageLayout";
import { headerBreakpoints } from "../../../utils/breakpoints";
import { slugToString } from "../../../utils/utils";
import React from "react";
import { ItemLane } from "../../lanes/itemLanes/itemLane";
import { CollectionsTable } from "../../tables/collectionTable";
import { useState } from "react";

export default async function DivisionPage({ data }: any) {
  const params = useParams();
  const queryParams = useSearchParams();
  // const pathname = usePathname();
  // const { replace } = useRouter();

  const [collections, setCollections] = useState(data.collections);

  // const { isLargerThanLargeTablet } = useBreakpoints();
  // const numColumns = useNumColumns();

  const slug = params.slug as string;
  const title = slugToString(slug);
  const pageName = `divisions|${slug}`;
  // const page = Number(queryParams.get("page")) || 1;

  const updateCollections = () => {};

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

      <ItemLane items={data.items} data={data} />

      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />

      <CollectionsTable data={data} updateCollections={updateCollections} />
    </PageLayout>
  );
}
