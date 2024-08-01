"use client";

import dynamic from "next/dynamic";
// import NotificationBanner from "@/../components/notificationBanner/notificationBanner";
// import Header from "@/../components/header/header";

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

const AudioViewer = () => {
  const iiifContent =
    "https://iiif.io/api/cookbook/recipe/0002-mvm-audio/manifest.json";

  return <Viewer iiifContent={iiifContent} options={options} />;
};

export default AudioViewer;
