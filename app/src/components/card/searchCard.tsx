"use client";
import React, { forwardRef } from "react";
import {
  Card,
  CardHeading,
  Text,
  CardContent,
  Tooltip,
  StatusBadge,
  Button,
  CardActions,
  Link,
  TagSet,
} from "@nypl/design-system-react-components";
import { headerBreakpoints } from "../../utils/breakpoints";
import { TRUNCATED_LENGTH } from "@/src/config/constants";
import ItemCardDataType from "@/src/types/ItemCardDataType";
import { CollectionCardDataType } from "../../types/CollectionCardDataType";
import { Offset } from "@/src/hooks/useTooltipOffset";
import { stringToSlug } from "@/src/utils/utils";
import CardImage from "./cardImage";
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
      {recordType === "item"
        ? "Available onsite only"
        : "Contains on-site materials"}
    </StatusBadge>
  );
};

const contentTypeTag = (contentType: SearchResultContentType) => {
  return (
    <TagSet
      onClick={() => {}}
      tagSetData={[{ id: "content-type", label: contentType }]}
      type="filter"
    />
  );
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
        {result.containsOnSiteMaterial &&
          onSiteMaterialBadge(result.recordType)}
        {result.contentType && contentTypeTag(result.contentType)}
      </CardContent>
    </Card>
  );
};

export default SearchCard;
