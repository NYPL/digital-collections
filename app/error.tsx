"use client";
import PageLayout from "./src/components/pageLayout/pageLayout";
import { useEffect } from "react";
import ErrorPage from "./src/components/pages/errorPage/errorPage";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageLayout activePage="serverError">
      <ErrorPage />
    </PageLayout>
  );
}
