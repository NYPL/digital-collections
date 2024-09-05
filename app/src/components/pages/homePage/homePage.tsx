"use client";
import { TemplateAppContainer } from "@nypl/design-system-react-components";
import React from "react";
import ExploreFurther from "../../exploreFurther/exploreFurther";
import CampaignHero from "../../featuredItem/campaignHero";
import HomePageMainContent from "../../homePageMainContent/homePageMainContent";
import PageLayout from "../../pageLayout/pageLayout";
import { useRouter } from "next/navigation";

export default function HomePage({ data }) {
  const router = useRouter();
  router?.replace("/", undefined);

  return (
    <PageLayout activePage="home" adobeAnalyticsPageName="home">
      <TemplateAppContainer
        breakout={
          <div id="hero">
            <CampaignHero featuredItemData={data.featuredItemData} />
          </div>
        }
        contentPrimary={<HomePageMainContent data={data.swimLaneData} />}
      />
      <ExploreFurther />
    </PageLayout>
  );
}
