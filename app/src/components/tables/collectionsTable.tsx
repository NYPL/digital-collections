"use client";
import {
  useParams,
  useSearchParams,
  usePathname,
  useRouter,
} from "next/navigation";
import {
  Heading,
  Pagination,
  SimpleGrid,
} from "@nypl/design-system-react-components";
import { useNumColumns } from "../../hooks/useNumColumns";
import CollectionCard from "../cards/collectionCard";
import { CollectionCardModel } from "../../models/collectionCard";
import useBreakpoints from "../../hooks/useBreakpoints";
import CollectionDataType from "../../types/CollectionDataType";
import React, { useEffect } from "react";
import { totalNumPages } from "../../utils/utils";
import { useState } from "react";

export const CollectionsTable = ({ data }: any) => {
  const pathname = usePathname();
  const queryParams = useSearchParams();

  const [currentPage, setCurrentPage] = useState(
    Number(queryParams.get("page")) || 1
  );
  console.log("currentPage is: ", currentPage);

  const { replace } = useRouter();

  const { isLargerThanLargeTablet } = useBreakpoints();
  const numColumns = useNumColumns();

  const totalPages = totalNumPages(data.numFound, data.perPage);

  const updatePageURL = async (pageNumber: number) => {
    const params = new URLSearchParams();
    params.set("page", pageNumber.toString());
    setCurrentPage(pageNumber);
    const url = `${pathname}?${params.toString()}#collections-table`;
    replace(url);
  };

  return (
    <>
      <Heading level="h2" id="collections-table" size="heading3">
        {`Collections in the ${data.name}`}
      </Heading>
      <SimpleGrid
        columns={numColumns}
        sx={{
          marginBottom: "xxl",
          gridTemplateColumns: `repeat(${numColumns}, minmax(0, 1fr))`,
        }}
      >
        {data.collections.map((collection: CollectionDataType, index) => {
          const collectionModel = new CollectionCardModel(collection);
          return (
            <CollectionCard
              key={index}
              id={index}
              slug={collectionModel.title}
              collection={collectionModel}
              isLargerThanLargeTablet={isLargerThanLargeTablet}
            />
          );
        })}
      </SimpleGrid>
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
