"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardHeading,
  Text,
  CardContent,
  Tooltip,
  StatusBadge,
} from "@nypl/design-system-react-components";
import styles from "./Card.module.css";
import { headerBreakpoints } from "../../utils/breakpoints";
import { CollectionCardDataType } from "../../types/CollectionCardDataType";
import { TRUNCATED_LENGTH } from "@/src/config/constants";
interface DCCardProps {
  slug: string;
  id: number;
  isLargerThanLargeTablet: boolean;
  cardOffset;
  cardRef;
  collection: CollectionCardDataType;
}

const DCCard = ({
  slug,
  id,
  isLargerThanLargeTablet,
  collection,
  cardOffset,
  cardRef,
}: DCCardProps) => {
  const truncatedTitle = collection.title.length > TRUNCATED_LENGTH;

  const card = (
    <Card
      ref={cardRef}
      id={`card-${slug}-${id}`}
      mainActionLink={collection.url}
      imageProps={
        collection.imageID
          ? {
              alt: "",
              id: `image-${slug}-${id}`,
              isLazy: true,
              aspectRatio: "twoByOne",
              fallbackSrc: "/noImage.png",
              onError: (_event) =>
                console.warn(
                  `Card image failed to load, fallback image loaded instead. ImageURL: ${collection.imageURL}`
                ),
              src: collection.imageURL,
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
        {collection.containsOnSiteMaterials && (
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
        {collection.title}
      </CardHeading>
      <CardContent sx={{ alignContent: "top" }}>
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
          {`${Math.floor(collection.numberOfDigitizedItems)} item${
            Math.floor(collection.numberOfDigitizedItems) !== 1 ? "s" : ""
          }`}
        </Text>
      </CardContent>
    </Card>
  );
  return isLargerThanLargeTablet && truncatedTitle ? (
    <Tooltip offset={cardOffset} content={collection.title}>
      {card}
    </Tooltip>
  ) : (
    card
  );
};

export default DCCard;
