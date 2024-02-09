// import '@/styles/globals.css'
import type { AppProps } from "next/app";
import Head from "next/head";
import {
  DSProvider,
  useFeedbackBox,
} from "@nypl/design-system-react-components";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import { trackVirtualPageView } from "../utils/utils";
import appConfig from "../../appConfig";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [view, setView] = React.useState("form");
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

      console.log("response is: ", response);

      if (response.ok) {
        // ...
        setView("confirmation");
      } else {
        setView("error");
      }
    } catch (error) {
      // Reject the promise according to your application.
      // And then call:
      console.log("error is: ", error);
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
    console.log("appConfig.adobeEmbedUrl: ", appConfig.adobeEmbedUrl);
    console.log("appConfig.environment", appConfig.environment);
    trackVirtualPageView(router.asPath);
  });

  return (
    <>
      <Script async src={appConfig.adobeEmbedUrl[appConfig.environment]} />
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>NYPL Digital Collections</title>
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
        <meta
          property="og:url"
          content="https://digitalcollections.nypl.org/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="NYPL Digital Collections" />
        <meta
          name="twitter:url"
          content="https://digitalcollections.nypl.org/"
        />
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
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <DSProvider>
        <Component {...pageProps} />
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
}
