"use client";

import { ItemModel } from "../../../models/item";
import React from "react";
import {
  Heading,
  Banner,
  Box,
  Link,
  Icon,
} from "@nypl/design-system-react-components";

interface ItemProps {
  item: ItemModel;
}

const ItemMediaViewerFallback = ({ item }: ItemProps) => {
  const divisionLink = item.metadata.locations.split("<br>")[0];
  return (
    <>
      {item.isRestricted ? (
        <Banner
          marginTop="m"
          heading={
            <Heading level="h5">Available to view on-site at NYPL</Heading>
          }
          content={
            <>
              We invite you to visit one of our reading rooms at {divisionLink}{" "}
              to view this item. Due to copyright restrictions, it is available
              for on-site access only. For directions, opening hours, and
              additional information about the research libraries, please visit
              the {divisionLink} page on <Link href="nypl.org">nypl.org</Link>.
            </>
          }
          type="warning"
        />
      ) : (
        <Banner
          marginTop="m"
          content={
            <>
              This item has no media to return. Help us resolve this by
              submitting feedback with the feedback form.
            </>
          }
          icon={
            <Icon
              name="alertWarningOutline"
              title="Banner with custom icon"
              size="large"
              marginTop="xxxs"
            />
          }
          type="negative"
        />
      )}
    </>
  );
};

export default ItemMediaViewerFallback;
