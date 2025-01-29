"use client";
import React, { forwardRef } from "react";
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
  SearchResultContentType,
  SearchResultRecordType,
} from "@/src/types/SearchCardType";

export interface SearchCardProps {
  result: SearchCardType;
}

const onSiteMaterialBadge = (recordType: SearchResultRecordType) => {
  return (
    <StatusBadge sx={{ marginBottom: "0px" }} type="informative">
      {recordType === "Item"
        ? "Available onsite only"
        : "Contains on-site materials"}
    </StatusBadge>
  );
};

const contentTypeTag = (
  recordType: SearchResultRecordType,
  contentType: SearchResultContentType
) => {
  const displayData =
    recordType === "Item"
      ? [{ id: "content-type", label: contentType }]
      : [{ id: "record-type", label: recordType }];
  return <TagSet onClick={() => {}} tagSetData={displayData} type="filter" />;
};

export const SearchCard = ({ result }: SearchCardProps) => {
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
      <CardHeading level="h3" size="heading5">
        {result.title}
      </CardHeading>
      <CardContent>
        <Flex flexDir="column" gap="xs">
          {result.containsOnSiteMaterial &&
            onSiteMaterialBadge(result.recordType)}
          {result.highlights?.length > 0 && (
            <Text margin="0">{result.highlights}</Text>
          )}
          {result.contentType &&
            contentTypeTag(result.recordType, result.contentType)}
        </Flex>
      </CardContent>
    </Card>
  );
};

export default SearchCard;
