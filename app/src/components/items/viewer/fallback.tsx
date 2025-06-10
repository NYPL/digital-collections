"use client";

import { ItemModel } from "../../../models/item";
import React from "react";
import {
  Heading,
  Banner,
  Notification,
  Box,
  Link,
  Icon,
} from "@nypl/design-system-react-components";
import parse from "html-react-parser";

interface ItemProps {
  item: ItemModel;
}

const ItemMediaViewerFallback = ({ item }: ItemProps) => {
  // hacky way to generate the link
  // this assumes that the first Library Location in the array is the Division link
  const divisionLink =
    item.divisionLink || item?.metadata?.locations?.split("<br>")[0];
  return (
    <>
      {item.isRestricted ? (
        <Notification
          marginTop="m"
          marginBottom="m"
          marginLeft="0"
          marginRight="0"
          notificationHeading="Available to view on-site at NYPL"
          notificationContent={
            <>
              We invite you to visit one of our reading rooms at{" "}
              {parse(divisionLink)} to view this item. Due to copyright
              restrictions, it is available for on-site access only. For
              directions, opening hours, and additional information about the
              research libraries, please visit the {parse(divisionLink)} page on{" "}
              <Link href="nypl.org">nypl.org</Link>.
            </>
          }
        />
      ) : (
        <Banner
          marginTop="m"
          marginBottom="m"
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
