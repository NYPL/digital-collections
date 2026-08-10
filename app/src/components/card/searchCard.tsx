import React from "react";
import {
  Card,
  CardHeading,
  CardContent,
  StatusBadge,
  TagSet,
  Flex,
  Text,
  Box,
  Tooltip,
} from "@nypl/design-system-react-components";
import SearchCardType, {
  SearchResultRecordType,
} from "@/src/types/SearchCardType";
import { TRUNCATED_SEARCH_CARD_LENGTH } from "@/src/config/constants";
import {
  capitalize,
  getHighestRankedHighlight,
  highlightTitleWords,
  replaceEmWithMark,
} from "@/src/utils/utils";
import parse from "html-react-parser";
import type { Highlight } from "@/src/types/HighlightType";
import SearchCardImage from "./searchCardImage";

const withPerPageParam = (url: string) => {
  if (typeof window === "undefined") {
    return url;
  }

  const currentPerPage =
    new URLSearchParams(window.location.search).get("perPage") ||
    localStorage.getItem("perPage");

  if (!currentPerPage) {
    return url;
  }

  const [baseUrl, hashFragment] = url.split("#");
  const separator = baseUrl.includes("?") ? "&" : "?";
  const nextUrl = `${baseUrl}${separator}perPage=${encodeURIComponent(
    currentPerPage
  )}`;

  return hashFragment ? `${nextUrl}#${hashFragment}` : nextUrl;
};

export interface SearchCardProps {
  result: SearchCardType;
  keywords: string;
  isLargerThanLargeTablet: boolean;
  viewMode: "grid" | "list";
  numColumns: number;
}

const onSiteMaterialBadge = (
  recordType: SearchResultRecordType,
  viewMode: "grid" | "list"
) => {
  return (
    <StatusBadge
      sx={{
        margin: "0",
        whiteSpace: viewMode === "grid" ? "normal" : "nowrap",
        wordWrap: viewMode === "grid" ? "break-word" : "normal",
      }}
      variant="informative"
    >
      {recordType === "Item"
        ? "Available on-site only"
        : "Contains on-site only materials"}
    </StatusBadge>
  );
};

const contentTypeTag = (result: SearchCardType) => {
  const { recordType, contentType, containsMultipleCaptures, uuid } = result;

  const isItem = recordType === "Item";
  const isImage = contentType === "Image";

  let displayLabel: string | null = recordType;

  if (isItem) {
    if (isImage && containsMultipleCaptures) {
      displayLabel = "Multiple images";
    } else if (contentType) {
      displayLabel = contentType;
    }
  }

  return (
    displayLabel && (
      <TagSet
        tagSetData={[
          {
            id: `type-${uuid}`,
            label: displayLabel,
          },
        ]}
        variant="filter"
        sx={{ margin: 0 }}
      />
    )
  );
};

const highlightField = (highlights: Highlight[]) => {
  if (!highlights || !Array.isArray(highlights)) return null;

  const filteredHighlights = highlights.filter(
    (highlight) => highlight.field !== "title"
  );

  const displayHighlight = getHighestRankedHighlight(filteredHighlights);

  if (displayHighlight) {
    return (
      <Box>
        <Text
          as="span"
          sx={{
            fontWeight: "400",
            margin: 0,
          }}
        >
          {capitalize(displayHighlight.field)}:{" "}
        </Text>
        <span>{parse(replaceEmWithMark(displayHighlight.text))}</span>
      </Box>
    );
  }

  return null;
};

export const SearchCard = ({
  result,
  keywords,
  isLargerThanLargeTablet,
  viewMode,
  numColumns,
}: SearchCardProps) => {
  const truncatedTitle = result.title.length > TRUNCATED_SEARCH_CARD_LENGTH;
  const mainActionLink =
    result.recordType === "Collection"
      ? withPerPageParam(result.url)
      : result.url;

  const highlightedTitle = highlightTitleWords(result.title, result.highlights);

  const card = (
    <Card
      id={result.uuid}
      imageProps={{
        component: (
          <SearchCardImage
            key={result.imageID}
            record={result}
            viewMode={viewMode}
          />
        ),
      }}
      mainActionLink={mainActionLink}
      layout={viewMode === "list" ? "row" : "column"}
      maxWidth="945px"
    >
      <CardHeading
        level="h3"
        size="heading5"
        marginBottom="xxs"
        noOfLines={3}
        sx={{
          ":focus-within": {
            outline: "2px solid var(--nypl-colors-ui-link-primary)",
            "> a": {
              outline: "none",
              color: "ui.link.primary !important",
            },
          },
        }}
      >
        {parse(highlightedTitle)}
      </CardHeading>
      <CardContent>
        <Flex flexDir="column" gap="xs">
          {result.containsOnSiteMaterial &&
            onSiteMaterialBadge(result.recordType, viewMode)}
          {keywords?.length > 0 &&
            viewMode === "list" &&
            highlightField(result.highlights)}
          {contentTypeTag(result)}
        </Flex>
      </CardContent>
    </Card>
  );

  const cardWithTooltip =
    isLargerThanLargeTablet && truncatedTitle ? (
      <Tooltip content={result.title}>{card}</Tooltip>
    ) : (
      card
    );

  return cardWithTooltip;
};

export default SearchCard;
