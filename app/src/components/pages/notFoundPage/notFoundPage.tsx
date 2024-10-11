"use client";
import { Box, Heading, Text, Link } from "@nypl/design-system-react-components";
import PageLayout from "../../pageLayout/pageLayout";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <PageLayout activePage="notFound">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "xxl",
          marginBottom: "xxl",
          marginLeft: "l",
          marginRight: "l",
          textAlign: "center",
        }}
      >
        <Image
          src="/error-img.png"
          alt="Error image"
          width="98"
          height="68"
          style={{ marginBottom: "48px" }}
        />
        <Heading overline="Error 404" level="h3">
          We couldn&apos;t find that page.
        </Heading>
        <Text sx={{ marginBottom: "xl" }}>
          The page you were looking for doesn&apos;t exist or may have moved
          elsewhere.
        </Text>
        <Link type="buttonPrimary" href="/">
          Back to Digital Collections
        </Link>
      </Box>
    </PageLayout>
  );
}
