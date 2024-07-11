"use client";
import dynamic from "next/dynamic";
import Header from "src/components/header/header";
import { Box } from "@nypl/design-system-react-components";
import { imageURL } from "src/utils/utils";

interface ImageViewerProps {
  imageID: string;
}

const Image: any = dynamic(
  () => import("@samvera/clover-iiif").then((Clover) => (Clover as any).Image),
  {
    ssr: false,
  }
);

const ImageViewer = ({ imageID }: ImageViewerProps) => {
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
