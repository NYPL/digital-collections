"use client";
import {
  Box,
  Flex,
  Heading,
  Link,
  Spacer,
} from "@nypl/design-system-react-components";
import useBreakpoints from "../../../hooks/useBreakpoints";
import { ItemCardModel } from "../../../models/itemCard";
import React, { useRef } from "react";
import { titleToDCParam } from "../../../utils/utils";
import { DC_URL } from "@/src/config/constants";
import DCSimpleGrid from "../../dcSimpleGrid/dcSimpleGrid";
import DCCard from "../../dcCard/DCCard";
import { useTooltipOffset } from "@/src/hooks/useTooltipOffset";

export const ItemLane = ({ data }: any) => {
  const { isLargerThanLargeTablet } = useBreakpoints();
  const divisionName = data.name;
  const cardRef = useRef<HTMLDivElement>(null);
  const cardOffset = useTooltipOffset(cardRef);
  return (
    <>
      <Box>
        <Flex alignItems="baseline">
          <Heading level="h2" size="heading3">
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
            hasVisitedState
            __css={{
              display: { sm: "none", md: "inline" },
              color: "ui.primary.link",
              fontWeight: "500 !important",
              alignItems: "center",
              _hover: { textDecoration: "underline 1px dotted !important" },
            }}
          >
            See more
          </Link>
        </Flex>
        <DCSimpleGrid>
          {data?.items?.map((item, index) => {
            const itemModel = new ItemCardModel(item);
            return (
              <DCCard
                key={index}
                id={`item-${index}-${item.title}`}
                record={itemModel}
                isLargerThanLargeTablet={isLargerThanLargeTablet}
                cardOffset={cardOffset}
                cardRef={cardRef}
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
            display: { sm: "flex", md: "none" },
            fontWeight: "regular",
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
