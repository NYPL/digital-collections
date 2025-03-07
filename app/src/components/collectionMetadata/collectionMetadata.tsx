import {
  Flex,
  Heading,
  ButtonGroup,
  Button,
  Link,
  Text,
  Box,
} from "@nypl/design-system-react-components";
import { useState } from "react";

type CollectionMetadataProps = {
  title: string;
  uuid: string;
  archivesCollectionID: string;
  bNumber: string;
  keyDate: string;
  yearBegin: string;
  divisionTitle: string;
  divisionSlug: string;
  shelfLocator: string;
  genres: string[];
  topics: string[];
  typeOfResource: string[];
  contentNote: string;
  abstract: string;
  donorCredit: string;
};

const CollectionMetadata = ({ data }: { data: CollectionMetadataProps }) => {
  const {
    title,
    uuid,
    archivesCollectionID,
    bNumber,
    keyDate,
    yearBegin,
    divisionTitle,
    divisionSlug,
    shelfLocator,
    genres,
    topics,
    typeOfResource,
    contentNote,
    abstract,
    donorCredit,
  } = data;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Flex marginTop="m" marginBottom="m" flexDir="column">
      <Heading size="heading6" marginBottom="s">
        Collection data
      </Heading>
      {archivesCollectionID && (
        <Text marginBottom="xs">
          This collection is also available in Archives & Manuscripts, and the
          NYPL Research Catalog.
        </Text>
      )}
      <ButtonGroup marginBottom="m">
        {archivesCollectionID && (
          <Button buttonType="secondary" id="finding-aid-btn">
            View Finding Aid
          </Button>
        )}
        {bNumber && (
          <Button buttonType="secondary" id="catalog-btn">
            View Catalog
          </Button>
        )}
      </ButtonGroup>

      {abstract && (
        <>
          <Text size="overline1" marginBottom="xs">
            Abstract
          </Text>
          <Text marginBottom="m">{abstract}</Text>
        </>
      )}

      <Text size="overline1" marginBottom="xs">
        Dates / Origin
      </Text>
      <Text marginBottom="m">
        Date created:{" "}
        <Link
          hasVisitedState={false}
          href={`/search/index?year_begin=${yearBegin}`}
        >
          {yearBegin}
        </Link>{" "}
        (approximate)
      </Text>

      <Text size="overline1" marginBottom="xs">
        Library locations
      </Text>
      <Text marginBottom="m">
        <Link hasVisitedState={false} href={`/divisions/${divisionSlug}`}>
          {divisionTitle}
        </Link>
      </Text>

      {shelfLocator && (
        <>
          <Text size="overline1" marginBottom="xs">
            Shelf locator
          </Text>
          <Text marginBottom="m">{shelfLocator}</Text>
        </>
      )}
      {isExpanded && (
        <>
          {genres.length > 0 && (
            <Box marginBottom="m">
              <Text size="overline1" marginBottom="xs">
                Genres
              </Text>
              {genres.map((genre, index) => (
                <Link
                  key={index}
                  display="block"
                  hasVisitedState={false}
                  href={`/search/index?filters=%5Bgenre%3D${genre}%5D`}
                >
                  {genre}
                </Link>
              ))}
            </Box>
          )}

          {topics.length > 0 && (
            <Box marginBottom="m">
              <Text size="overline1" marginBottom="xs">
                Topics
              </Text>
              {topics.map((topic, index) => (
                <Link
                  key={index}
                  display="block"
                  hasVisitedState={false}
                  href={`/search/index?filters=%5Btopic%3D${topic}%5D`}
                >
                  {topic}
                </Link>
              ))}
            </Box>
          )}

          {typeOfResource.length > 0 && (
            <Box marginBottom="m">
              <Text size="overline1" marginBottom="xs">
                Type of resource
              </Text>
              {typeOfResource.map((resource, index) => (
                <Link
                  key={index}
                  display="block"
                  hasVisitedState={false}
                  href={`/search/index?filters=%5Btype%3D${resource}%5D`}
                >
                  {resource}
                </Link>
              ))}
            </Box>
          )}

          {contentNote && (
            <>
              <Text size="overline1" marginBottom="xs">
                Content note
              </Text>
              <Text marginBottom="m">{contentNote}</Text>
            </>
          )}

          {donorCredit && (
            <>
              <Text size="overline1" marginBottom="xs">
                Donor credit
              </Text>
              <Text marginBottom="m">{donorCredit}</Text>
            </>
          )}
        </>
      )}

      <Link
        hasVisitedState={false}
        isUnderlined={false}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        See {isExpanded ? "less" : "more"} collection data
      </Link>
    </Flex>
  );
};

export default CollectionMetadata;
