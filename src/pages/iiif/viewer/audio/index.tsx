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
};

const MyCustomViewer = () => {
  const iiifContent =
    "https://iiif.io/api/cookbook/recipe/0002-mvm-audio/manifest.json";

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
