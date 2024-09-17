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
import CollectionCard from "../cards/collectionCard";
import { CollectionCardModel } from "../../models/collectionCard";
import useBreakpoints from "../../hooks/useBreakpoints";
import CollectionDataType from "../../types/CollectionDataType";
import React, { useRef, useState } from "react";
import { totalNumPages } from "../../utils/utils";
import DCSimpleGrid from "../dcSimpleGrid/dcSimpleGrid";

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
            <CollectionCard
              key={index}
              id={index}
              slug={collectionModel.title}
              collection={collectionModel}
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
