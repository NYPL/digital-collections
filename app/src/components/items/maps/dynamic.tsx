import dynamic from "next/dynamic";

export const AllMapsViewer = dynamic(() => import("./allMaps"), { ssr: false });
