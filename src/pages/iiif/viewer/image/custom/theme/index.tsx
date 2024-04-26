import dynamic from "next/dynamic";
import NotificationBanner from "@/components/notificationBanner/notificationBanner";
import Header from "@/components/header/header";

const Viewer = dynamic(
  () => import("@samvera/clover-iiif").then((Clover) => Clover.Viewer),
  {
    ssr: false,
  }
);

const customTheme = {
  colors: {
    /**
     * Black and dark grays in a light theme.
     * All must contrast to 4.5 or greater with `secondary`.
     */
    primary: "#37474F",
    primaryMuted: "#546E7A",
    primaryAlt: "#263238",

    /**
     * Key brand color(s).
     * `accent` must contrast to 4.5 or greater with `secondary`.
     */
    accent: "#C62828",
    accentMuted: "#E57373",
    accentAlt: "#B71C1C",

    /**
     * White and light grays in a light theme.
     * All must must contrast to 4.5 or greater with `primary` and  `accent`.
     */
    secondary: "#FFFFFF",
    secondaryMuted: "#ECEFF1",
    secondaryAlt: "#CFD8DC",
  },
  fonts: {
    sans: "'Helvetica Neue', sans-serif",
    display: "Optima, Georgia, Arial, sans-serif",
  },
};

const MyCustomViewer = () => {
  const iiifContent =
    "https://api.dc.library.northwestern.edu/api/v2/collections/c373ecd2-2c45-45f2-9f9e-52dc244870bd?as=iiif";

  return (
    <>
      <Header />
      <Viewer iiifContent={iiifContent} customTheme={customTheme} />
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
