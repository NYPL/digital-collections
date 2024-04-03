import dynamic from "next/dynamic";
import Header from "@/components/header/header";
import { Box } from "@nypl/design-system-react-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = dynamic(
  () => import("@samvera/clover-iiif").then((Clover) => Clover.Slider),
  {
    ssr: false,
  }
);

const MyCustomSlider = () => {
  const iiifContent =
    "https://api.dc.library.northwestern.edu/api/v2/collections/c373ecd2-2c45-45f2-9f9e-52dc244870bd?as=iiif";

  const customBreakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };

  return (
    <>
      <Header />
      {/* <Box h="1000px"> */}
      <Slider
        iiifContent={iiifContent}
        options={{
          breakpoints: customBreakpoints,
        }}
      />
      {/* </Box> */}
    </>
  );
};

export default MyCustomSlider;