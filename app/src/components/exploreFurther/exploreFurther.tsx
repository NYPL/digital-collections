import React from "react";
import {
  Box,
  Heading,
  Card,
  CardHeading,
  Text,
  CardContent,
} from "@nypl/design-system-react-components";
import { ExploreFurtherDataType } from "../../types/ExploreFurtherDataType";
import exploreFurtherData from "../../data/exploreFurtherData";
import { headerBreakpoints } from "../../utils/breakpoints";
import Image from "next/image";

const ExploreFurther = () => {
  const data: ExploreFurtherDataType[] = exploreFurtherData;

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
              component: (
                <div>
                  <Image
                    src={`/${item.image}`}
                    alt={""}
                    width={225}
                    height={126}
                    sizes="(max-width: 600px) 100vw, 25vw"
                    style={{
                      width: "100%",
                      minHeight: "100%",
                    }}
                  />
                </div>
              ),
              isAtEnd: false,
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
              {item.title}
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
