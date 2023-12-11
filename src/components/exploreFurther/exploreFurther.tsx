import React from "react";
import {
  Box,
  Heading,
  Card,
  CardHeading,
  Link,
} from "@nypl/design-system-react-components";
import { ExploreFurtherData } from "@/types/ExploreFurtherData";
import exploreFurtherData from "@/data/exploreFurtherData";
import { headerBreakpoints } from "@/utils/breakpoints";

const ExploreFurther = () => {
  const data: ExploreFurtherData[] = exploreFurtherData;

  return (
    <Box
      sx={{
        marginTop: "xxl",
        backgroundColor: "var(--nypl-colors-ui-bg-default)",
      }}
    >
      <Box
        data-testid="explore-further"
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "1280px",
          mx: "auto",
          alignContent: "center",
          paddingLeft: "s",
          paddingRight: "s",
          paddingTop: "xxl",
          paddingBottom: { base: "l", md: "xxl" },
        }}
      >
        <Box sx={{ paddingBottom: "s" }}>
          <Heading
            size="heading3"
            text="Explore further"
            subtitle="Here are some other ways you can access and engage with digital content at NYPL and beyond:"
          />
        </Box>
        {data.map((item, index) => (
          <Card
            id={`card-id-${index}`}
            key={`card-key-${index}`}
            imageProps={{
              alt: `${item.imgAlt}`,
              aspectRatio: "sixteenByNine",
              component: undefined,
              isAtEnd: false,
              isLazy: true,
              size: "default",
              src: `/${item.image}`,
            }}
            layout="row"
            sx={{
              alignItems: "center",
              [`@media screen and (min-width: 0px)`]: {
                paddingBottom: "s",
              },
              [`@media screen and (min-width: ${headerBreakpoints.smTablet})`]:
                {
                  paddingBottom: "l",
                },
            }}
          >
            <CardHeading
              id={`main-heading-${index}`}
              size="h5"
              level="h3"
              subtitle={item.description}
            >
              <Link
                href={item.url}
                target="_blank"
                rel="noreferrer noopener"
                sx={{
                  textDecoration: "none !important",
                }}
              >
                {item.title}
              </Link>
            </CardHeading>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ExploreFurther;
