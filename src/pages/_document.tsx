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
        {/* <!-- This site is converting visitors into subscribers and customers with OptinMonster - https://optinmonster.com --> */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(d,u,ac){var s=d.createElement('script');s.type='text/javascript';s.src='https://a.omappapi.com/app/js/api.min.js';s.async=true;s.dataset.user=u;s.dataset.account=ac;d.getElementsByTagName('head')[0].appendChild(s);})(document,12468,1044);",
          }}
        />
        {/* <!-- / https://optinmonster.com --> */}
      </body>
    </Html>
  );
}
