import dynamic from "next/dynamic";

const Player = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function ReactPlayer({ src }) {
  return (
    <div>
      <Player url={src} controls={true} height="650px" width="auto" />
    </div>
  );
}
