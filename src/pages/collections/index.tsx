import { useContext, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/layout/layout";
import {
  Card,
  CardContent,
  CardHeading,
  Heading,
} from "@nypl/design-system-react-components";
import { breadcrumbsContext } from "../breadcrumbsContext";

export default function Collections() {
  const { breadcrumbs, setBreadcrumbs } = useContext(breadcrumbsContext);
  useEffect(() => {
    setBreadcrumbs({ text: "All Collections", url: "/collections" });
  }, []);
  return (
    <>
      <Head>
        <title>All Collections</title>
        <meta property="og:title" content="All Collections" key="title" />
      </Head>
      <Layout activePage="collections" breadcrumbs={breadcrumbs}>
        <Heading>All Collections</Heading>
        <Card
          width="500px"
          imageProps={{
            alt: "",
            isLazy: true,
            aspectRatio: "twoByOne",
            src: "pd_banner.png",
          }}
        >
          <CardHeading level="h3" size="heading5">
            I am one collection
          </CardHeading>
          <CardContent>
            <Link href="/collections/hello">Go to collection page</Link>
          </CardContent>
        </Card>
        <Card
          width="500px"
          imageProps={{
            alt: "",
            isLazy: true,
            aspectRatio: "twoByOne",
            src: "pd_banner.png",
          }}
        >
          <CardHeading level="h3" size="heading5">
            I am another collection
          </CardHeading>
          <CardContent>
            <Link href="/collections/hello2">Go to collection page</Link>
          </CardContent>
        </Card>
      </Layout>
    </>
  );
}
