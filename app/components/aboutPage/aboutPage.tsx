"use client";
import { Box } from "@nypl/design-system-react-components";
import aboutPageElements from "app/data/aboutPageElements";
import PageLayout from "../pageLayout/pageLayout";

export default function AboutPage() {
  function createSection(heading: React.JSX.Element, body: React.JSX.Element) {
    return (
      <>
        {heading}
        {body}
      </>
    );
  }

  return (
    <PageLayout activePage="about">
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
    </PageLayout>
  );
}
