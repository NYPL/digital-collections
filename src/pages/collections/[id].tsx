import Layout from "@/components/layout/layout";

import { Heading } from "@nypl/design-system-react-components";
import Head from "next/head";

export default function Collection() {
  return (
    <>
      <Head>
        <title>Collection</title>
        <meta property="og:title" content="All Collections" key="title" />
      </Head>
      <Layout
        activePage="collection"
        breadcrumbs={[
          { text: "Collections", url: "/collections" },
          { text: "I am one Collection", url: "/collections/hello" },
        ]}
      >
        <Heading> I am one Collection </Heading>
      </Layout>
    </>
  );
}
