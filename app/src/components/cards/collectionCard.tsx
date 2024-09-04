"use client";
import React from "react";
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
interface CollectionCardProps {
  slug: string;
  id: number;
  isLargerThanLargeTablet: boolean;
  isLargerThanDesktop: boolean;
  collection: CollectionCardDataType;
}

const CollectionCard = ({
  slug,
  id,
  isLargerThanLargeTablet,
  isLargerThanDesktop,
  collection,
}: CollectionCardProps) => {
  const truncatedTitle = collection.title.length > TRUNCATED_LENGTH; // Pretty much random
  const card = (
    <Card
      id={`card-${slug}-${id}`}
      mainActionLink={collection.url}
      imageProps={
        collection.imageID
          ? {
              alt: "",
              id: `image-${slug}-${id}`,
              isLazy: true,
              aspectRatio: "twoByOne",
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
          <StatusBadge sx={{ marginBottom: "xs" }} type="informative">
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
            [`@media screen and (min-width: ${headerBreakpoints.lgMobile})`]: {
              display: "inline",
            },
          }}
        >
          {`${collection.numItems} items`}
        </Text>
      </CardContent>
    </Card>
  );
  return isLargerThanLargeTablet && truncatedTitle ? (
    <Tooltip
      offset={isLargerThanDesktop ? [0, -140] : [0, -120]}
      content={collection.title}
    >
      {card}
    </Tooltip>
  ) : (
    card
  );
};

export default CollectionCard;
