// import Image from "@samvera/clover-iiif/image";
import dynamic from "next/dynamic";
import Header from "@/components/header/header";

const Image = dynamic(
  () => import("@samvera/clover-iiif").then((Clover) => Clover.Image),
  {
    ssr: false,
  }
);

const MyCustomImage = () => {
  const handleOpenSeadragonCallback = (viewer) => {
    console.log("OpenSeadragon instance is ready");
    console.log(viewer);
  };

  return (
    <Image
      src="https://ids.lib.harvard.edu/ids/iiif/18772291/full/full/0/default.jpg"
      openSeadragonCallback={handleOpenSeadragonCallback}
    />
  );
};

export default MyCustomImage;
