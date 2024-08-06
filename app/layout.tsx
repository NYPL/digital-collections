import Script from "next/script";
import React from "react";
import { Metadata, Viewport } from "next";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "NYPL Digital Collections",
  description:
    "NYPL's Digital Collections is a living database featuring prints, photographs, maps, manuscripts, video, and more unique research materials.",
  alternates: {
    canonical: "https://digitalcollections.nypl.org/",
  },
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
    google: "_shbOK1otHA_eFNFgJsOwITZrWQwRg4wr8nmrJPNVDM",
  },
};

export async function generateViewport(): Promise<Viewport> {
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </head>
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
        {children}
        <div id="nypl-footer"></div>
        <Script
          src="https://ds-header.nypl.org/footer.min.js?containerId=nypl-footer"
          async
        ></Script>
      </body>
    </html>
  );
}
