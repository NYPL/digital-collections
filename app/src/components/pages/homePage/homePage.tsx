"use client";
import {
  Template,
  TemplateBreakout,
  TemplateContent,
  TemplateMain,
} from "@nypl/design-system-react-components";
import React from "react";
import ExploreFurther from "../../exploreFurther/exploreFurther";
import CampaignHero from "../../featuredItem/campaignHero";
import HomePageMainContent from "../../homePageMainContent/homePageMainContent";
import PageLayout from "../../pageLayout/pageLayout";
export default function HomePage({ data }) {
  return (
    <PageLayout activePage="home">
      <Template>
        <TemplateBreakout>
          <CampaignHero featuredItemData={data.featuredItemData} />
        </TemplateBreakout>
        <TemplateMain>
          <TemplateContent>
            <HomePageMainContent
              swimlanes={data.swimLaneData.lanesWithNumItems}
              randomNumber={data.swimLaneData.randomNumber}
            />
            <TemplateBreakout>
              <ExploreFurther />
            </TemplateBreakout>
          </TemplateContent>
        </TemplateMain>
      </Template>
    </PageLayout>
  );
}
