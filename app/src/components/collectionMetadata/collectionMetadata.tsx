import { capitalize } from "@/src/utils/utils";
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
import parse from "html-react-parser";

export type CollectionMetadataProps = {
  title: string;
  uuid: string;
  abstract?: string;
  accessCondition?: string[];
  mssID?: string;
  bNumbers?: string[];
  contentNote?: string[];
  dateCaptured: string;
  dateCreated: string;
  dateIssued: string;
  dateOther: string;
  displayNames?: string[];
  divisionSlug?: string;
  divisionTitle?: string;
  edition?: string;
  extent?: string;
  form?: string;
  genres?: string[];
  languages?: string[];
  names?: [
    {
      name: string;
      roles: string[];
    },
  ];
  place?: string;
  shelfLocators?: string[];
  tableOfContents?: string[];
  topics?: string[];
  typeOfResource?: string[];
  yearBegin?: number;
  yearEnd?: number;
};

const renderDateField = (
  label: string,
  value: string | undefined,
  href: string
) => {
  if (!value) return null;
  return (
    <Text marginBottom="0">
      {label}:{" "}
      <Link hasVisitedState={false} href={href}>
        {value}
      </Link>
    </Text>
  );
};

function splitLabelAndSubjectType(label: string): {
  text: string;
  subjectType: string | null;
} {
  const match = label.match(/\(([^)]+)\)\s*$/);
  const subjectType = match && match[1] === "Name" ? "name" : "topic";
  const text = match
    ? label.replace(/\s*\([^)]+\)\s*$/, "").trim()
    : label.trim();
  return { text, subjectType };
}

const renderTopicLink = (label: string) => {
  const { text, subjectType } = splitLabelAndSubjectType(label);
  return (
    <Text marginBottom="0">
      <Link
        hasVisitedState={false}
        href={`/search/index?filters=%5B${subjectType}%3D${text}%5D`}
      >
        {text}
      </Link>
    </Text>
  );
};

const renderLabeledLinks = (
  label: string,
  items: string[] | undefined,
  paramKey: string,
  capitalizeItems = true
) => {
  if (!items || items.length === 0) return null;
  return (
    <Box marginBottom="m">
      <Text size="overline1" marginBottom="xs">
        {label}
      </Text>
      {items.map((item, index) => (
        <Link
          key={index}
          display="block"
          hasVisitedState={false}
          href={`/search/index?filters=%5B${paramKey}%3D${item}%5D`}
        >
          {capitalizeItems ? capitalize(item) : item}
        </Link>
      ))}
    </Box>
  );
};

const renderNamesSection = (names) => {
  if (names.length === 0) return null;
  return (
    <Box marginBottom="m">
      <Text size="overline1" marginBottom="xs">
        Names
      </Text>
      {names.map((name, index) => (
        <Text key={index} marginBottom="0">
          <Link
            hasVisitedState={false}
            href={`/search/index?filters=%5Bname%3D${name.name}%5D`}
          >
            {name.name}
          </Link>
          {name.roles[1] ? `, ${name.roles[1]}` : ``}
        </Text>
      ))}
    </Box>
  );
};

const renderIdentifiers = (
  uuid: string | undefined,
  mssID: string | undefined,
  bNumbers: string[] | undefined
) => {
  if (!uuid && !mssID && !bNumbers) return null;
  return (
    <Box marginBottom="m">
      <Text size="overline1" marginBottom="xs">
        Identifiers
      </Text>
      {uuid && (
        <Text marginBottom="0">Universal Unique Identifier (UUID): {uuid}</Text>
      )}
      {mssID && (
        <Text marginBottom="0">
          Archives ID:{" "}
          <Link
            hasVisitedState={false}
            href={`https://archives.nypl.org/${mssID}`}
          >
            {mssID}
          </Link>
        </Text>
      )}
      {bNumbers &&
        (bNumbers.length > 1 ? (
          <>
            <Text as="span" marginBottom="0">
              NYPL Catalog IDs (bnumbers):{" "}
            </Text>
            {bNumbers.map((bNumber, index) => (
              <Text key={index} marginBottom="0">
                <Link
                  hasVisitedState={false}
                  href={`https://www.nypl.org/research/research-catalog/bib/${bNumber}`}
                >
                  {bNumber}
                </Link>
              </Text>
            ))}
          </>
        ) : (
          <>
            <Text marginBottom="0">
              NYPL Catalog ID (bNumber):{" "}
              <Link
                hasVisitedState={false}
                href={`https://www.nypl.org/research/research-catalog/bib/${bNumbers[0]}`}
              >
                {bNumbers[0]}
              </Link>
            </Text>
          </>
        ))}
    </Box>
  );
};

const CollectionMetadata = ({ data }: { data: CollectionMetadataProps }) => {
  const {
    title,
    uuid,
    abstract,
    accessCondition,
    mssID,
    bNumbers,
    contentNote,
    dateCaptured,
    dateCreated,
    dateIssued,
    dateOther,
    displayNames,
    divisionSlug,
    divisionTitle,
    edition,
    extent,
    form,
    genres,
    languages,
    names,
    place,
    shelfLocators,
    tableOfContents,
    topics,
    typeOfResource,
    yearBegin,
    yearEnd,
  } = data;

  const dateOriginSection =
    dateIssued || dateCaptured || dateCreated || dateOther || place || edition;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Flex marginTop="l" marginBottom="m" flexDir="column" maxWidth="720px">
      <Heading size="heading6">Collection information</Heading>
      {(mssID || bNumbers) && (
        <>
          <Text marginBottom="xs">
            {`Data source${mssID && bNumbers ? `s` : ``}:`}
          </Text>
          <ButtonGroup marginBottom="m">
            {mssID && (
              <Button
                buttonType="secondary"
                id="finding-aid-btn"
                onClick={() =>
                  window.open(`https://archives.nypl.org/${mssID}`, "_blank")
                }
              >
                Finding aid
              </Button>
            )}
            {bNumbers && (
              <Button
                buttonType="secondary"
                id="catalog-btn"
                onClick={() =>
                  window.open(
                    `https://www.nypl.org/research/research-catalog/bib/${bNumbers[0]}`,
                    "_blank"
                  )
                }
              >
                Catalog record
              </Button>
            )}
          </ButtonGroup>
        </>
      )}

      {abstract && (
        <Box marginBottom="m">
          <Text size="overline1" marginBottom="xs">
            Abstract
          </Text>
          <Text marginBottom="0">{abstract}</Text>
        </Box>
      )}

      {dateOriginSection && (
        <Box marginBottom="m">
          <Text size="overline1" marginBottom="xs">
            Dates / Origin
          </Text>
          {renderDateField(
            "Date created",
            dateCreated,
            `/search/index?filters=%5BdateStart%3D${dateCreated}%5D`
          )}
          {renderDateField(
            "Date issued",
            dateIssued,
            `/search/index?filters=%5BdateStart%3D${dateIssued}%5D`
          )}
          {renderDateField(
            "Date captured",
            dateCaptured,
            `/search/index?filters=%5BdateStart%3D${dateCaptured}%5D`
          )}
          {renderDateField(
            "Place",
            place,
            `/search/index?filters=%5Bplace%3D${place}%5D`
          )}
          {edition && <Text marginBottom="0">Edition: {edition}</Text>}
        </Box>
      )}

      {divisionSlug && (
        <Box marginBottom="m">
          <Text size="overline1" marginBottom="xs">
            Library locations
          </Text>
          <Text marginBottom="0">
            <Link hasVisitedState={false} href={`/divisions/${divisionSlug}`}>
              {divisionTitle}
            </Link>
          </Text>
          {shelfLocators &&
            shelfLocators.length > 0 &&
            (shelfLocators.length > 1 ? (
              <>
                <Text as="span" marginBottom="0">
                  Shelf locators:{" "}
                </Text>
                {shelfLocators.map((locator, index) => (
                  <Text key={index} marginBottom="0">
                    {locator}
                  </Text>
                ))}
              </>
            ) : (
              <Text marginBottom="0">
                {`Shelf locator: ${shelfLocators[0]}`}
              </Text>
            ))}
        </Box>
      )}

      {isExpanded && (
        <>
          {renderLabeledLinks("Genres", genres, "genre")}
          {topics && topics.length > 0 && (
            <Box marginBottom="m">
              <Text size="overline1" marginBottom="xs">
                Topics
              </Text>
              {topics.map((topic) => renderTopicLink(topic))}
            </Box>
          )}
          {renderLabeledLinks("Type of resource", typeOfResource, "type")}
          {names && renderNamesSection(names)}
          {renderLabeledLinks("Languages", languages, "language")}
          {contentNote && contentNote.length > 0 && (
            <Box marginBottom="m">
              <Text size="overline1" marginBottom="xs">
                {`Content note${contentNote.length > 1 ? `s` : ""}`}
              </Text>
              {contentNote.map((note, index) => (
                <Text marginBottom="xs" key={index}>
                  {parse(note)}
                </Text>
              ))}
            </Box>
          )}
          {tableOfContents && tableOfContents.length > 0 && (
            <>
              <Text size="overline1" marginBottom="xs">
                Table of contents
              </Text>
              <Text marginBottom="0">{tableOfContents}</Text>
            </>
          )}
          {(form || extent) && (
            <Box marginBottom="m">
              <Text size="overline1" marginBottom="xs">
                Physical description
              </Text>
              {form && (
                <Link
                  display="block"
                  hasVisitedState={false}
                  href={`/search/index?filters=%5Bform%3D${form}%5D`}
                >
                  {form}
                </Link>
              )}
              {extent && <Text marginBottom="0">{extent}</Text>}
            </Box>
          )}
          {accessCondition && accessCondition.length > 0 && (
            <Box marginBottom="m">
              <Text size="overline1" marginBottom="xs">
                Access condition
              </Text>
              <Text marginBottom="0">{accessCondition}</Text>
            </Box>
          )}
          {renderIdentifiers(uuid, mssID, bNumbers)}
        </>
      )}

      <Link
        hasVisitedState={false}
        isUnderlined={false}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        See {isExpanded ? "less" : "more"} collection information
      </Link>
    </Flex>
  );
};

export default CollectionMetadata;
