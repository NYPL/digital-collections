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
};

const VideoViewer = () => {
  const iiifContent =
    "https://iiif.io/api/cookbook/recipe/0003-mvm-video/manifest.json";

  return <Viewer iiifContent={iiifContent} options={options} />;
};

export default VideoViewer;
