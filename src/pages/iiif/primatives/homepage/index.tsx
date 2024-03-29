// import Image from "@samvera/clover-iiif/image";
import dynamic from "next/dynamic";
import Header from "@/components/header/header";
import { Box } from "@nypl/design-system-react-components";
import Link from "next/link";
// import { Primitives as IIIF } from "@samvera/clover-iiif/primitives";
import { Homepage } from "@samvera/clover-iiif/primitives";

const CustomHomepage = ({ homepage }) => {
  return (
    <>
      <Header />
      <Homepage
        homepage={[
          {
            id: "https://dc.library.northwestern.edu/items/71153379-4283-43be-8b0f-4e7e3bfda275",
            type: "Text",
            format: "text/html",
            label: {
              none: [
                "Homepage at Northwestern University Libraries Digital Collections",
              ],
            },
          },
        ]}
      >
        <span>View Homepage</span>
      </Homepage>
    </>
  );
};

export default CustomHomepage;
