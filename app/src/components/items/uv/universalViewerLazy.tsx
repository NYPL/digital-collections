import dynamic from "next/dynamic";

export const UniversalViewer = dynamic(() => import("./universalViewer"), {
  ssr: false,
});
