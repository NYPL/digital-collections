import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script id="target-snippet" strategy="beforeInteractive">
          {`
          // prehiding snippet for Adobe Target with asynchronous
          // tags deployment
          ;(function(win, doc, style, timeout) {
            var STYLE_ID = 'at-body-style';
            function getParent() {
                return doc.getElementsByTagName('head')[0];
            }
            function addStyle(parent, id, def) {
                if (!parent) {
                return;
                }
                var style = doc.createElement('style');
                style.id = id;
                style.innerHTML = def;
                parent.appendChild(style);
            }
            function removeStyle(parent, id) {
                if (!parent) {
                return;
                }
                var style = doc.getElementById(id);
                if (!style) {
                return;
                }
                parent.removeChild(style);
            }
            addStyle(getParent(), STYLE_ID, style);
            setTimeout(function() {
                removeStyle(getParent(), STYLE_ID);
            }, timeout);
          }(window, document, "body {opacity: 0 !important}", 2500));
        `}
        </Script>
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
