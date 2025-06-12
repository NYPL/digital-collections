"use client";
import React, { forwardRef } from "react";
import {
  Card as ChakraCard,
  CardHeading,
  Text,
  CardContent,
  Tooltip,
  StatusBadge,
} from "@nypl/design-system-react-components";
import { headerBreakpoints } from "../../utils/breakpoints";
import { TRUNCATED_CARD_LENGTH } from "@/src/config/constants";
import ItemCardDataType from "@/src/types/ItemCardDataType";
import { CollectionCardDataType } from "../../types/CollectionCardDataType";
import { Offset } from "@/src/hooks/useTooltipOffset";
import { stringToSlug } from "@/src/utils/utils";
import CardImage from "./cardImage";
export interface DCCardProps {
  tooltipOffset?: Offset;
  id: string;
  isLargerThanLargeTablet: boolean;
  slug?: string;
  imageHeight: number;
  record: CollectionCardDataType | ItemCardDataType;
}

export function isCollectionCardDataType(
  record: CollectionCardDataType | ItemCardDataType
): record is CollectionCardDataType {
  return "numberOfDigitizedItems" in record;
}

export const Card = forwardRef<HTMLDivElement, DCCardProps>(
  (
    { tooltipOffset, id, isLargerThanLargeTablet, imageHeight, slug, record },
    ref
  ) => {
    const truncatedTitle = record.title.length > TRUNCATED_CARD_LENGTH;
    const isCollection = isCollectionCardDataType(record);
    const identifier = slug
      ? `${slug}-${id}`
      : `${stringToSlug(record.title)}-${id}`; // should probably truncate

    const card = (
      <ChakraCard
        ref={ref}
        key={record.imageID}
        id={`card-${identifier}`}
        mainActionLink={record.url}
        imageProps={{
          component: (
            <CardImage
              key={record.imageID}
              imageHeight={imageHeight}
              record={record}
            />
          ),
        }}
      >
        <CardContent>
          {isCollection && record.containsOnSiteMaterials && (
            <StatusBadge sx={{ marginBottom: "0px" }} type="informative">
              Contains on-site materials
            </StatusBadge>
          )}
        </CardContent>
        <CardHeading
          id={`row-card-heading-${identifier}`}
          level="h3"
          size="heading5"
          noOfLines={3}
          sx={{
            marginTop: "0px",
            marginBottom: "xs",
            ":focus-within": {
              outline: "2px solid var(--nypl-colors-ui-link-primary)",
              "> a": {
                outline: "none",
              },
            },
          }}
        >
          {record.title}
        </CardHeading>
        <CardContent sx={{ alignContent: "top" }}>
          {isCollection && (
            <Text
              id={`item-count-${identifier}`}
              size="subtitle2"
              fontWeight="medium"
              __css={{
                display: "none",
                [`@media screen and (min-width: ${headerBreakpoints.lgMobile}px)`]:
                  {
                    display: "inline",
                  },
              }}
            >
              {`${Math.floor(record.numberOfDigitizedItems)} item${
                Math.floor(record.numberOfDigitizedItems) !== 1 ? "s" : ""
              }`}
            </Text>
          )}
        </CardContent>
      </ChakraCard>
    );

    const cardWithTooltip =
      isLargerThanLargeTablet && truncatedTitle ? (
        <Tooltip offset={tooltipOffset} content={record.title}>
          {card}
        </Tooltip>
      ) : (
        card
      );

    return cardWithTooltip;
  }
);

Card.displayName = "DCCard";

export default Card;
