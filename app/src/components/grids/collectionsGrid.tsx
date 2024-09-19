"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Heading, Pagination } from "@nypl/design-system-react-components";
import { CollectionCardModel } from "../../models/collectionCard";
import useBreakpoints from "../../hooks/useBreakpoints";
import CollectionDataType from "../../types/CollectionDataType";
import React, { useContext, useRef, useState } from "react";
import { totalNumPages } from "../../utils/utils";
import DCSimpleGrid from "../dcSimpleGrid/dcSimpleGrid";
import DCCard from "../cards/DCCard";
import { CardContext } from "../pageLayout/pageLayout";

export const CollectionsGrid = ({ data }: any) => {
  const pathname = usePathname();
  const queryParams = useSearchParams();
  const headingRef = useRef<HTMLHeadingElement>(null);

  const [currentPage, setCurrentPage] = useState(
    Number(queryParams.get("page")) || 1
  );

  const { replace } = useRouter();

  const { isLargerThanLargeTablet } = useBreakpoints();

  const totalPages = totalNumPages(data.numFound, data.perPage);

  const updatePageURL = async (pageNumber: number) => {
    const params = new URLSearchParams();
    params.set("page", pageNumber.toString());
    setCurrentPage(pageNumber);
    const url = `${pathname}?${params.toString()}#${data.slug}`;
    replace(url);
    headingRef.current?.focus;
  };

  const cardContext = useContext(CardContext);

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
        {data?.collections?.map((collection: CollectionDataType, index) => {
          const collectionModel = new CollectionCardModel(collection);
          return (
            <DCCard
              key={index}
              cardRef={cardContext?.cardRef}
              cardOffset={cardContext?.cardOffset}
              id={index}
              slug={collectionModel.title}
              record={collectionModel}
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
