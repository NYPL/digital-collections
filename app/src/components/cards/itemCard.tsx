"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardHeading,
  Tooltip,
} from "@nypl/design-system-react-components";
import styles from "./Card.module.css";
import { TRUNCATED_LENGTH } from "@/src/config/constants";

const ItemCard = ({ id, isLargerThanLargeTablet, item }) => {
  const truncatedTitle = item.title.length > TRUNCATED_LENGTH;
  const [offset, setOffset] = useState<[number, number]>([0, -130]);
  const cardRef = useRef<HTMLDivElement>(null);

  const getOffset = () => {
    if (cardRef.current) {
      const image = cardRef.current.children[0] as HTMLElement;
      const imageHeight = image.offsetHeight;
      const percentageOffset = imageHeight * 1.01;
      setOffset([0, -percentageOffset]);
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
      id={`card-${id}`}
      mainActionLink={item.url}
      imageProps={{
        alt: "",
        id: `image-${id}`,
        isLazy: true,
        aspectRatio: "twoByOne",
        fallbackSrc: "/noImage.png",
        onError: (_event) =>
          console.warn(
            `Card image failed to load, fallback image loaded instead. ImageURL: ${item.imageURL}`
          ),
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
    <Tooltip content={item.title} offset={offset}>
      {card}
    </Tooltip>
  ) : (
    card
  );
};

export default ItemCard;
