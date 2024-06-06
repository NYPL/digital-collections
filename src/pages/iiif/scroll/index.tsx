import dynamic from "next/dynamic";
import Header from "@/components/header/header";

const Scroll: any = dynamic(
  () => import("@samvera/clover-iiif").then((Clover) => Clover.Scroll),
  {
    ssr: false,
  }
);

const MyCustomScroll = () => {
  const iiifContent =
    "https://digital.lib.utk.edu/assemble/manifest/civilwar/5390";

  return (
    <>
      <Header />
      <Scroll iiifContent={iiifContent} />
    </>
  );
};
export default MyCustomScroll;
