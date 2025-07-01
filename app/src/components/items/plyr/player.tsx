import dynamic from "next/dynamic";
// import Plyr from 'plyr';
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const Player = dynamic(() => import("react-player/lazy"), { ssr: false });

// example from https://www.npmjs.com/package/plyr-react
export default function PlyrPlayer({ title, src, type }) {
  // https://github.com/sampotts/plyr#the-source-setter
  let playerHeight = type === "video" ? "650px" : "55px";
  let source;
  // this assumes that the only types returned to the component are 'audio' and 'video,' which should be the case
  if (type === "video") {
    source = {
      type: "video",
      title: title,
      sources: [
        {
          src: src,
          type: "video/mp4",
        },
      ],
    };
  } else {
    source = {
      type: "audio",
      title: title,
      sources: [
        {
          src: src,
          type: "audio/mp3",
        },
      ],
    };
  }

  // docs: https://github.com/sampotts/plyr#options
  const options = undefined;
  return (
    <div>
      <Plyr
        source={source}
        options={options}
        height={playerHeight}
        width="100%"
      />
    </div>
  );
}
