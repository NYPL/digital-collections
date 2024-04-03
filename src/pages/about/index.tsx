import { Box, SkipNavigation } from "@nypl/design-system-react-components";
import Header from "@/components/header/header";
import NotificationBanner from "@/components/notificationBanner/notificationBanner";
import aboutPageElements from "@/data/aboutPageElements";
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
      <SkipNavigation />
      <NotificationBanner />
      <Header />
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
