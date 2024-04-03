// import AnotherCustomDisplay from "./AnotherCustomDisplay";
import Header from "@/components/header/header";
// const Viewer = dynamic(
//   () => import("@samvera/clover-iiif").then((Clover) => Clover.Viewer),
//   {
//     ssr: false,
//   }
// );

const MyCustomViewer = () => {
  const iiifContent =
    "https://api.dc.library.northwestern.edu/api/v2/collections/c373ecd2-2c45-45f2-9f9e-52dc244870bd?as=iiif";

  return (
    <>
      <Header />
      {/* <Viewer
        iiifContent={iiifContent}
        customDisplays={[
          {
            display: {
              component: MyCustomDisplay,
              componentProps: {
                foo: "bar",
              },
            },
            target: {
              canvasId: [
                "https://uri-for-a-canvas-id/access/0",
                "https://uri-for-a-canvas-id/access/1",
              ],
            },
          },
          {
            display: {
              component: AnotherCustomDisplay,
            },
            target: {
              paintingFormat: ["application/pdf", "image/gif"],
            },
          },
        ]}
      /> */}
    </>
  );
};

export default MyCustomViewer;
