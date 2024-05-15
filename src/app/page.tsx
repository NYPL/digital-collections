"use client";
// import type { Metadata } from "next";
// import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import type { AppProps } from "next/app";
import Header from "@/components/header/header";
import CampaignHero from "@/components/hero/campaignHero";
import HomePageMainContent from "@/components/homePageMainContent/homePageMainContent";
import {
  DSProvider,
  useFeedbackBox,
  TemplateAppContainer,
} from "@nypl/design-system-react-components";
// import { PageProps } from ".next/types/app/layout";
// import { AppProps } from "next/app";
// import { Component } from "react";

// export const metadata: Metadata = {
//   title: "NYPL Digital Collections",
// };

export default function Page() {
  return (
    <TemplateAppContainer
      breakout={
        <div id="hero">
          {/* <div>home</div> */}
          <CampaignHero />
        </div>
      }
      contentPrimary={<HomePageMainContent />}
    />
  );
}
