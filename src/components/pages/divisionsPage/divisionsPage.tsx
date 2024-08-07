"use client";
import {
  Box,
  Heading,
  HorizontalRule,
} from "@nypl/design-system-react-components";
import PageLayout from "../../pageLayout/pageLayout";
import { headerBreakpoints } from "src/utils/breakpoints";
import SwimLanes from "src/components/swimlanes/swimLanes";
import { useNumColumns } from "src/hooks/useNumColumns";
import { mockSwimLanes } from "__tests__/__mocks__/data/mockSwimLanes";

export default function DivisionsPage() {
  const numColumns = useNumColumns();
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
        lanesWithNumItems={mockSwimLanes.lanesWithNumItems}
      />
    </PageLayout>
  );
}
