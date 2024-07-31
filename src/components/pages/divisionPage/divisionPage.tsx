"use client";
import {
  Box,
  Heading,
  HorizontalRule,
  Link,
  SimpleGrid,
} from "@nypl/design-system-react-components";
import PageLayout from "../../pageLayout/pageLayout";
import { useNumColumns } from "src/hooks/useNumColumns";
import { useParams } from "next/navigation";
import { headerBreakpoints } from "src/utils/breakpoints";
import { slugToString } from "src/utils/utils";
import CollectionCard from "src/components/cards/collectionCard";
import { CollectionCardModel } from "src/models/collectionCard";
import useBreakpoints from "src/hooks/useBreakpoints";
import CollectionDataType from "src/types/CollectionDataType";
import { mockCollections } from "__tests__/__mocks__/data/mockCollections";

export default function DivisionPage() {
  const params = useParams();
  const { isLargerThanLargeTablet } = useBreakpoints();
  const slug = params.slug as string;
  const title = slugToString(slug);
  const numColumns = useNumColumns();
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
          "> a > span": {
            fontWeight: "500",
          },
          gap: "m",
        }}
      >
        <Heading
          level="h1"
          text={title}
          subtitle="The Billy Rose Theatre Division of The New York Public Library is one of the largest and most comprehensive archives devoted to the theatrical arts. Encompassing dramatic performance in all its diversity, the division is an indispensable resource for artists, writers, researchers, scholars, students, and the general public."
        />
        <Link type="standalone" href="#">
          <span> Contact info and more </span>
        </Link>
      </Box>
      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />
      <Heading level="h2" size="heading3">
        {`Items in the ${title}`}
      </Heading>
      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />
      <Heading level="h2" size="heading3">
        {`Collections in the ${title}`}
      </Heading>
      <SimpleGrid
        columns={numColumns}
        sx={{
          gridTemplateColumns: `repeat(${numColumns}, minmax(0, 1fr))`,
        }}
      >
        {mockCollections.map((collection: CollectionDataType, index) => {
          const c = new CollectionCardModel(collection);
          return (
            <CollectionCard
              key={index}
              id={index}
              slug={c.title}
              collection={c}
              isLargerThanLargeTablet={isLargerThanLargeTablet}
            />
          );
        })}
      </SimpleGrid>
    </PageLayout>
  );
}
