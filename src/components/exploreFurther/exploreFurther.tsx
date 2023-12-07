import {
  Card,
  CardHeading,
  CardContent,
  Link,
  Heading,
  Button,
  Box,
} from "@nypl/design-system-react-components";
import React from "react";

const ExploreFurther = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--ui-bg-default, #F5F5F5)",
        paddingTop: "xl",
        paddingLeft: "xl",
      }}
    >
      <Heading
        size="heading3"
        text="Explore further"
        subtitle="Here are some other ways you can access and engage with digital content at NYPL and beyond"
      />
      <Card
        id="card-id"
        imageProps={{
          alt: "Alt text",
          aspectRatio: "square",
          component: undefined,
          isAtEnd: false,
          isLazy: true,
          size: "default",
          src: "//placekitten.com/400/300",
        }}
        layout="row"
      >
        <CardHeading
          id="main-heading1"
          level="h3"
          subtitle="Sollicitudin Lorem Tortor Purus Ornare"
        >
          Optional Header
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue. Nullam quis risus eget urna mollis ornare
          vel eu leo. Nulla vitae elit libero, a pharetra augue.
        </CardContent>
      </Card>
    </Box>
  );
};

export default ExploreFurther;
