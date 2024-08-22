"use client";
import React from "react";
import {
  Card,
  CardHeading,
  Link,
  Tooltip,
} from "@nypl/design-system-react-components";
import styles from "./Card.module.css";

const ItemCard = ({ id, isLargerThanLargeTablet, item }) => {
  const truncatedTitle = item.title.length > 80; // Pretty much random
  const card = (
    <Card
      id={`card-${id}`}
      mainActionLink={item.url}
      imageProps={{
        alt: "",
        id: `image-${id}`,
        isLazy: true,
        aspectRatio: "twoByOne",
        src: item.imageURL,
      }}
    >
      <CardHeading
        id={`row-card-heading-${id}`}
        level="h3"
        size="heading5"
        className={styles.cardTitle}
        noOfLines={3}
      >
        {item.title}
      </CardHeading>
    </Card>
  );
  return isLargerThanLargeTablet && truncatedTitle ? (
    // Needs tooltip position updates
    <Tooltip content={item.title}>{card}</Tooltip>
  ) : (
    card
  );
};

export default ItemCard;
