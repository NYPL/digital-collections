"use client";
import {
  Flex,
  Heading,
  Text,
  Link,
} from "@nypl/design-system-react-components";
import PageLayout from "../../pageLayout/pageLayout";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <PageLayout activePage="notFound">
      <Flex
        flexDir="column"
        marginTop="xxl"
        marginBottom="xxl"
        marginLeft="l"
        marginRight="l"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Image
          src="/error-img.png"
          alt="Error image"
          width="98"
          height="68"
          style={{ marginBottom: "48px" }}
        />
        <Text size="overline1">ERROR 404</Text>
        <Heading level="h3">We couldn&apos;t find that page.</Heading>
        <Text sx={{ marginBottom: "xxl" }}>
          The page you were looking for doesn&apos;t exist or may have moved
          elsewhere.
        </Text>
        <Link type="buttonPrimary" href="/">
          Back to Digital Collections
        </Link>
      </Flex>
    </PageLayout>
  );
}
