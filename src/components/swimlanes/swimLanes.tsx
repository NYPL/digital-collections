import React from "react";
import {
  Box,
  Card,
  CardHeading,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Link,
} from "@nypl/design-system-react-components";
import styles from "./Swimlanes.module.css";
import { imageURL } from "@/utils/utils";
import appConfig from "appConfig";
import Image from "next/image";

const SwimLanes = ({ lanesWithNumItems }) => {
  return lanesWithNumItems.map((lane, key) => (
    <Box className={styles.lane} data-testid={lane.slug} mt="xxl" key={key}>
      <Flex alignItems="baseline">
        <Heading id={`row-heading-${lane.slug}`} level="h2" size="heading3">
          {lane.title}
        </Heading>
        <Spacer />
        <Link
          id={`row-see-more-${lane.slug}`}
          type="standalone"
          href={`${appConfig.DC_URL}/collections/lane/${lane.slug}`}
          aria-label={`See more ${lane.title.toLowerCase()}`}
          sx={{
            display: { sm: "none", md: "inline" },
            fontWeight: "500",
            alignItems: "center",
          }}
        >
          See more
        </Link>
      </Flex>
      {lane.collections && lane.collections.length > 0 && (
        <SimpleGrid columns={4} id={`grid-${lane.slug}`}>
          {lane.collections.map((collection, index) => (
            <Card
              key={index}
              id={`card-${lane.slug}-${index}`}
              imageProps={{
                alt: "",
                aspectRatio: "twoByOne",
                src: imageURL(collection.image_id, "full", "288,", "0"),
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
                url={collection.url}
                noOfLines={3}
              >
                {collection.title}
              </CardHeading>
              {/*TODO: Check Dec 7 2023 with React release that this subtitle
               ** style will now appear as intended */}
              <CardHeading
                size="subtitle2"
                sx={{
                  display: { sm: "none", md: "inline" },
                }}
              >
                <> {collection.numItems} items </>
              </CardHeading>
            </Card>
          ))}
        </SimpleGrid>
      )}
      <Link
        id={`row-see-more-${lane.slug}-mobile`}
        type="standalone"
        href={`${appConfig.DC_URL}/collections/lane/${lane.slug}`}
        aria-label={`See more ${lane.title.toLowerCase()}`}
        className="smlink"
        sx={{
          display: { sm: "flex", md: "none" },
          fontWeight: "500",
          justifyContent: "flex-end",
          marginTop: "s",
          alignItems: "center",
          "& svg": {
            marginTop: "1px",
          },
        }}
      >
        See more
      </Link>
    </Box>
  ));
};

export default SwimLanes;
