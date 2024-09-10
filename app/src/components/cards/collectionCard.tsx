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
  const truncatedTitle = collection.title.length > TRUNCATED_LENGTH;
  const [offset, setOffset] = useState<[number, number]>([0, -130]);
  const cardRef = useRef<HTMLDivElement>(null);
  const getOffset = () => {
    if (cardRef.current) {
      const image = cardRef.current.children[0] as HTMLElement;
      const imageHeight = image.offsetHeight;
      const percentageOffset = imageHeight * 1.01;

      setOffset([
        0,
        collection.containsOnSiteMaterials
          ? -percentageOffset - 35
          : -percentageOffset,
      ]);
    }
  };

  useEffect(() => {
    setTimeout(getOffset, 0);
    window.addEventListener("resize", getOffset);

    return () => {
      window.removeEventListener("resize", getOffset);
    };
  }, []);

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
    <Tooltip offset={offset} content={collection.title}>
      {card}
    </Tooltip>
  ) : (
    card
  );
};

export default CollectionCard;
