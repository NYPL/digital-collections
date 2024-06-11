"use client";
import type { Metadata } from "next";
import Script from "next/script";
import { DSProvider } from "@nypl/design-system-react-components";
import Header from "./components/header/header";
import {
  SkipNavigation,
  useFeedbackBox,
} from "@nypl/design-system-react-components";
import NotificationBanner from "./components/notificationBanner/notificationBanner";
import { ADOBE_EMBED_URL } from "./config/constants";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { trackVirtualPageView } from "./utils/utils";
import React from "react";
import Head from "next/head";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log("pathname before use effect is", pathname);
  const [view, setView] = useState("form");
  const { onOpen, isOpen, onClose, FeedbackBox } = useFeedbackBox();
  const onSubmit = async (values) => {
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

  // Track page view events to Adobe Analytics
  useEffect(() => {
    /* 
    "asPath has been removed because the concept of as has been removed from the new router." 
    https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration
    */
    // trackVirtualPageView(router.asPath);
    console.log("pathname", pathname);
    const route = pathname ? pathname : "";
    trackVirtualPageView(route);
  });

  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>NYPL Digital Collections</title>
      <link rel="canonical" href="https://digitalcollections.nypl.org/" />
      <meta
        name="description"
        content="NYPL's Digital Collections is a living database featuring prints, photographs, maps, manuscripts, video, and more unique research materials."
      />
      <meta
        property="og:image"
        content="https://digitalcollections.nypl.org/featured_items/ps_mss_831.jpg"
      />
      <meta property="og:title" content="NYPL Digital Collections" />
      <meta
        property="og:description"
        content="Explore hundreds of thousands of digital items from The New York Public Library."
      />
      <meta property="og:url" content="https://digitalcollections.nypl.org/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="NYPL Digital Collections" />
      <meta name="twitter:url" content="https://digitalcollections.nypl.org/" />
      <meta name="twitter:title" content="NYPL Digital Collections" />
      <meta
        name="twitter:description"
        content="Explore hundreds of thousands of digital items from The New York Public Library."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://digitalcollections.nypl.org/featured_items/ps_mss_831.jpg"
      />
      <meta name="twitter:site" content="@nypl" />
      <meta name="twitter:creator" content="@nypl" />
      <meta
        name="google-site-verification"
        content="_shbOK1otHA_eFNFgJsOwITZrWQwRg4wr8nmrJPNVDM"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <body>
        {/* <!-- OptinMonster --> */}
        {/* <!-- This site is converting visitors into subscribers and customers with OptinMonster - https://optinmonster.com --> */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(d,u,ac){var s=d.createElement('script');s.type='text/javascript';s.src='https://a.omappapi.com/app/js/api.min.js';s.async=true;s.dataset.user=u;s.dataset.account=ac;d.getElementsByTagName('head')[0].appendChild(s);})(document,12468,1044);",
          }}
        />
        {/* <!-- / OptinMonster --> */}
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
          <NotificationBanner />
          <Header />
          <SkipNavigation target="#hero" />
          {/**
           * * @TODO: Header will need to be pulled into a reusable Layout component (DC Facelift phase 2)
           * * Let this be @7emansell 's problem if possible **/}
          {children}
          <FeedbackBox
            showCategoryField
            onSubmit={onSubmit}
            onClose={onFormClose}
            title="Feedback"
            view={view}
          />
        </DSProvider>
        <div id="nypl-footer"></div>
        <Script
          src="https://ds-header.nypl.org/footer.min.js?containerId=nypl-footer"
          async
        ></Script>
      </body>
    </html>
  );
}
