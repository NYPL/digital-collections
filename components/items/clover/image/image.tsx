"use client";
import dynamic from "next/dynamic";
import Header from "components/header/header";
import { Box } from "@nypl/design-system-react-components";
import { imageURL } from "utils/utils";
const Image: any = dynamic(
  () => import("@samvera/clover-iiif").then((Clover) => (Clover as any).Image),
  {
    ssr: false,
  }
);

const ImageViewer = ({ imageID }) => {
  // const imageID = item.capture.imageID.$;
  return (
    <>
      <Box h="500px">
        <Image alt="alt text" src={imageURL(imageID, "full", "full")} />
      </Box>
    </>
  );
};
export default ImageViewer;
