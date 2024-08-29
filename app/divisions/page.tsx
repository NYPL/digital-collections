import React from "react";
import { Metadata } from "next";
import DivisionsPage from "../src/components/pages/divisionsPage/divisionsPage";
import { getdivisionsData } from "@/src/utils/api";

export const metadata: Metadata = {
  title: "Divisions - NYPL Digital Collections",
};

export default async function Divisions() {
  return <DivisionsPage />;
}
