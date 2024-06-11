"use client";
import { Box, SkipNavigation } from "@nypl/design-system-react-components";
import Header from "app/components/header/header";
import NotificationBanner from "app/components/notificationBanner/notificationBanner";
import aboutPageElements from "app/data/aboutPageElements";
import Head from "next/head";

export default function About() {
  function createSection(heading: React.JSX.Element, body: React.JSX.Element) {
    return (
      <>
        {heading}
        {body}
      </>
    );
  }

  return (
    <>
      <Head>
        <title>About NYPL Digital Collections</title>
        <meta
          property="og:title"
          content="About NYPL Digital Collections"
          key="title"
        />
      </Head>
      <Box
        id="mainContent"
        sx={{
          maxWidth: "820px",
          margin: "s",
          [`@media screen and (min-width: 820px)`]: {
            margin: "auto",
          },
        }}
      >
        {aboutPageElements.map((section) =>
          createSection(section.heading, section.body)
        )}
      </Box>
    </>
  );
}
