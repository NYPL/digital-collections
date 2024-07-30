"use client";
import {
  Box,
  Heading,
  HorizontalRule,
  Link,
} from "@nypl/design-system-react-components";
import PageLayout from "../../pageLayout/pageLayout";
import SwimLanes from "src/components/swimlanes/swimLanes";
import { props } from "__tests__/data/swimlaneProps";
import { useNumColumns } from "src/hooks/useNumColumns";
import { useParams } from "next/navigation";
import { headerBreakpoints } from "src/utils/breakpoints";

export default function DivisionPage() {
  const params = useParams();
  const numColumns = useNumColumns();
  const slug = params.slug as string;
  function slugToString(slug) {
    let str = slug.replace(/[-]/g, " ");
    str = str.replace(/\b\w/g, (char) => char.toUpperCase());
    return str;
  }
  const title = slugToString(slug);
  return (
    <PageLayout
      activePage="division"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Divisions", url: "/divisions" },
        { text: `${title}`, url: `/divisions/${slug}` },
      ]}
    >
      <Box
        sx={{
          display: "flex",
          flexFlow: "column",
          "> hgroup": {
            marginBottom: 0,
          },
          [`@media screen and (min-width: ${headerBreakpoints.smTablet})`]: {
            maxWidth: "715px",
          },
          "> hgroup > p": {
            fontWeight: "400 !important",
          },
          gap: "m",
        }}
      >
        <Heading
          level="h1"
          text={title}
          subtitle="The Billy Rose Theatre Division of The New York Public Library is one of the largest and most comprehensive archives devoted to the theatrical arts. Encompassing dramatic performance in all its diversity, the division is an indispensable resource for artists, writers, researchers, scholars, students, and the general public."
        />
        <Link type="forwards" href="#">
          Contact info and more
        </Link>
      </Box>
      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />
      <SwimLanes
        numColumns={numColumns}
        lanesWithNumItems={[props.lanesWithNumItems[0]]}
      />
      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />
      <SwimLanes
        numColumns={numColumns}
        lanesWithNumItems={props.lanesWithNumItems}
      />
    </PageLayout>
  );
}
