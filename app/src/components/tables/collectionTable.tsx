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
import CollectionCard from "../../components/cards/collectionCard";
import { CollectionCardModel } from "../../models/collectionCard";
import useBreakpoints from "../../hooks/useBreakpoints";
import CollectionDataType from "../../types/CollectionDataType";
import React, { useEffect } from "react";
import { totalNumPages } from "../../utils/utils";
import { useState } from "react";

export const CollectionsTable = ({ data }: any, setCollections) => {
  const pathname = usePathname();
  const queryParams = useSearchParams();

  // const [collections, setCollections] = useState(data.collections);
  const [currentPage, setCurrentPage] = useState(
    Number(queryParams.get("page")) || 1
  );
  console.log("currentPage is: ", currentPage);

  const { replace } = useRouter();

  const { isLargerThanLargeTablet } = useBreakpoints();
  const numColumns = useNumColumns();

  const totalPages = totalNumPages(data.numFound, data.perPage);

  const createPageURL = (pageNumber: number) => {
    console.log("pageNumber is", pageNumber);
    const params = new URLSearchParams();
    // const newPageNumber = pageNumber.toString()
    params.set("page", pageNumber.toString());
    setCurrentPage(pageNumber);
    updateCollections();
    // console.log("currentPage after updating params is: ", currentPage)
    const url = `${pathname}?${params.toString()}`;
    replace(url);
  };

  return (
    <>
      <Heading level="h2" size="heading3">
        {`Collections in the ${data.name}`}
      </Heading>
      <SimpleGrid
        columns={numColumns}
        sx={{
          marginBottom: "xxl",
          gridTemplateColumns: `repeat(${numColumns}, minmax(0, 1fr))`,
        }}
      >
        {collections.map((collection: CollectionDataType, index) => {
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
      <Pagination
        id="pagination-id"
        initialPage={currentPage}
        currentPage={currentPage}
        pageCount={totalPages}
        onPageChange={createPageURL}
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "s",
        }}
      />
    </>
  );
};
