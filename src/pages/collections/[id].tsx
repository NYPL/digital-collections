import { useContext, useEffect } from "react";
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

// Imagine an API call somewhere in here
export const getServerSideProps = async () => {
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
