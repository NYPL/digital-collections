"use client";
import React from "react";
import {
  Card,
  CardHeading,
  Tooltip,
} from "@nypl/design-system-react-components";
import styles from "./Card.module.css";

const ItemCard = ({ slug, id, isLargerThanLargeTablet, item }) => {
  return (
    <Card
      sx={{ display: "grid" }}
      id={`card-${slug}-${id}`}
      mainActionLink={item.url}
      imageProps={{
        alt: "",
        id: `image-${slug}-${id}`,
        isLazy: true,
        aspectRatio: "twoByOne",
        src: item.imageURL,
      }}
    >
      <CardHeading
        id={`row-card-heading-${slug}-${id}`}
        level="h3"
        size="heading5"
        className={styles.cardtitle}
        noOfLines={3}
      >
        {isLargerThanLargeTablet ? (
          <Tooltip content={item.title}>{item.title}</Tooltip>
        ) : (
          item.title
        )}
      </CardHeading>
    </Card>
  );
};

export default ItemCard;
