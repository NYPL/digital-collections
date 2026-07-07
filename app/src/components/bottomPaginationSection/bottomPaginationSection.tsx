"use client";

import React from "react";
import { Box, Pagination } from "@nypl/design-system-react-components";
import { headerBreakpoints } from "@/src/utils/breakpoints";
import BackToTopLink from "../backToTopLink/backToTopLink";

type BottomPaginationSectionProps = {
  currentPage: number;
  initialPage: number;
  pageCount: number;
  onPageChange: (newPage: number) => void;
  paginationId?: string;
  rightContent?: React.ReactNode;
};

const BottomPaginationSection = ({
  currentPage,
  initialPage,
  pageCount,
  onPageChange,
  paginationId = "pagination-id",
  rightContent,
}: BottomPaginationSectionProps) => {
  const hasRightContent = Boolean(rightContent);

  return (
    <Box
      marginTop="xxl"
      marginBottom="xxl"
      sx={{
        display: "grid",
        gap: "m",
        gridTemplateColumns: "1fr",
        alignItems: "center",
        [`@media screen and (min-width: ${headerBreakpoints.smTablet}px)`]: {
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        },
        [`@media screen and (min-width: ${headerBreakpoints.desktop}px)`]: {
          gridTemplateColumns: "1fr auto 1fr",
        },
      }}
    >
      <Box
        sx={{
          justifySelf: "center",
          order: 2,
          [`@media screen and (min-width: ${headerBreakpoints.smTablet}px)`]: {
            order: 2,
            gridColumn: hasRightContent ? "auto" : "1 / -1",
            justifySelf: hasRightContent ? "start" : "center",
          },
          [`@media screen and (min-width: ${headerBreakpoints.desktop}px)`]: {
            order: 1,
            gridColumn: "auto",
            justifySelf: "start",
          },
        }}
      >
        <BackToTopLink />
      </Box>

      <Pagination
        id={paginationId}
        initialPage={initialPage}
        currentPage={currentPage}
        pageCount={pageCount}
        onPageChange={onPageChange}
        sx={{
          justifySelf: "center",
          justifyContent: "center",
          order: 1,
          [`@media screen and (min-width: ${headerBreakpoints.smTablet}px)`]: {
            order: 1,
            gridColumn: "1 / -1",
          },
          [`@media screen and (min-width: ${headerBreakpoints.desktop}px)`]: {
            order: 2,
            gridColumn: "auto",
          },
        }}
      />

      {rightContent && (
        <Box
          sx={{
            order: 3,
            justifySelf: "center",
            gridColumn: "1 / -1",
            [`@media screen and (min-width: ${headerBreakpoints.smTablet}px)`]:
              {
                justifySelf: "end",
                gridColumn: "auto",
              },
            [`@media screen and (min-width: ${headerBreakpoints.desktop}px)`]: {
              justifySelf: "end",
              gridColumn: "auto",
            },
          }}
        >
          {rightContent}
        </Box>
      )}
    </Box>
  );
};

export default BottomPaginationSection;
