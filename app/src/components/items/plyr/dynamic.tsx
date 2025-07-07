import dynamic from "next/dynamic";

export const PlyrPlayer = dynamic(() => import("./player"), { ssr: false });
