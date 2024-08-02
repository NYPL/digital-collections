"use client";
import {
  TemplateAppContainer,
  Breadcrumbs,
  DSProvider,
  SkipNavigation,
  useFeedbackBox,
} from "@nypl/design-system-react-components";
import React, { useEffect, useState } from "react";
import { type PropsWithChildren } from "react";
import Header from "../header/header";
import NotificationBanner from "../notificationBanner/notificationBanner";
import { ADOBE_EMBED_URL } from "src/config/constants";
import Script from "next/script";
import { trackVirtualPageView } from "src/utils/utils";
import { usePathname } from "next/navigation";
import { BreadcrumbsDataProps } from "@nypl/design-system-react-components/dist/src/components/Breadcrumbs/Breadcrumbs";
import { Helmet } from "react-helmet";

interface PageLayoutProps {
  activePage: string;
  breadcrumbs?: BreadcrumbsDataProps[];
}

const PageLayout = ({
  children,
  activePage,
  breadcrumbs,
}: PropsWithChildren<PageLayoutProps>) => {
  const [isIOS, setIsIOS] = useState(false);
  useEffect(() => {
    const userAgent = typeof window !== "undefined" && navigator.userAgent;
    if (userAgent && /iPad|iPhone|iPod/.test(userAgent)) {
      setIsIOS(true);
    }
  }, []);
  const viewport = isIOS ? (
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1"
    />
  ) : (
    <meta name="viewport" content="width=device-width" />
  );
  const pathname = usePathname();
  // Track page view events to Adobe Analytics
  useEffect(() => {
    /*
    "asPath has been removed because the concept of as has been removed from the new router."
    https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration
    */
    const route = pathname || "";
    trackVirtualPageView(route);
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
      <Helmet>{viewport}</Helmet>
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
            <TemplateAppContainer contentPrimary={children as JSX.Element} />
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
