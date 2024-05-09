import HomePageMainContent from "@/components/homePageMainContent/homePageMainContent";
import Layout from "@/components/layout/layout";

import {
  Card,
  CardContent,
  CardHeading,
  Heading,
  Link,
} from "@nypl/design-system-react-components";
import Head from "next/head";

export default function Collections() {
  return (
    <>
      <Head>
        <title>All Collections</title>
        <meta property="og:title" content="All Collections" key="title" />
      </Head>
      <Layout
        activePage="collections"
        breadcrumbs={[{ text: "Collections", url: "/collections" }]}
      >
        <Heading> All Collections </Heading>
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
            {" "}
            I am one collection{" "}
          </CardHeading>
          <CardContent>
            <Link href="/collections/collection"> Go to collection page </Link>
          </CardContent>
        </Card>
      </Layout>
    </>
  );
}
