"use client";
import { Box, Heading } from "@nypl/design-system-react-components";
import PageLayout from "../../pageLayout/pageLayout";
import Link from "next/link";
import appConfig from "appConfig";
import { ENV_KEY } from "@/src/types/EnvironmentType";

export default function NotFoundPage() {
  return (
    <PageLayout activePage="notFound">
      <Box sx={{ margin: "xl" }}>
        <Heading level="h1">404 Not Found</Heading>
        <p>We&apos;re sorry...</p>
        <p>The page you were looking for doesn&apos;t exist.</p>
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
