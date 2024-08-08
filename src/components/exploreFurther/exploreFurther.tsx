import React from "react";
import {
  Box,
  Heading,
  Card,
  CardHeading,
  Link,
  Text,
  CardContent,
  Tooltip,
} from "@nypl/design-system-react-components";
import { ExploreFurtherDataType } from "../../types/ExploreFurtherData";
import exploreFurtherData from "../../data/exploreFurtherData";
import { headerBreakpoints } from "../../utils/breakpoints";
import useBreakpoints from "../../hooks/useBreakpoints";

const ExploreFurther = () => {
  const data: ExploreFurtherDataType[] = exploreFurtherData;
  const { isLargerThanLargeTablet } = useBreakpoints();
  function exploreFurtherLink(item: ExploreFurtherDataType) {
    return (
      <Link
        href={item.url}
        target="_blank"
        rel="noreferrer noopener"
        hasVisitedState
        __css={{
          textDecoration: "none !important",
          _hover: { textDecoration: "underline 1px dotted !important" },
        }}
      >
        {item.title}
      </Link>
    );
  }

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
          <Text size="subtitle2" sx={{ fontWeight: "400" }}>
            Here are some other ways you can access and engage with digital
            content at NYPL and beyond:
          </Text>
        </Box>
        {data.map((item, index) => (
          <Card
            id={`card-id-${index}`}
            key={`card-key-${index}`}
            data-testid={`test-id-${index}`}
            mainActionLink={item.url}
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
              [`@media screen and (min-width: ${headerBreakpoints.smTablet}px)`]:
                {
                  paddingRight: "m",
                },
            }}
          >
            <CardHeading id={`main-heading-${index}`} size="h5" level="h3">
              {isLargerThanLargeTablet ? (
                <Tooltip content={item.title}>
                  {exploreFurtherLink(item)}
                </Tooltip>
              ) : (
                exploreFurtherLink(item)
              )}
            </CardHeading>
            <CardContent>
              <Text size="subtitle2" sx={{ fontWeight: "400" }}>
                {" "}
                {item.description}{" "}
              </Text>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ExploreFurther;
