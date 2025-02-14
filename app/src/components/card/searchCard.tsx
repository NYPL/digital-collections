"use client";
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
} from "@nypl/design-system-react-components";
import SearchCardType, {
  SearchResultRecordType,
} from "@/src/types/SearchCardType";
import { headerBreakpoints } from "@/src/utils/breakpoints";

export interface SearchCardProps {
  result: SearchCardType;
  keywords: string;
}

const onSiteMaterialBadge = (recordType: SearchResultRecordType) => {
  return (
    <StatusBadge sx={{ margin: "0p" }} type="informative">
      {recordType === "Item"
        ? "Available onsite only"
        : "Contains on-site only materials"}
    </StatusBadge>
  );
};

const contentTypeTag = (result: SearchCardType) => {
  const displayLabel =
    result.recordType === "Item"
      ? result.contentType === "Image" && result.containsMultipleCaptures
        ? "Multiple images"
        : result.contentType
      : result.recordType;

  return (
    <TagSet
      tagSetData={[
        { id: `type-${result.uuid}`, label: displayLabel ? displayLabel : "" },
      ]}
      type="filter"
      sx={{ margin: 0 }}
    />
  );
};

const highlightedText = ({ highlight, keyword }) => {
  const words = highlight.text.split(" ");
  const keywords = keyword.split(" ");
  return (
    <Box>
      <Text
        as="span"
        sx={{
          fontWeight: "400",
          margin: 0,
        }}
      >
        {highlight.field}:{" "}
      </Text>
      {words.map((word: string, index: number) => {
        const isKeyword = keywords.some(
          (keyword: string) => keyword.toLowerCase() === word.toLowerCase()
        );

        return (
          <span key={index}>
            {isKeyword ? (
              <Text
                sx={{
                  // TO DO: Replace with design token.
                  backgroundColor: "rgba(249, 224, 142, 0.70)",
                  margin: 0,
                  display: "inline",
                }}
              >
                {word}
              </Text>
            ) : (
              word
            )}
            {index < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </Box>
  );
};

export const SearchCard = ({ result, keywords }: SearchCardProps) => {
  return (
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
        src: result.imageURL,
      }}
      mainActionLink={result.url}
      layout="row"
    >
      <CardHeading level="h3" size="heading5" marginBottom="xxs">
        {result.title}
      </CardHeading>
      <CardContent>
        <Flex flexDir="column" gap="xs">
          {result.containsOnSiteMaterial &&
            onSiteMaterialBadge(result.recordType)}
          {keywords?.length > 0 &&
            highlightedText({
              highlight: result.highlights[0],
              keyword: keywords,
            })}
          {contentTypeTag(result)}
        </Flex>
      </CardContent>
    </Card>
  );
};

export default SearchCard;
