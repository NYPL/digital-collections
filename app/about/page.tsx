import AboutPage from "src/components/pages/aboutPage/aboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About NYPL Digital Collections",
};

export default function About() {
  return <AboutPage />;
}
