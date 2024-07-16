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
import Image from "next/image";
import styles from "./CollectionCard.module.css";
import { headerBreakpoints } from "../../utils/breakpoints";
import { CollectionCardDataType } from "../../types/CollectionCard";
import { imageURL } from "src/utils/utils";

interface CollectionCardProps {
  slug: string;
  id: number;
  isLargerThanLargeTablet: boolean;
  collection: CollectionCardDataType;
}

const CollectionCard = ({
  slug,
  id,
  isLargerThanLargeTablet,
  collection,
}: CollectionCardProps) => {
  return (
    <Card
      sx={{ display: "grid" }}
      id={`card-${slug}-${id}`}
      mainActionLink={collection.url}
      imageProps={{
        alt: "",
        id: `image-${slug}-${id}`,
        isLazy: true,
        aspectRatio: "twoByOne",
        component: (
          <div style={{ display: "block" }}>
            <Image
              // src={collection.imageURL}
              src={imageURL(collection.imageID, "square", "max", "0")}
              alt=""
              width={288}
              height={144}
              // layout="fill"
              // fill={true}
              // sx={{ display: "block" }}
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              // objectFit="cover"
            />
          </div>
        ),
      }}
    >
      <CardHeading
        id={`row-card-heading-${slug}-${id}`}
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
          {" "}
          {`${collection.numItems} items`}{" "}
        </Text>
      </CardContent>
    </Card>
  );
};

export default CollectionCard;
