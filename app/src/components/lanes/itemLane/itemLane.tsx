"use client";
import {
  Box,
  Flex,
  Heading,
  HorizontalRule,
  Link,
  Pagination,
  SimpleGrid,
  Spacer,
} from "@nypl/design-system-react-components";
import PageLayout from "../../pageLayout/pageLayout";
import { useNumColumns } from "../../../hooks/useNumColumns";
import { useParams, useSearchParams } from "next/navigation";
import { headerBreakpoints } from "../../../utils/breakpoints";
import { slugToString } from "../../../utils/utils";
import CollectionCard from "../../cards/collectionCard";
import { CollectionCardModel } from "../../../models/collectionCard";
import useBreakpoints from "../../../hooks/useBreakpoints";
import CollectionDataType from "../../../types/CollectionDataType";
import ItemCard from "../../cards/itemCard";
import { ItemCardModel } from "../../../models/itemCard";
import React from "react";
import { titleToDCParam, totalNumPages } from "../../../utils/utils";
import { DC_URL } from "@/src/config/constants";

export const ItemLane = ({ data }: any) => {
  const numColumns = useNumColumns();
  const { isLargerThanLargeTablet } = useBreakpoints();
  const divisionName = data.name;
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
            )}`} //TO DO: update with slug
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
        <SimpleGrid
          columns={numColumns}
          sx={{
            gridTemplateColumns: `repeat(${numColumns}, minmax(0, 1fr))`,
          }}
        >
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
        </SimpleGrid>
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
