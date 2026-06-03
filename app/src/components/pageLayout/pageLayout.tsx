"use client";
import {
  Breadcrumbs,
  DSProvider,
  SkipNavigation,
  Box,
  useResponsiveSpacing,
} from "@nypl/design-system-react-components";
import React, { Suspense, useEffect, type JSX } from "react";
import { type PropsWithChildren } from "react";
import Header from "../header/header";
import Script from "next/script";
import { FeedbackProvider } from "@/src/context/FeedbackProvider";
import type { SearchParamsType } from "@/search/index/page";
import { SearchProvider } from "@/src/context/SearchProvider";
import type { CollectionSearchParamsType } from "@/collections/[uuid]/page";
import { trackGa4PageView } from "@/src/utils/ga4Utils";
import { AnalyticsDataProvider } from "@/src/context/AnalyticsDataProvider";

interface BreadcrumbsDataProps {
  text: string;
  url: string;
}

interface PageLayoutProps {
  activePage: string;
  breadcrumbs?: BreadcrumbsDataProps[];
  ga4Data?: {
    collection?: string;
    division?: string;
    subcollection?: string;
    contentType?: string;
    resourceType?: string;
  };
  searchParams?: SearchParamsType | CollectionSearchParamsType;
}

const PageLayout = ({
  children,
  activePage,
  breadcrumbs,
  ga4Data,
  searchParams,
}: PropsWithChildren<PageLayoutProps>) => {
  // Track page view events to Google Analytics
  useEffect(() => {
    if (ga4Data) {
      trackGa4PageView(ga4Data);
    }
  });

  const { responsivePadding } = useResponsiveSpacing();

  return (
    <>
      <DSProvider>
        <SearchProvider searchParams={searchParams}>
          <FeedbackProvider>
            <AnalyticsDataProvider data={ga4Data ?? {}}>
              <SkipNavigation />
              <Header />
              {activePage === "home" ||
              activePage === "about" ||
              activePage === "notFound" ||
              activePage === "serverError" ||
              activePage === "search" ? (
                children
              ) : (
                <>
                  <Breadcrumbs
                    variant="digitalCollections"
                    breadcrumbsData={breadcrumbs || []}
                    aria-label={activePage}
                  />
                  {/* TODO: Move to TemplateAppContainer once spacing is more flexible.  --> */}
                  <Box
                    id="mainContent"
                    sx={{
                      margin: "auto",
                      maxWidth: "1280px",
                      paddingLeft: responsivePadding,
                      paddingRight: responsivePadding,
                      paddingTop: "64px",
                      paddingBottom: "64px",
                    }}
                  >
                    {children as JSX.Element}
                  </Box>
                </>
              )}
            </AnalyticsDataProvider>
          </FeedbackProvider>
        </SearchProvider>
      </DSProvider>
    </>
  );
};

export default PageLayout;
