import React, { Suspense } from "react";
import { Metadata } from "next";
import DivisionsPage from "../src/components/pages/divisionsPage/divisionsPage";
import { CollectionsApi } from "@/src/utils/apiClients/apiClients";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Divisions - NYPL Digital Collections",
  openGraph: {
    title: "Divisions - NYPL Digital Collections",
  },
};

export default async function Divisions() {
  const data = await CollectionsApi.getDivisionData();
  return (
    <Suspense>
      <DivisionsPage summary={data?.summary} divisions={data?.divisions} />
    </Suspense>
  );
}
