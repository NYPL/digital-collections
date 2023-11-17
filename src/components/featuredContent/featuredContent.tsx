import {
  FeaturedContent,
  Button,
  Heading,
} from "@nypl/design-system-react-components";
import React from "react";
import featuredContentData from "@/data/featuredContentData";
import { FeaturedContentData } from "@/types/FeaturedContentData";

const FeaturedContentComponent = ({ testRandomNumber }) => {
  const randomNumber = testRandomNumber || (Math.random() < 0.5 ? 0 : 1);
  const data: FeaturedContentData = featuredContentData[randomNumber];
  return (
    <FeaturedContent
      data-testid={`featured-content-${randomNumber}`}
      isFullWidth={true}
      textContent={
        <div>
          <Heading level="h2" overline={data.overline}>
            {data.heading}
          </Heading>
          <p>{data.text}</p>

          <a href={data.link} target="_blank" rel="noopener noreferrer">
            <Button id={data.buttonId} aria-label={data.ariaLabel}>
              {data.buttonText}
            </Button>
          </a>
        </div>
      }
      imageProps={{
        alt: data.imgAlt,
        width: "oneHalf",
        position: "end",
        src: data.imgSrc,
      }}
      sx={{ mt: "xxl" }}
    />
  );
};

export default FeaturedContentComponent;
