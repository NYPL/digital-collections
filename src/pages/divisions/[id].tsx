import { useContext, useEffect } from "react";
import Layout from "@/components/layout/layout";
import {
  Card,
  CardContent,
  CardHeading,
  Heading,
  Link,
} from "@nypl/design-system-react-components";
import { breadcrumbsContext } from "../breadcrumbsContext";

const Division = () => {
  const { breadcrumbs, setBreadcrumbs } = useContext(breadcrumbsContext);
  useEffect(() => {
    setBreadcrumbs({ text: "A Division", url: "/divisions/division" });
  }, []);
  return (
    <Layout activePage="division" breadcrumbs={breadcrumbs}>
      <Heading>
        <>Division</>
      </Heading>
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
          I am division
        </CardHeading>
        <CardContent>
          <Link href="/divisions/goodbye">Go to another division</Link>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Division;
