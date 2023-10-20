// import '@/styles/globals.css'
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { DSProvider } from "@nypl/design-system-react-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DSProvider>
        <Component {...pageProps} />
      </DSProvider>
    </>
  );
}
