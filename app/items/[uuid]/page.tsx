import React from "react";
import { Metadata } from "next";
import PageLayout from "app/components/pageLayout/pageLayout";
import Item from "@/components/items/item";
type ItemProps = {
  params: { uuid: string };
};

export async function generateMetadata({
  params,
}: ItemProps): Promise<Metadata> {
  const uuid = params.uuid;
  return {
    title: `${uuid} - NYPL Digital Collections`, //should be item title
  };
}

export default function Lane({ params }: ItemProps) {
  return (
    <PageLayout
      activePage="item"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "All Items", url: "/items" },
        {
          text: `${params.uuid}`,
          url: `/items/${params.uuid}`,
        },
      ]}
    >
      <Item uuid={params.uuid} />
    </PageLayout>
  );
}
