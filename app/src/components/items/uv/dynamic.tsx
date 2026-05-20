import dynamic from "next/dynamic";

export const UniversalViewerDynamic = dynamic(
  () => import("./universalViewer"),
  { ssr: false }
);
