import { useEffect } from "react";

import dynamic from "next/dynamic";

const Player = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function ReactPlayer({ src, type }) {
  useEffect(() => {});

  return (
    <div>
      <Player
        url={src}
        controls={true}
        height={type === "video" ? "650px" : "55px"}
        width="100%"
      />
    </div>
  );
}
