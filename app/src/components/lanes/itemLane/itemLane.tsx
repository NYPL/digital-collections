"use client";
import {
  Box,
  Flex,
  Heading,
  Link,
  Spacer,
  Icon,
} from "@nypl/design-system-react-components";
import useBreakpoints from "../../../hooks/useBreakpoints";
import ItemCard from "../../cards/itemCard";
import { ItemCardModel } from "../../../models/itemCard";
import React from "react";
import { titleToDCParam, totalNumPages } from "../../../utils/utils";
import { DC_URL } from "@/src/config/constants";
import DCSimpleGrid from "../../dcSimpleGrid/dcSimpleGrid";
import { headerBreakpoints } from "@/src/utils/breakpoints";

export const ItemLane = ({ data }: any) => {
  const { isLargerThanLargeTablet } = useBreakpoints();
  const divisionName = data.name;
  return (
    <>
      <Box>
        <Flex alignItems="baseline">
          <Heading
            id={`row-heading-items-in-${divisionName}`}
            sx={{
              [`@media screen and (min-width: ${headerBreakpoints.smTablet}px)`]:
                {
                  width: "90%",
                },
            }}
            level="h2"
            size="heading3"
          >
            {/* <Heading level="h2" size="heading3"> */}
            {`Items in the ${divisionName}`}
          </Heading>
          <Spacer />
          <Link
            id={`row-see-more-items-${divisionName}`}
            type="standalone"
            href={`${DC_URL}/search/index?filters[divisionFullname_mtxt_s][]=${titleToDCParam(
              divisionName
            )}`}
            aria-label={`See more items in ${divisionName}`}
            isUnderlined={false}
            hasVisitedState
            __css={{
              paddingLeft: "l",
              marginBottom: "s",
              whiteSpace: "nowrap",
              justifyContent: "flex-end",
              display: "none",
              " > svg": {
                fill: "ui.link.primary",
              },
              [`@media screen and (min-width: ${headerBreakpoints.smTablet}px)`]:
                {
                  display: "inline",
                },
              color: "ui.link.primary",
              fontWeight: "medium",
              alignSelf: "end",
              _hover: {
                textDecoration: "underline 1px dotted !important",
                textUnderlineOffset: "2px",
                "> svg": { fill: "ui.link.secondary" },
              },
              _visited: { "> svg": { fill: "ui.link.tertiary" } },
            }}
          >
            See more
          </Link>
        </Flex>
        <DCSimpleGrid>
          {data?.items?.map((item, index) => {
            const itemModel = new ItemCardModel(item);
            return (
              <ItemCard
                key={index}
                id={`item-${index}-${item.title}`}
                item={itemModel}
                isLargerThanLargeTablet={isLargerThanLargeTablet}
              />
            );
          })}
        </DCSimpleGrid>
        <Link
          id={`row-see-more-items-mobile-${divisionName}`}
          type="standalone"
          href={`#`}
          aria-label={`See more items in ${divisionName}`}
          className="smlink"
          hasVisitedState
          __css={{
            display: "flex",
            [`@media screen and (min-width: ${headerBreakpoints.smTablet}px)`]:
              {
                display: "none",
              },
            fontWeight: "medium",
            justifyContent: "flex-end",
            marginTop: "s",
            alignItems: "center",
            "& svg": {
              marginTop: "1px",
            },
          }}
        >
          See more
        </Link>
      </Box>
    </>
  );
};
