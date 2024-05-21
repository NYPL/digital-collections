"use client";
import {
  Card,
  CardContent,
  CardHeading,
  Grid,
  Heading,
  Link,
} from "@nypl/design-system-react-components";
import React from "react";
import PageLayout from "../../../components/pageLayout/pageLayout";

const Division = () => {
  return (
    <PageLayout activePage="division">
      <title>A Division</title>
      <Grid>
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
            I am one collection
          </CardHeading>
          <CardContent>
            <Link href="/collections/hello">Go to collection page</Link>
          </CardContent>
        </Card>
        <Card
          width="500px"
          imageProps={{
            alt: "",
            isLazy: true,
            aspectRatio: "twoByOne",
            src: "public/pd_banner.png",
          }}
        >
          <CardHeading level="h3" size="heading5">
            I am another collection
          </CardHeading>
          <CardContent>
            <Link href="/collections/hello">Go to collection page</Link>
          </CardContent>
        </Card>
      </Grid>
    </PageLayout>
  );
};

export default Division;
