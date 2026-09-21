import AboutPage from "../src/components/pages/aboutPage/aboutPage";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "About NYPL Digital Collections",
};

export default function About() {
  return (
    <Suspense fallback={null}>
      <AboutPage />
    </Suspense>
  );
}
