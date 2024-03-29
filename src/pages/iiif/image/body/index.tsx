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
          body={{
            id: "https://iiif.dc.library.northwestern.edu/iiif/2/6ca016c5-de7f-4373-ae8f-7047fecf6ace/full/600,/0/default.jpg",
            type: "Image",
            format: "image/tiff",
            height: 5709,
            width: 8949,
            service: [
              {
                "@id":
                  "https://iiif.dc.library.northwestern.edu/iiif/2/6ca016c5-de7f-4373-ae8f-7047fecf6ace",
                "@type": "ImageService2",
                profile: "http://iiif.io/api/image/2/level2.json",
              },
            ],
          }}
        />
      </Box>
    </>
  );
};
export default MyCustomImage;
