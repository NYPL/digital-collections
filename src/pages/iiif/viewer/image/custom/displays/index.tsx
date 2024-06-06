import dynamic from "next/dynamic";
import NotificationBanner from "@/components/notificationBanner/notificationBanner";
import Header from "@/components/header/header";
import PDFViewer from "./pdfs";
// import AnotherCustomDisplay from "./AnotherCustomDisplay";
import { LabeledIIIFExternalWebResource } from "src/types/presentation-3";

type CustomDisplay = {
  id;
  annotationBody;
  display: {
    component: React.ElementType;
    componentProps: {
      // Any custom props you want to pass to your component
      [key: string]: any;
    };
  };
  target: {
    canvasId: string[];
    paintingFormat: string[]; // "application/pdf" or "application/epub+zip"
  };
};

function MyCustomDisplay({ id, annotationBody, ...restProps }: CustomDisplay) {
  return (
    <div>
      <h1>My Custom Display</h1>
      <p>Canvas ID: {id}</p>
      <p>Annotation Body:</p>
      <pre>{JSON.stringify(annotationBody)}</pre>
      <p>Custom props:</p>
      <pre>{JSON.stringify(restProps)}</pre>
      ...your display here
    </div>
  );
}

const Viewer = dynamic(
  () => import("@samvera/clover-iiif").then((Clover) => Clover.Viewer),
  {
    ssr: false,
  }
);

const MyCustomViewer = () => {
  const iiifContent =
    "https://api.dc.library.northwestern.edu/api/v2/collections/c373ecd2-2c45-45f2-9f9e-52dc244870bd?as=iiif";

  return (
    <>
      <Header />
      <Viewer
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
              component: PDFViewer,
            },
            target: {
              paintingFormat: ["application/pdf", "image/gif"],
            },
          },
        ]}
      />
    </>
  );
};

export default MyCustomViewer;
