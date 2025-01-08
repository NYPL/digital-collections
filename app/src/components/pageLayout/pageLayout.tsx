"use client";
import {
  Breadcrumbs,
  DSProvider,
  SkipNavigation,
  Box,
} from "@nypl/design-system-react-components";
import React, { useEffect } from "react";
import { type PropsWithChildren } from "react";
import Header from "../header/header";
import Script from "next/script";
import { BreadcrumbsDataProps } from "@nypl/design-system-react-components/dist/src/components/Breadcrumbs/Breadcrumbs";
import { ADOBE_EMBED_URL } from "../../config/constants";
import { trackVirtualPageView } from "../../utils/utils";
import { FeedbackProvider } from "@/src/context/FeedbackProvider";
import { SearchProvider } from "@/src/context/SearchContext";

interface PageLayoutProps {
  activePage: string;
  breadcrumbs?: BreadcrumbsDataProps[];
  adobeAnalyticsPageName?: string;
}

const PageLayout = ({
  children,
  activePage,
  breadcrumbs,
  adobeAnalyticsPageName,
}: PropsWithChildren<PageLayoutProps>) => {
  // Track page view events to Adobe Analytics
  useEffect(() => {
    trackVirtualPageView(adobeAnalyticsPageName);
  });

  return (
    <>
      {/* <!-- Adobe Analytics  --> */}
      <Script async src={ADOBE_EMBED_URL} />
      <Script id="adobeDataLayerDefinition">
        {`
            // First define the global variable for the entire data layer array
            window.adobeDataLayer = window.adobeDataLayer || [];
            // Then push in the variables required in the Initial Data Layer Definition
            window.adobeDataLayer.push({
              disable_page_view: true
            });
        `}
      </Script>
      {/* <!-- / Adobe Analytics  --> */}
      <DSProvider>
        <SearchProvider>
          <FeedbackProvider>
            <SkipNavigation />
            <Header />
            {activePage === "home" ||
            activePage === "about" ||
            activePage === "notFound" ||
            activePage === "serverError" ? (
              children
            ) : (
              <>
                <Breadcrumbs
                  breadcrumbsType="digitalCollections"
                  breadcrumbsData={breadcrumbs || []}
                  aria-label={activePage}
                />
                {/* TODO: Move to TemplateAppContainer once spacing is more flexible.  --> */}
                <Box
                  id="mainContent"
                  sx={{
                    margin: "auto",
                    maxWidth: "1280px",
                    padding: "64px 16px",
                  }}
                >
                  {children as JSX.Element}
                </Box>
              </>
            )}
          </FeedbackProvider>
        </SearchProvider>
      </DSProvider>
    </>
  );
};

export default PageLayout;
