"use client";
import { Box, Heading } from "@nypl/design-system-react-components";
import Link from "next/link";
import PageLayout from "./src/components/pageLayout/pageLayout";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <PageLayout activePage="serverError">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "xl",
          textAlign: "center",
        }}
      >
        <Heading level="h1">{error.message}</Heading>
        <p>We&apos;re sorry...</p>
        <p>Something went wrong.</p>
        <p>
          Return to <Link href={"/"}>Digital Collections</Link>.
        </p>
      </Box>
    </PageLayout>
  );
}
