import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <div id="nypl-footer"></div>
        <Script
          src="https://ds-header.nypl.org/footer.min.js?containerId=nypl-footer"
          async
          strategy="beforeInteractive"
        ></Script>
      </body>
    </Html>
  );
}
