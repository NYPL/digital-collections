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
import { CollectionCardData } from "../..//types/CollectionCard";
interface CollectionCardProps {
  slug: string;
  index: number;
  isLargerThanLargeTablet: boolean;
  collection: CollectionCardData;
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
            [`@media screen and (min-width: 400px)`]: {
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
{
  /*
<SimpleGrid
columns={numColumns}
id={`grid-${lane.slug}`}
sx={{
  gridTemplateColumns: `repeat(${numColumns}, minmax(0, 1fr))`,
}}
 >
{lane.collections.map((collection, index) => (
  <Card
    sx={{ display: "grid" }}
    key={index}
    id={`card-${lane.slug}-${index}`}
    mainActionLink={collection.url}
    imageProps={{
      alt: "",
      id: `image-${lane.slug}-${index}`,
      isLazy: true,
      aspectRatio: "twoByOne",
      src: imageURL(collection.image_id, "full", "288,", "0"),
      // TODO: *IF* we want to use the Nextjs Image component, this
      // is how we would do it. It's suppose to be better for
      // performance but it's not visibly noticeable.
      // component: (
      //   <Image
      //     src={imageURL(collection.image_id, "full", "288,", "0")}
      //     alt=""
      //     width={100}
      //     height={100}
      //     objectFit="cover"
      //   />
      // ),
    }}
  >
    <CardHeading
      id={`row-card-heading-${lane.slug}-${index}`}
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
        id={`item-count-${lane.slug}-${index}`}
        size="subtitle2"
        fontWeight="medium"
        __css={{
          display: "none",
          [`@media screen and (min-width: 480px)`]: {
            display: "inline",
          },
        }}
      >
        {" "}
        {`${collection.numItems || 0} items`}{" "}
      </Text>
    </CardContent>
  </Card>
))}
>>>>>>> main
</SimpleGrid> */
}
