"use client";
import React from "react";
import {
  Card,
  CardHeading,
  Link,
  Tooltip,
} from "@nypl/design-system-react-components";
import "src/styles/globals.css";

const ItemCard = ({ id, isLargerThanLargeTablet, item }) => {
  return (
    <Card
      sx={{ display: "grid" }}
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
        className="cardTitle"
        noOfLines={3}
      >
        {isLargerThanLargeTablet ? (
          <Tooltip content={item.title}>
            <Link href={item.url} sx={{ marginBottom: "0" }}>
              {item.title}
            </Link>
          </Tooltip>
        ) : (
          item.title
        )}
      </CardHeading>
    </Card>
  );
};

export default ItemCard;
