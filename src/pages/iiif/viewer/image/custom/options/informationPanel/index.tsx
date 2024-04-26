import dynamic from "next/dynamic";
import NotificationBanner from "@/components/notificationBanner/notificationBanner";
import Header from "@/components/header/header";

const Viewer = dynamic(
  () => import("@samvera/clover-iiif").then((Clover) => Clover.Viewer),
  {
    ssr: false,
  }
);

const options = {
  informationPanel: {
    open: false,
    renderToggle: true,
  },
  // Primary title (Manifest label) for top level canvas.  Defaults to true
  // showTitle: true,

  // IIIF Badge and popover containing options.  Defaults to true
  showIIIFBadge: true,

  // Ignore supplementing canvases by label value that are not for captioning
  // ignoreCaptionLabels: ["Chapters"],

  // Override canvas background color, defaults to #1a1d1e
  canvasBackgroundColor: "#000",

  // Set canvas zooming onScoll (this defaults to false)
  openSeadragon: {
    gestureSettingsMouse: {
      scrollToZoom: true,
    },
  },
  showDownload: true,
};

const MyCustomViewer = () => {
  const iiifContent =
    "https://api.dc.library.northwestern.edu/api/v2/collections/c373ecd2-2c45-45f2-9f9e-52dc244870bd?as=iiif";

  return (
    <>
      <Header />
      <Viewer iiifContent={iiifContent} options={options} />
    </>
  );
};

export default MyCustomViewer;
// Prop	Type	Required	Default
// iiifContent	string	Yes
// canvasIdCallback	function	No
// customDisplays	See Custom Displays	No
// customTheme	object	No
// options	object	No
// options.background	string CSS	No	transparent
// options.canvasBackgroundColor	string CSS	No	#1a1d1e
// options.canvasHeight	string CSS	No	500px
// options.ignoreCaptionLabels	string[]	No	[]
// options.openSeadragon	OpenSeadragon.Options	No
// options.informationPanel	See Information Panel	No
// options.requestHeaders	IncomingHttpHeaders	No	{ "Content-Type": "application/json" }
// options.showIIIFBadge	boolean	No	true
// options.showTitle	boolean	No	true
// options.withCredentials	boolean	No	false
