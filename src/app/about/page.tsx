"use client";
import { Box } from "@nypl/design-system-react-components";
import aboutPageElements from "../data/aboutPageElements";
import React from "react";

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
      <title>About NYPL Digital Collections</title>
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
