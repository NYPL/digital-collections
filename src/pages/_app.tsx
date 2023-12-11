// import '@/styles/globals.css'
import type { AppProps } from "next/app";
import Head from "next/head";
import {
  DSProvider,
  useFeedbackBox,
} from "@nypl/design-system-react-components";
import { FeedbackBoxProvider } from "../context/FeedbackBoxContext";
import React, { useEffect, useState, useContext } from "react";
import { FeedbackBoxContext } from "../../src/context/FeedbackBoxContext";

// const [view, setView] = React.useState("form");

// const apiEndpoint = "...";
// const onSubmit = (values) => {
//   fetch(apiEndpoint, {
//     method: "POST",
//     body: JSON.stringify(values),
//   })
//     .then((response) => {
//       if (response.ok) {
//         // ...
//         setView("view");
//       }
//     })
//     .catch((error) => {
//       // Reject the promise according to your application.
//       // And then call:
//       setView("error");
//     });
// };

export default function App({ Component, pageProps }: AppProps) {
  const { onOpen, isOpen, onClose, FeedbackBox } = useFeedbackBox();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DSProvider>
        {/* <FeedbackBoxProvider onOpen={onOpen} FeedbackBox={FeedbackBox}> */}
        <Component {...pageProps} />
        {/* </FeedbackBoxProvider> */}
        <FeedbackBox
          showCategoryField
          // showEmailField
          // onSubmit={onSubmit}
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
          title="Feedback"
          view={view}

          // {...otherProps}
        />
      </DSProvider>
    </>
  );
}
