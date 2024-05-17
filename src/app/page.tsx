"use client";
// import type { Metadata } from "next";
// import { Html, Head, Main, NextScript } from "next/document";
import CampaignHero from "@/components/hero/campaignHero";
import HomePageMainContent from "@/components/homePageMainContent/homePageMainContent";
import ExploreFurther from "@/components/exploreFurther/exploreFurther";

import { TemplateAppContainer } from "@nypl/design-system-react-components";

// export const metadata: Metadata = {
//   title: "NYPL Digital Collections",
// };

export default function Page() {
  return (
    <>
      <TemplateAppContainer
        breakout={
          <div id="hero">
            {/* <div>home</div> */}
            <CampaignHero />
          </div>
        }
        contentPrimary={<HomePageMainContent />}
      />
      <ExploreFurther />
    </>
  );
}
