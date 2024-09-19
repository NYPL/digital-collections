"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Heading, Pagination } from "@nypl/design-system-react-components";
import CollectionCard from "../cards/collectionCard";
import { CollectionCardModel } from "../../models/collectionCard";
import useBreakpoints from "../../hooks/useBreakpoints";
import CollectionDataType from "../../types/CollectionDataType";
import React, { useRef, useState } from "react";
import { totalNumPages } from "../../utils/utils";
import DCSimpleGrid from "../dcSimpleGrid/dcSimpleGrid";
import ItemCard from "../cards/itemCard";
import { ItemCardModel } from "../../models/itemCard";
import ItemDataType from "../../types/ItemDataType";
import { CARDS_PER_PAGE } from "@/src/config/constants";
export const ItemsGrid = ({ data }: any) => {
  const pathname = usePathname();
  const queryParams = useSearchParams();
  const headingRef = useRef<HTMLHeadingElement>(null);

  const [currentPage, setCurrentPage] = useState(
    Number(queryParams.get("page")) || 1
  );

  const { replace } = useRouter();

  const { isLargerThanLargeTablet } = useBreakpoints();

  const totalPages = totalNumPages(
    data.numFound || data.length,
    data.perPage || CARDS_PER_PAGE
  );

  const updatePageURL = async (pageNumber: number) => {
    const params = new URLSearchParams();
    params.set("page", pageNumber.toString());
    setCurrentPage(pageNumber);
    const url = `${pathname}?${params.toString()}#${data.slug}`;
    replace(url);
    headingRef.current?.focus;
  };

  return (
    <>
      <Heading
        ref={headingRef}
        tabIndex={0}
        level="h2"
        id={data.slug}
        size="heading3"
        style={{ width: "fit-content" }}
      >
        {`Collections in the ${data.name}`}
      </Heading>
      <DCSimpleGrid>
        {data?.items?.map((item: ItemDataType, index) => {
          const itemModel = new ItemCardModel(item);
          return (
            <ItemCard
              key={index}
              id={index}
              item={item}
              isLargerThanLargeTablet={isLargerThanLargeTablet}
            />
          );
        })}
      </DCSimpleGrid>
      {totalPages > 1 && (
        <Pagination
          id="pagination-id"
          initialPage={currentPage}
          currentPage={currentPage}
          pageCount={totalPages}
          onPageChange={updatePageURL}
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "s",
          }}
        />
      )}
    </>
  );
};
