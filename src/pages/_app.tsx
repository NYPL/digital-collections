// import '@/styles/globals.css'
import type { AppProps } from "next/app";
import Head from "next/head";
import {
  DSProvider,
  useFeedbackBox,
} from "@nypl/design-system-react-components";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [view, setView] = React.useState("form");
  const { onOpen, isOpen, onClose, FeedbackBox } = useFeedbackBox();
  const onSubmit = async (values) => {
    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        console.log("response is: ", response);

        if (response.ok) {
          // ...
          setView("confirmation");
        } else {
          setView("error");
        }
      })
      .catch((error) => {
        // Reject the promise according to your application.
        // And then call:
        console.log("error is: ", error);
        setView("error");
      });
  };
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
          view={view}
        />
      </DSProvider>
    </>
  );
}
