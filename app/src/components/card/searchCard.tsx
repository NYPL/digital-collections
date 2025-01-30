"use client";
import React from "react";
import {
  Card,
  CardHeading,
  Text,
  CardContent,
  StatusBadge,
  TagSet,
  Flex,
} from "@nypl/design-system-react-components";
import SearchCardType, {
  SearchResultRecordType,
} from "@/src/types/SearchCardType";

export interface SearchCardProps {
  result: SearchCardType;
  keywords: string[];
}

const onSiteMaterialBadge = (recordType: SearchResultRecordType) => {
  return (
    <StatusBadge sx={{ margin: "0p" }} type="informative">
      {recordType === "Item"
        ? "Available onsite only"
        : "Contains on-site materials"}
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
      onClick={() => {}}
      tagSetData={[
        { id: `type-${result.uuid}`, label: displayLabel ? displayLabel : "" },
      ]}
      type="filter"
      sx={{ margin: 0 }}
    />
  );
};

const highlightedText = ({ text, keywords }) => {
  if (!text || !keywords.length) return text;
  const words = text.split(" ");
  return (
    <span>
      {words.map((word, index) => {
        const isKeyword = keywords.some(
          (keyword) => keyword.toLowerCase() === word.toLowerCase()
        );

        return (
          <span key={index}>
            {isKeyword ? (
              <span style={{ backgroundColor: "yellow" }}>{word}</span>
            ) : (
              word
            )}
            {index < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </span>
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
          : `no-image-${result.imageID}`,
        isAtEnd: false,
        isLazy: true,
        size: "default",
        src: result.imageURL,
      }}
      layout="row"
      mainActionLink={result.url}
    >
      <CardHeading level="h3" size="heading5" marginBottom="xs">
        {result.title}
      </CardHeading>
      <CardContent>
        <Flex flexDir="column" gap="xs">
          {result.containsOnSiteMaterial &&
            onSiteMaterialBadge(result.recordType)}
          {keywords?.length > 0 &&
            highlightedText({
              text: result.highlights[0],
              keywords: keywords,
            })}
          {contentTypeTag(result)}
        </Flex>
      </CardContent>
    </Card>
  );
};

export default SearchCard;
