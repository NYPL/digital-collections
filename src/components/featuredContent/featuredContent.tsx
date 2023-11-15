import {
  FeaturedContent,
  Button,
  Heading,
} from "@nypl/design-system-react-components";
import React from "react";

const FeaturedContentComponent = () => {
  var randomNumber = Math.random() < 0.5 ? 0 : 1;
  var featuredContentOptions = [
    <FeaturedContent
      isFullWidth={true}
      key={0}
      textContent={
        <div>
          <Heading level="h2" overline="Featured">
            Spotlight on the Public Domain
          </Heading>
          <p>
            The New York Public Library recently enhanced access to all public
            domain items in Digital Collections so that everyone has the freedom
            to enjoy and reuse these materials in almost limitless ways.
          </p>

          <a
            href="https://publicdomain.nypl.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              id="featured-learn-more"
              aria-label="Learn more about the public domain"
            >
              {" "}
              Learn more{" "}
            </Button>
          </a>
        </div>
      }
      imageProps={{
        alt: "",
        width: "oneHalf",
        position: "end",
        src: "/pd_banner.png",
      }}
      sx={{ mt: "xxl" }}
    />,
    <FeaturedContent
      isFullWidth={true}
      key={1}
      textContent={
        <div>
          <Heading level="h2" overline="Featured">
            Digital Collections Print Store
          </Heading>
          <p>
            Decorative prints for purchase: choose from archival prints, framed
            art, stretched canvas, vintage wood, and wall murals.
          </p>

          <a
            href="https://nypl.artehouse.com/perl/home.pl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              id="featured-visit-store"
              aria-label="Visit the Digital Collections print store"
            >
              {" "}
              Visit store{" "}
            </Button>
          </a>
        </div>
      }
      imageProps={{
        alt: "",
        width: "oneHalf",
        position: "end",
        src: "/service-artehouse.jpg",
      }}
      sx={{ mt: "xxl" }}
    />,
  ];
  return featuredContentOptions[randomNumber];
};

export default FeaturedContentComponent;
