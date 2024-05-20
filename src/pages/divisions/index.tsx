import { useContext, useEffect, useState } from "react";
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

export default function Divisions() {
  const { breadcrumbs, setBreadcrumbs } = useContext(breadcrumbsContext);
  useEffect(() => {
    setBreadcrumbs({ text: "All Divisions", url: "/divisions" });
  }, []);
  return (
    <>
      <Head>
        <title>All Collections</title>
        <meta property="og:title" content="All Divisions" key="title" />
      </Head>
      <Layout activePage="divisions" breadcrumbs={breadcrumbs}>
        <Heading>All Divisions</Heading>
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
            I am one division
          </CardHeading>
          <CardContent>
            <Link href="/divisions/hello">Go to division page</Link>
          </CardContent>
        </Card>
      </Layout>
    </>
  );
}
