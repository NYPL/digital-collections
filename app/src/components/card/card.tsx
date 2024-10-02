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
import styles from "./card.module.css";
import { headerBreakpoints } from "../../utils/breakpoints";
import { TRUNCATED_LENGTH } from "@/src/config/constants";
import ItemCardDataType from "@/src/types/ItemCardDataType";
import { CollectionCardDataType } from "../../types/CollectionCardDataType";
import { Offset } from "@/src/hooks/useTooltipOffset";
interface DCCardProps {
  tooltipOffset?: Offset;
  id: string;
  isLargerThanLargeTablet: boolean;
  slug?: string;
  record: CollectionCardDataType | ItemCardDataType;
}

function isCollectionCardDataType(
  record: CollectionCardDataType | ItemCardDataType
): record is CollectionCardDataType {
  return "numberOfDigitizedItems" in record;
}

export const Card = forwardRef<HTMLDivElement, DCCardProps>(
  ({ tooltipOffset, id, isLargerThanLargeTablet, slug, record }, ref) => {
    const truncatedTitle = record.title.length > TRUNCATED_LENGTH;
    const isCollection = isCollectionCardDataType(record);
    const card = (
      <ChakraCard
        ref={ref}
        id={`card-${slug}-${id}`}
        mainActionLink={record.url}
        imageProps={
          record.imageID
            ? {
                alt: "",
                id: isCollection ? `image-${slug}-${id}` : `image-${id}`,
                isLazy: true,
                aspectRatio: "twoByOne",
                fallbackSrc: "/noImage.png",
                onError: (_event) =>
                  console.warn(
                    `Card image failed to load, fallback image loaded instead. ImageURL: ${record.imageURL}`
                  ),
                src: record.imageURL,
              }
            : {
                alt: "",
                id: `no-image-${id}`,
                isLazy: true,
                aspectRatio: "twoByOne",
                src: "/noImage.png",
              }
        }
      >
        <CardContent>
          {isCollection && record.containsOnSiteMaterials && (
            <StatusBadge sx={{ marginBottom: "0px" }} type="informative">
              Contains on-site materials
            </StatusBadge>
          )}
        </CardContent>
        <CardHeading
          id={`row-card-heading-${slug}-${id}`}
          level="h3"
          size="heading5"
          className={styles.cardTitle}
          noOfLines={3}
          sx={{ marginTop: "0px", marginBottom: "xs" }}
        >
          {record.title}
        </CardHeading>
        <CardContent sx={{ alignContent: "top" }}>
          {isCollection && (
            <Text
              id={`item-count-${slug}-${id}`}
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
    return isLargerThanLargeTablet && truncatedTitle ? (
      <Tooltip offset={tooltipOffset} content={record.title}>
        {card}
      </Tooltip>
    ) : (
      card
    );
  }
);

Card.displayName = "DCCard";

export default Card;
