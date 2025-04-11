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
  getTitleWithHighlights,
  replaceEmWithMark,
} from "@/src/utils/utils";
import parse from "html-react-parser";
import type { Highlight } from "@/src/types/HighlightType";

export interface SearchCardProps {
  result: SearchCardType;
  keywords: string;
  isLargerThanLargeTablet: boolean;
}

const onSiteMaterialBadge = (recordType: SearchResultRecordType) => {
  return (
    <StatusBadge sx={{ margin: "0" }} type="informative">
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

  let displayLabel: string | null = null;

  if (isItem) {
    if (isImage && containsMultipleCaptures) {
      displayLabel = "Multiple images";
    } else if (contentType) {
      displayLabel = contentType;
    }
  } else {
    displayLabel = recordType;
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
        type="filter"
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
}: SearchCardProps) => {
  const truncatedTitle = result.title.length > TRUNCATED_SEARCH_CARD_LENGTH;

  const highlightedTitle = getTitleWithHighlights(
    result.highlights,
    result.title
  );

  const card = (
    <Card
      id={result.uuid}
      imageProps={{
        alt: "",
        aspectRatio: "sixteenByNine",
        id: result.imageID
          ? `image-${result.imageID}`
          : `no-image-${result.uuid}`,
        isAtEnd: false,
        isLazy: true,
        size: "default",
        src: result.imageID ? result.imageURL : "/noImage.png",
      }}
      mainActionLink={result.url}
      layout="row"
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
            onSiteMaterialBadge(result.recordType)}
          {keywords?.length > 0 && highlightField(result.highlights)}
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
