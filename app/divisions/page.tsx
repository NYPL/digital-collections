import React from "react";
import { Metadata } from "next";
import DivisionsPage from "src/components/pages/divisionsPage/divisionsPage";

export const metadata: Metadata = {
  title: "Divisions - NYPL Digital Collections",
};

export default function Divisions() {
  return <DivisionsPage />;
}
