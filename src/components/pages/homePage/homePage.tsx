"use client";
import { TemplateAppContainer } from "@nypl/design-system-react-components";
import React from "react";
import ExploreFurther from "../../exploreFurther/exploreFurther";
import CampaignHero from "../../hero/campaignHero";
import HomePageMainContent from "../../homePageMainContent/homePageMainContent";
import PageLayout from "../../pageLayout/pageLayout";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  // if (process.env.APP_ENV === "qa" || process.env.APP_ENV === "production") {
  router.replace("/", undefined);
  // }

  return (
    <PageLayout activePage="home">
      <TemplateAppContainer
        breakout={
          <div id="hero">
            <CampaignHero />
          </div>
        }
        contentPrimary={<HomePageMainContent />}
      />
      <ExploreFurther />
    </PageLayout>
  );
}
