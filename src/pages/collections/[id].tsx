import Layout from "@/components/layout/layout";
import { Heading } from "@nypl/design-system-react-components";

const Collection = ({ breadcrumbs }) => {
  // const { breadcrumbs, setBreadcrumbs } = useContext(breadcrumbsContext);
  // useEffect(() => {
  //   setBreadcrumbs({ text: "A Collection", url: "/collections/collection" });
  // }, []);
  return (
    <Layout activePage="collection" breadcrumbs={breadcrumbs}>
      <Heading>
        <>Collection</>
      </Heading>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  // Fetch something
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
