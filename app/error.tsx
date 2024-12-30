"use client";
import { useEffect } from "react";

import PageLayout from "./src/components/pageLayout/pageLayout";
import ErrorPage from "./src/components/pages/errorPage/errorPage";
import { createAdobeAnalyticsPageName } from "./src/utils/utils";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);

    // // Send error to New Relic
    // if ((window as any).newrelic) {
    //   (window as any).newrelic.noticeError(error);
    // }
  }, [error]);

  return (
    <PageLayout
      activePage="serverError"
      adobeAnalyticsPageName={createAdobeAnalyticsPageName(
        "internal-server-error"
      )}
    >
      <ErrorPage />
    </PageLayout>
  );
}
