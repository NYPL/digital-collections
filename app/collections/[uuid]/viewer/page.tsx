import React from "react";
import PageLayout from "@/src/components/pageLayout/pageLayout";
import { CollectionViewerPage } from "@/src/components/pages/collectionViewerPage/collectionViewerPage";

export default async function CollectionViewer({ params }) {
  const { uuid } = params;
  const url = `http://localhost:8000/manifests/collection/${uuid}`;

  return (
    <PageLayout
      activePage="collections"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Collections", url: "/collections" },
      ]}
    >
      <CollectionViewerPage manifestId={url} />
    </PageLayout>
  );
}
