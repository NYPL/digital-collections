"use client";
import { Heading, HorizontalRule } from "@nypl/design-system-react-components";
import PageLayout from "../../pageLayout/pageLayout";
import SwimLanes from "src/components/swimlanes/swimLanes";
import { props } from "__tests__/data/swimlaneProps";
import { useNumColumns } from "src/hooks/useNumColumns";
import { DivisionProps } from "@/divisions/[slug]/page";

export default function DivisionPage(slug: string) {
  const numColumns = useNumColumns();
  return (
    <PageLayout
      activePage="division"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Divisions", url: "/divisions" },
        { text: `${slug}`, url: `/divisions/${slug}` },
      ]}
    >
      <Heading level="h1" text={slug} />

      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />
      <SwimLanes
        numColumns={numColumns}
        lanesWithNumItems={props.lanesWithNumItems}
      />
    </PageLayout>
  );
}
