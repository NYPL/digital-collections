"use client";
import {
  Box,
  Heading,
  HorizontalRule,
} from "@nypl/design-system-react-components";
import PageLayout from "../../pageLayout/pageLayout";
import { headerBreakpoints } from "src/utils/breakpoints";
import SwimLanes from "src/components/swimlanes/swimLanes";
import { props } from "__tests__/data/swimlaneProps";
import useBreakpoints from "src/hooks/useBreakpoints";

export default function DivisionsPage() {
  const { isLargerThanLargeTablet, isLargerThanLargeMobile } = useBreakpoints();
  const numColumns = isLargerThanLargeTablet
    ? 4
    : isLargerThanLargeMobile
    ? 2
    : 1;
  return (
    <PageLayout
      activePage="divisions"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Divisions", url: "/divisions" },
      ]}
    >
      <Box
        sx={{
          [`@media screen and (min-width: ${headerBreakpoints.smTablet})`]: {
            maxWidth: "715px",
          },
          "> hgroup > p": {
            fontWeight: "400 !important",
          },
        }}
      >
        <Heading
          level="h1"
          text="Divisions"
          subtitle="The New York Public Library's Digital Collections feature diverse
        divisions with a wide array of digitized materials. Explore the various
        divisions to discover rich history, culture, and art."
        />
      </Box>
      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />
      <SwimLanes
        numColumns={numColumns}
        lanesWithNumItems={props.lanesWithNumItems}
      />
    </PageLayout>
  );
}
