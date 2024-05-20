import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout/layout";
import { Heading } from "@nypl/design-system-react-components";
import { breadcrumbsContext } from "../breadcrumbsContext";

const Collection = () => {
  const { breadcrumbs, setBreadcrumbs } = useContext(breadcrumbsContext);
  useEffect(() => {
    setBreadcrumbs({ text: "A Collection", url: "/collections/collection" });
  }, []);
  return (
    <Layout activePage="collection" breadcrumbs={breadcrumbs}>
      <Heading>
        <>Collection</>
      </Heading>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  //const response = await fetch(`/api/featuredItem`);
  //const responseData = await response.json();
  let breadcrumbs = [
    { text: "Home", url: "/" },
    { text: "Collections", url: "/collcetions" },
    { text: "A Collection", url: "/collections/collection" },
  ];
  return {
    props: {
      breadcrumbs,
    },
  };
};

export default Collection;
