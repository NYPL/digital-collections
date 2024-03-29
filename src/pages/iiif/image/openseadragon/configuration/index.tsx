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
  const openSeadragonConfig = {
    showNavigator: false,
    showRotationControl: true,
    // ... other OpenSeadragon options
  };

  return (
    <Image
      src="https://ids.lib.harvard.edu/ids/iiif/18772291/full/full/0/default.jpg"
      openSeadragonConfig={openSeadragonConfig}
    />
  );
};
export default MyCustomImage;
