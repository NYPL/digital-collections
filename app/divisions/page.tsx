import React, { Suspense } from "react";
import { Metadata } from "next";
import DivisionsPage from "../src/components/pages/divisionsPage/divisionsPage";
import { getDivisionData } from "@/src/utils/api";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Divisions - NYPL Digital Collections",
};

export default async function Divisions() {
  const data = await getDivisionData();
  console.log(process.env.API_URL);
  // Repo API returns 404s within the data.
  if (data?.headers?.code === "404") {
    redirect("/404");
  }
  return (
    <Suspense>
      <DivisionsPage data={data} />
    </Suspense>
  );
}
