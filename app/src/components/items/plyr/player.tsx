import dynamic from "next/dynamic";
// import Plyr from 'plyr';
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const Player = dynamic(() => import("react-player/lazy"), { ssr: false });

// example from https://www.npmjs.com/package/plyr-react
export default function PlyrPlayer({ src, type }) {
  // https://github.com/sampotts/plyr#the-source-setter
  let playerHeight = "";
  let source;
  // this assumes that the only types returned to the component are 'audio' and 'video,' which should be the case
  if (type === "video") {
    // video player
    source = {
      type: "video",
      title: "Example title",
      sources: [
        {
          src: src,
          type: "video/mp4",
          // size: 720,
        },
        // {
        //   src: '/path/to/movie.webm',
        //   type: 'video/webm',
        //   size: 1080,
        // },
      ],
      // poster: '/path/to/poster.jpg',
      // previewThumbnails: {
      //   src: '/path/to/thumbnails.vtt',
      // },
      // tracks: [
      //   {
      //     kind: 'captions',
      //     label: 'English',
      //     srclang: 'en',
      //     src: '/path/to/captions.en.vtt',
      //     default: true,
      //   },
      //   {
      //     kind: 'captions',
      //     label: 'French',
      //     srclang: 'fr',
      //     src: '/path/to/captions.fr.vtt',
      //   },
      // ],
    };
  } else {
    source = {
      type: "audio",
      title: "Example title",
      sources: [
        {
          src: src,
          type: "audio/mp3",
        },
        // {
        //   src: '/path/to/audio.ogg',
        //   type: 'audio/ogg',
        // },
      ],
    };
  }

  const options = "";
  // https://github.com/sampotts/plyr#options
  return (
    <div>
      <Plyr
        source={source}
        options={undefined}
        height={type === "video" ? "650px" : "55px"}
        width="100%"
      />
    </div>
  );
}
