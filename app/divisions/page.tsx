import React, { Suspense } from "react";
import { Metadata } from "next";
import DivisionsPage from "../src/components/pages/divisionsPage/divisionsPage";
import { RepoApi } from "@/src/utils/apiClients";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Divisions - NYPL Digital Collections",
  openGraph: {
    title: "Divisions - NYPL Digital Collections",
  },
};

export default async function Divisions() {
  const data = await RepoApi.getDivisionData();
  // Repo API returns 404s within the data.
  if (data?.headers?.code === "404") {
    redirect("/404");
  }
  return (
    <Suspense>
      <DivisionsPage summary={data?.summary} divisions={data?.divisions} />
    </Suspense>
  );
}
