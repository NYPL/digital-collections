"use client";
import PageLayout from "../../pageLayout/pageLayout";
import Item from "../../items/item";
import { stringToSlug } from "../../../../src/utils/utils";
// import { getItemData } from "../../../../src/utils/api"
// import { ItemModel } from "../../../../src/models/item";
import React from "react";

export const ItemPage = (params) => {
  console.log("params.item are: ", params.item);
  console.log("params are: ", params);
  const item = params.item;
  const pageName = `items|${stringToSlug(item.title)}`;
  return (
    <PageLayout
      activePage="item"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "All Items", url: "/items" },
        {
          text: `${item.title}`,
          url: `/items/${params.uuid}`,
        },
      ]}
      adobeAnalyticsPageName={pageName}
    >
      <Item item={item} />
    </PageLayout>
  );
};
