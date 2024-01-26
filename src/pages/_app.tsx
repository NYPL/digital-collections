// import '@/styles/globals.css'
import type { AppProps } from "next/app";
import Head from "next/head";
import { DSProvider } from "@nypl/design-system-react-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
        <meta name="csrf-param" content="authenticity_token" />
        <meta
          name="csrf-token"
          content="YGD90UPAnu6p7nAVRLc7kYIQ9hBGSuLSphWaMZdj/r/pv9PTpDmiEQwEpy0Cv6CN7emeN6vjQOprMKv/+q3WeA=="
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <DSProvider>
        <Component {...pageProps} />
      </DSProvider>
    </>
  );
}
