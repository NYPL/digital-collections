// import '@/styles/globals.css'
import type { AppProps } from "next/app";
import Head from "next/head";
import {
  DSProvider,
  useFeedbackBox,
} from "@nypl/design-system-react-components";
import React from "react";

const onSubmit = async (values) => {
  const response = await fetch("/api/feedback", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
};

export default function App({ Component, pageProps }: AppProps) {
  const { onOpen, isOpen, onClose, FeedbackBox } = useFeedbackBox();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DSProvider>
        <Component {...pageProps} />
        <FeedbackBox
          showCategoryField
          onSubmit={onSubmit}
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
          title="Feedback"
        />
      </DSProvider>
    </>
  );
}
