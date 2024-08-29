"use client";
import {
  TemplateAppContainer,
  Breadcrumbs,
  DSProvider,
  SkipNavigation,
  useFeedbackBox,
  Box,
} from "@nypl/design-system-react-components";
import React, { useEffect } from "react";
import { type PropsWithChildren } from "react";
import Header from "../header/header";
import NotificationBanner from "../notificationBanner/notificationBanner";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { BreadcrumbsDataProps } from "@nypl/design-system-react-components/dist/src/components/Breadcrumbs/Breadcrumbs";
import { ADOBE_EMBED_URL } from "../../config/constants";
import { trackVirtualPageView } from "../../utils/utils";

interface PageLayoutProps {
  activePage: string;
  breadcrumbs?: BreadcrumbsDataProps[];
  adobeAnalyticsPageName: string;
}

const PageLayout = ({
  children,
  activePage,
  breadcrumbs,
  adobeAnalyticsPageName,
}: PropsWithChildren<PageLayoutProps>) => {
  const pathname = usePathname();
  // Track page view events to Adobe Analytics
  useEffect(() => {
    /*
    "asPath has been removed because the concept of as has been removed from the new router."
    https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration
    */
    const route = pathname || "";
    // console.log("route is: ", route)
    trackVirtualPageView(adobeAnalyticsPageName);
  });

  const [view, setView] = React.useState("form");
  const { isOpen, onClose, FeedbackBox } = useFeedbackBox();
  const onSubmit = async (values: { category: string; comment: string }) => {
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // ...
        setView("confirmation");
      } else {
        setView("error");
      }
    } catch (error) {
      // Reject the promise according to your application.
      // And then call:
      setView("error");
    }
  };

  const onFormClose = () => {
    if (isOpen) {
      onClose();
      setView("form");
    }
  };
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
        <SkipNavigation />
        <NotificationBanner />
        <Header />
        {activePage === "home" || activePage === "about" ? (
          children
        ) : (
          <>
            <Breadcrumbs
              breadcrumbsType="digitalCollections"
              breadcrumbsData={breadcrumbs || []}
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
        <FeedbackBox
          showCategoryField
          onSubmit={onSubmit}
          onClose={onFormClose}
          title="Feedback"
          view={view}
        />
      </DSProvider>
    </>
  );
};

export default PageLayout;
