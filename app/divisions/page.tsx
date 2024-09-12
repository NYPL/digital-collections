import React, { Suspense } from "react";
import { Metadata } from "next";
import DivisionsPage from "../src/components/pages/divisionsPage/divisionsPage";
import { getDivisionData } from "@/src/utils/api";

export const metadata: Metadata = {
  title: "Divisions - NYPL Digital Collections",
};

export default async function Divisions() {
  const data = await getDivisionData();
  console.log(data);
  return (
    <Suspense>
      <DivisionsPage data={data} />
    </Suspense>
  );
}
