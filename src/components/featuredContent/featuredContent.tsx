import {
  FeaturedContent,
  Link,
  Heading,
  Box,
} from "@nypl/design-system-react-components";
import React from "react";
import featuredContentData from "@/data/featuredContentData";
import { FeaturedContentData } from "@/types/FeaturedContentData";

const FeaturedContentComponent = ({ randomNumber }) => {
  const data: FeaturedContentData = featuredContentData[randomNumber];
  // console.log()
  return (
    <FeaturedContent
      data-testid={`featured-content-${randomNumber}`}
      isFullWidth={true}
      textContent={
        <Box>
          <Heading level="h2" overline={data.overline}>
            {data.heading}
          </Heading>
          <p>{data.text}</p>
          <Link
            href={data.link}
            id={data.buttonId}
            data-testid={data.buttonId}
            isUnderlined={false}
            target="_blank"
            aria-label={`${data.buttonText}, ${data.heading}`}
            type="buttonPrimary"
          >
            {data.buttonText}
          </Link>
        </Box>
      }
      imageProps={{
        alt: "",
        width: "oneHalf",
        position: "end",
        src: data.imgSrc,
      }}
      sx={{
        mt: "xxl",
        "[data-testid='featuredcontent-bg-image']": {
          backgroundPosition: "top",
        },
      }}
    />
  );
};

export default FeaturedContentComponent;
