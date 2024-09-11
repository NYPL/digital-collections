"use client";
import { Box, Heading } from "@nypl/design-system-react-components";
import Link from "next/link";
import PageLayout from "./src/components/pageLayout/pageLayout";

export default function Error() {
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
        <Heading level="h1">500 Error</Heading>
        <p>We&apos;re sorry...</p>
        <p>Something went wrong.</p>
        <p>
          Return to <Link href={"/"}>Digital Collections</Link>.
        </p>
      </Box>
    </PageLayout>
  );
}
