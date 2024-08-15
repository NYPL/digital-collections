"use client";
import React from "react";
import {
  Card,
  CardHeading,
  Text,
  CardContent,
  Tooltip,
  Link,
  StatusBadge,
  Heading,
} from "@nypl/design-system-react-components";
import styles from "./Card.module.css";
import { headerBreakpoints } from "../../utils/breakpoints";
import { CollectionCardDataType } from "../../types/CollectionCardDataType";

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
      <CardHeading sx={{ display: "none" }}></CardHeading>
      <CardContent>
        <Heading
          id={`row-card-heading-${slug}-${id}`}
          level="h3"
          size="heading5"
          className={styles.cardTitle}
          noOfLines={3}
          sx={{ marginBottom: "xs" }}
        >
          <>
            {collection.containsOnSiteMaterials && (
              <StatusBadge type="informative">
                Contains on-site materials
              </StatusBadge>
            )}
            {isLargerThanLargeTablet ? (
              <Tooltip content={collection.title}>
                <Link
                  href={collection.url}
                  sx={{
                    color: "ui.link.primary",
                    ":hover": {
                      textDecoration: "underline",
                      textDecorationStyle: "dotted",
                      textDecorationThickness: "1px",
                      textUnderlineOffset: "2px",
                    },
                    marginBottom: "0",
                  }}
                >
                  {collection.title}
                </Link>
              </Tooltip>
            ) : (
              collection.title
            )}
          </>
        </Heading>
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
