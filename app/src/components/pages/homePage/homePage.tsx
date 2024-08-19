"use client";
import { TemplateAppContainer } from "@nypl/design-system-react-components";
import React from "react";
import ExploreFurther from "../../exploreFurther/exploreFurther";
import CampaignHero from "../../hero/campaignHero";
import HomePageMainContent from "../../homePageMainContent/homePageMainContent";
import PageLayout from "../../pageLayout/pageLayout";
import { useRouter } from "next/navigation";

export default function HomePage(data) {
  console.log("data in HomePage component is: ", data);
  // console.log("data.lanesWithNumItems[0] is: ", data.lanesWithNumItems[0] )

  const router = useRouter();
  router?.replace("/", undefined);

  return (
    <PageLayout activePage="home">
      <TemplateAppContainer
        breakout={
          <div id="hero">
            <CampaignHero />
          </div>
        }
        contentPrimary={<HomePageMainContent data={data} />}
      />
      <ExploreFurther />
    </PageLayout>
  );
}
