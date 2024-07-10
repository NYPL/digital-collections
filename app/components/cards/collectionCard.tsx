"use client";
import React from "react";
import {
  Card,
  CardHeading,
  Text,
  CardContent,
  Tooltip,
  Link,
} from "@nypl/design-system-react-components";
import styles from "../swimlanes/Swimlanes.module.css";
import { headerBreakpoints } from "../../utils/breakpoints";
import { CollectionCardDataType } from "../..//types/CollectionCard";
interface CollectionCardProps {
  slug: string;
  index: number;
  isLargerThanLargeTablet: boolean;
  collection: CollectionCardDataType;
}

const CollectionCard = ({
  slug,
  index,
  isLargerThanLargeTablet,
  collection,
}: CollectionCardProps) => {
  return (
    <Card
      sx={{ display: "grid" }}
      id={`card-${slug}-${index}`}
      mainActionLink={collection.url}
      imageProps={{
        alt: "",
        id: `image-${slug}-${index}`,
        isLazy: true,
        aspectRatio: "twoByOne",
        src: collection.imageURL,
      }}
    >
      <CardHeading
        id={`row-card-heading-${slug}-${index}`}
        level="h3"
        size="heading5"
        className={styles.collectiontitle}
        noOfLines={3}
      >
        {isLargerThanLargeTablet ? (
          <Tooltip content={collection.title}>
            <Link href={collection.url} sx={{ marginBottom: "0" }}>
              {collection.title}
            </Link>
          </Tooltip>
        ) : (
          collection.title
        )}
      </CardHeading>
      <CardContent>
        <Text
          id={`item-count-${slug}-${index}`}
          size="subtitle2"
          fontWeight="medium"
          __css={{
            display: "none",
            [`@media screen and (min-width: ${headerBreakpoints.lgMobile})`]: {
              display: "inline",
            },
          }}
        >
          {" "}
          {`${collection.numItems} items`}{" "}
        </Text>
      </CardContent>
    </Card>
  );
};

export default CollectionCard;
