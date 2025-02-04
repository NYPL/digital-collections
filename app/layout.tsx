import React from "react";
import newrelic from "newrelic";
import { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";

import "./globals.css";

export const metadata: Metadata = {
  title: "NYPL Digital Collections",
  description:
    "NYPL's Digital Collections is a living database featuring prints, photographs, maps, manuscripts, video, and more unique research materials.",
  openGraph: {
    title: "NYPL Digital Collections",
    description:
      "Explore hundreds of thousands of digital items from The New York Public Library.",
    url: "https://digitalcollections.nypl.org/",
    type: "website",
    siteName: "NYPL Digital Collections",
    images: [
      {
        url: "https://digitalcollections.nypl.org/featured_items/ps_mss_831.jpg",
        width: 1200,
        height: 630,
        alt: "NYPL Digital Collections",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nypl",
    creator: "@nypl",
    title: "NYPL Digital Collections",
    description:
      "Explore hundreds of thousands of digital items from The New York Public Library.",
    images: [
      "https://digitalcollections.nypl.org/featured_items/ps_mss_831.jpg",
    ],
  },
  verification: {
    google: "oLXa8JvslCKNxtg-fzL1aL8Q_yNmWvxExwaGs8UgyRM",
  },
};

export async function generateViewport() {
  const userAgent = headers().get("user-agent");
  const isiPhone = /iphone/i.test(userAgent ?? "");

  return isiPhone
    ? {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
        userScalable: false,
      }
    : {};
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Not ideal but `any` for now.
  const newRelicTyped: any = newrelic;
  // Track data for New Relic Browser
  if (newRelicTyped?.agent?.collector?.isConnected() === false) {
    await new Promise((resolve) => {
      newRelicTyped?.agent?.on("connected", resolve);
    });
  }
  const browserTimingHeader = newRelicTyped?.getBrowserTimingHeader({
    hasToRemoveScriptWrapper: true,
    allowTransactionlessInjection: true,
  });

  return (
    <html lang="en">
      <head>
        <script src="https://unpkg.com/react-scan/dist/auto.global.js"></script>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </head>
      <body>
        {/* <!-- OptinMonster --> */}
        {/* <!-- This site is converting visitors into subscribers and customers with OptinMonster - https://optinmonster.com --> */}
        <Script
          id="optinmonster"
          dangerouslySetInnerHTML={{
            __html:
              "(function(d,u,ac){var s=d.createElement('script');s.type='text/javascript';s.src='https://a.omappapi.com/app/js/api.min.js';s.async=true;s.dataset.user=u;s.dataset.account=ac;d.getElementsByTagName('head')[0].appendChild(s);})(document,12468,1044);",
          }}
        />
        {/* <!-- / OptinMonster --> */}
        {children}
        <div id="nypl-footer"></div>
        <Script
          src="https://ds-header.nypl.org/footer.min.js?containerId=nypl-footer"
          async
        ></Script>
        <Script
          id="nr-browser-agent"
          // By setting the strategy to "beforeInteractive" we guarantee that
          // the script will be added to the document's `head` element.
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: browserTimingHeader }}
        />
      </body>
    </html>
  );
}
