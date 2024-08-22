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
// TODO: Truncation logic, mobile breakpoints
const CollectionCard = ({
  slug,
  id,
  isLargerThanLargeTablet,
  collection,
}: CollectionCardProps) => {
  return (
    <Tooltip placement="bottom" elevation={-50} content={collection.title}>
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
        <CardHeading sx={{ height: 0, padding: 0, margin: 0 }}></CardHeading>
        <CardContent sx={{ alignContent: "top" }}>
          {collection.containsOnSiteMaterials && (
            <StatusBadge sx={{ marginBottom: "xs" }} type="informative">
              Contains on-site materials
            </StatusBadge>
          )}
          <Heading
            id={`row-card-heading-${slug}-${id}`}
            level="h3"
            size="heading5"
            className={styles.cardTitle}
            noOfLines={3}
            sx={{ marginTop: "0px", marginBottom: "xs" }}
          >
            <>
              <Link
                href={collection.url}
                sx={{
                  color: "ui.link.primary",
                  ":hover": {
                    color: "ui.link.secondary",
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
            </>
          </Heading>
          <Text
            id={`item-count-${slug}-${id}`}
            size="subtitle2"
            fontWeight="medium"
            __css={{
              display: "none",
              [`@media screen and (min-width: ${headerBreakpoints.lgMobile})`]:
                {
                  display: "inline",
                },
            }}
          >
            {`${collection.numItems} items`}
          </Text>
        </CardContent>
      </Card>
    </Tooltip>
  );
};

export default CollectionCard;
