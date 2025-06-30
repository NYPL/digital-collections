import { useEffect } from "react";

import dynamic from "next/dynamic";

const Player = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function ReactPlayer({ src, type }) {
  useEffect(() => {
    // disable download
    const player = document.querySelector("video") as any;
    player?.controls; // true
    player?.controlsList == "nodownload";
  });

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
