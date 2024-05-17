"use client";
import type { Metadata } from "next";
import Script from "next/script";
import { DSProvider } from "@nypl/design-system-react-components";
import Header from "@/components/header/header";
import { SkipNavigation } from "@nypl/design-system-react-components";
import NotificationBanner from "@/components/notificationBanner/notificationBanner";

// export const metadata: Metadata = {
//   title: "NYPL Digital Collections",

//   description: "Welcome to Next.js",
// };

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DSProvider>
          <Header />
          <SkipNavigation target="#hero" />
          {/**
           * * @TODO: Header will need to be pulled into a reusable Layout component (DC Facelift phase 2)
           * * Let this be @7emansell 's problem if possible **/}
          <NotificationBanner />
          {children}
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
