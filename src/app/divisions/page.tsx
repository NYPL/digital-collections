"use client";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeading,
  Heading,
} from "@nypl/design-system-react-components";
import React from "react";
import PageLayout from "../../components/pageLayout/pageLayout";

const Divisions = () => {
  return (
    <PageLayout activePage="divisions">
      <Heading>All Divisions</Heading>
      <Card
        width="500px"
        imageProps={{
          alt: "",
          isLazy: true,
          aspectRatio: "twoByOne",
          src: "pd_banner.png",
        }}
      >
        <CardHeading level="h3" size="heading5">
          I am one division
        </CardHeading>
        <CardContent>
          <Link href="/divisions/hello">Go to division page</Link>
        </CardContent>
      </Card>
    </PageLayout>
  );
};

export default Divisions;
