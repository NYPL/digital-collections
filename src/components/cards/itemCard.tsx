"use client";
import React from "react";
import {
  Card,
  CardHeading,
  Tooltip,
  Link,
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
          <Tooltip content={item.title}>
            <Link href={item.url} sx={{ marginBottom: "0" }}>
              {item.title}
            </Link>
          </Tooltip>
        ) : (
          <Link href={item.url} sx={{ marginBottom: "0" }}>
            {item.title}
          </Link>
        )}
      </CardHeading>
    </Card>
  );
};

export default ItemCard;
