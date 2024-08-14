"use client";
import dynamic from "next/dynamic";

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
};

const BookViewer = () => {
  const iiifContent =
    "https://iiif.io/api/cookbook/recipe/0011-book-3-behavior/manifest-continuous.json";
  // "https://iiif.io/api/cookbook/recipe/0011-book-3-behavior/manifest-individuals.json";
  // "https://api.dc.library.northwestern.edu/api/v2/collections/c373ecd2-2c45-45f2-9f9e-52dc244870bd?as=iiif";

  return <Viewer iiifContent={iiifContent} options={options} />;
};

export default BookViewer;
