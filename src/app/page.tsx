"use client";
import CampaignHero from "./components/hero/campaignHero";
import HomePageMainContent from "./components/homePageMainContent/homePageMainContent";
import ExploreFurther from "./components/exploreFurther/exploreFurther";

import { TemplateAppContainer } from "@nypl/design-system-react-components";
import React from "react";

export default function Page(props: any) {
  return (
    <>
      <TemplateAppContainer
        breakout={
          <div id="hero">
            <CampaignHero />
          </div>
        }
        contentPrimary={<HomePageMainContent />}
      />
      <ExploreFurther />
    </>
  );
}
