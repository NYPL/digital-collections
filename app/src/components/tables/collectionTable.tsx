"use client";
import {
  useParams,
  useSearchParams,
  usePathname,
  useRouter,
} from "next/navigation";
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
import PageLayout from "../pageLayout/pageLayout";
import { useNumColumns } from "../../hooks/useNumColumns";
import { headerBreakpoints } from "../../utils/breakpoints";
import { slugToString } from "../../utils/utils";
import CollectionCard from "../../components/cards/collectionCard";
import { CollectionCardModel } from "../../models/collectionCard";
import useBreakpoints from "../../hooks/useBreakpoints";
import CollectionDataType from "../../types/CollectionDataType";
import ItemCard from "../../components/cards/itemCard";
import { ItemCardModel } from "../../models/itemCard";
import React, { useEffect } from "react";
import { titleToDCParam, totalNumPages } from "../../utils/utils";
import { DC_URL } from "@/src/config/constants";

export const CollectionsTable = async ({ data }: any, currentPage: number) => {
  const params = useParams();
  const queryParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const { isLargerThanLargeTablet } = useBreakpoints();
  const numColumns = useNumColumns();

  // const [currentPage, setCurrentPage] = useState(currentPage);

  // useEffect(() => {
  //   setIsLoaded(true);
  // }, []);

  // const slug = params.slug as string;
  // const title = slugToString(slug);
  // const pageName = `divisions|${slug}`;
  // console.log("data.perPage is: ",data.perPage )
  const totalPages = totalNumPages(data.numFound, data.perPage);
  // console.log("data is: ", data);
  const page = Number(queryParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    console.log("pageNumber is", pageNumber);
    const params = new URLSearchParams();
    // params.set('page', '1');
    params.set("page", pageNumber.toString());
    const url = `${pathname}?${params.toString()}`;
    replace(url);
    // `${pathname}?${params.toString()}`;
  };

  // const createQueryString = useCallback(
  //   (pageNumber: number | string) => {
  //     const params = new URLSearchParams(searchParams.toString())
  //     params.set(name, value)

  //     return params.toString()
  //   },
  //   [searchParams]
  // )

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
      <Pagination
        id="pagination-id"
        // initialPage={1}
        // getPageHref={createPageURL}
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
