"use client";
import { Box } from "@nypl/design-system-react-components";
import aboutPageElements from "../../aboutPageElements/aboutPageElements";
import PageLayout from "../../pageLayout/pageLayout";
import { createAdobeAnalyticsPageName } from "@/src/utils/utils";

export default function AboutPage() {
  function createSection(
    heading: React.JSX.Element,
    body: React.JSX.Element,
    key
  ) {
    return (
      <div key={key}>
        {heading}
        {body}
      </div>
    );
  }

  return (
    <PageLayout
      activePage="about"
      adobeAnalyticsPageName={createAdobeAnalyticsPageName("about")}
    >
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
        {aboutPageElements.map((section, index) =>
          createSection(section.heading, section.body, index)
        )}
      </Box>
    </PageLayout>
  );
}
