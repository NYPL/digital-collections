import React, { Suspense } from "react";
import { Metadata } from "next";
import DivisionsPage from "../src/components/pages/divisionsPage/divisionsPage";
import { getDivisionsData } from "@/src/utils/api";

export const metadata: Metadata = {
  title: "Divisions - NYPL Digital Collections",
};

export default async function Divisions() {
  const data = await getDivisionsData();
  return (
    <Suspense>
      <DivisionsPage data={data} />
    </Suspense>
  );
}
