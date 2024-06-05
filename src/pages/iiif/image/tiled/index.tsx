// import Image from "@samvera/clover-iiif/image";
import dynamic from "next/dynamic";
import Header from "@/components/header/header";
import { Box } from "@nypl/design-system-react-components";
const Image: any = dynamic(
  () => import("@samvera/clover-iiif").then((Clover) => (Clover as any).Image),
  {
    ssr: false,
  }
);

const MyCustomImage = () => {
  return (
    <>
      <Header />
      <Box h="500px">
        <Image
          // src="http://localhost:3002/api/iiif/aeac20de-7757-44ad-9da7-dee24861ed5f"
          src="https://iiif.dc.library.northwestern.edu/iiif/2/6ca016c5-de7f-4373-ae8f-7047fecf6ace"
          isTiledImage={true}
        />
      </Box>
    </>
  );
};
export default MyCustomImage;
