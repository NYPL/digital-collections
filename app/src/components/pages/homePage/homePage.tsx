"use client";
import { TemplateAppContainer } from "@nypl/design-system-react-components";
import React from "react";
import ExploreFurther from "../../exploreFurther/exploreFurther";
import CampaignHero from "../../featuredItem/campaignHero";
import HomePageMainContent from "../../homePageMainContent/homePageMainContent";
import PageLayout from "../../pageLayout/pageLayout";
import { createAdobeAnalyticsPageName } from "@/src/utils/utils";
export default function HomePage({ data }) {
  return (
    <PageLayout
      activePage="home"
      adobeAnalyticsPageName={createAdobeAnalyticsPageName("home")}
    >
      <TemplateAppContainer
        breakout={
          <div id="hero">
            <CampaignHero featuredItemData={data.featuredItemData} />
          </div>
        }
        contentPrimary={
          <HomePageMainContent
            swimlanes={data.swimLaneData.lanesWithNumItems}
            randomNumber={data.swimLaneData.randomNumber}
          />
        }
      />
      <ExploreFurther />
    </PageLayout>
  );
}
