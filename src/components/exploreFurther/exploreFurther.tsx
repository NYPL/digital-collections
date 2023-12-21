import React from "react";
import {
  Box,
  Heading,
  Card,
  CardHeading,
  Link,
  Text,
  CardContent,
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
          paddingBottom: { base: "s", md: "l" },
        }}
      >
        <Box sx={{ paddingBottom: "s" }}>
          <Heading size="heading3" text="Explore further" />
          <Text
            sx={{
              fontSize: "16px",
              lineHeight: "140%",
              fontWeight: "400",
              color: "ui.typography-body",
              marginTop: "-xs",
            }}
          >
            Here are some other ways you can access and engage with digital
            content at NYPL and beyond:
          </Text>
        </Box>
        {data.map((item, index) => (
          <Card
            id={`card-id-${index}`}
            key={`card-key-${index}`}
            imageProps={{
              alt: "",
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
              paddingBottom: "l",
              [`@media screen and (min-width: ${headerBreakpoints.smTablet})`]:
                {
                  paddingRight: "m",
                },
            }}
          >
            <CardHeading id={`main-heading-${index}`} size="h5" level="h3">
              <Link
                href={item.url}
                target="_blank"
                rel="noreferrer noopener"
                color="#0069BF"
                sx={{
                  color: "#0069BF !important",
                  ":visited": {
                    color: "var(--nypl-colors-ui-link-tertiary) !important",
                  },
                  textDecoration: "none !important",
                }}
              >
                {item.title}
              </Link>
            </CardHeading>
            <CardContent>
              <Text
                sx={{
                  fontSize: "16px",
                  lineHeight: "140%",
                  fontWeight: "400",
                  color: "ui.typography-body",
                }}
              >
                {item.description}
              </Text>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ExploreFurther;
