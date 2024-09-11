"use client";
import { Box, Heading } from "@nypl/design-system-react-components";
import appConfig from "appConfig";
import Link from "next/link";
import PageLayout from "./src/components/pageLayout/pageLayout";
import { ENV_KEY } from "./src/types/EnvironmentType";

export default function Error() {
  return (
    <PageLayout activePage="serverError">
      <Box sx={{ margin: "xl" }}>
        <Heading level="h1">500 Error</Heading>
        <p>We&apos;re sorry...</p>
        <p>Something went wrong.</p>
        <p>
          Return to{" "}
          <Link href={appConfig.DC_URL[appConfig.environment as ENV_KEY]}>
            Digital Collections
          </Link>
          .
        </p>
      </Box>
    </PageLayout>
  );
}
