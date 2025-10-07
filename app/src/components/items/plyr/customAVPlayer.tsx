import Plyr, { APITypes, PlyrInstance, usePlyr } from "plyr-react";
import "plyr-react/plyr.css";
import { useRef, useEffect, forwardRef, MutableRefObject } from "react";
import { trackAVProgress } from "@/src/utils/ga4Utils";

const CustomAVPlayer = forwardRef<APITypes, any>((props, ref) => {
  const { source } = props;
  const raptorRef = usePlyr(ref, { options: null, source });
  const loggedProgressEvents = useRef(new Set());
  const playerHeight = source.type === "video" ? "500px" : "55px";
  useEffect(() => {
    const { current } = ref as MutableRefObject<APITypes>;
    if (current.plyr.source === null) {
      return;
    }
    const handleTimeUpdate = () => {
      const { currentTime, duration } = current.plyr;
      const progress = (currentTime / duration) * 100;
      for (let milestone of [10, 25, 50, 75]) {
        if (milestone <= progress && progress <= milestone + 5) {
          if (!loggedProgressEvents.current.has(milestone)) {
            trackAVProgress(source.type, source.title, milestone);
            console.log(`${milestone}% progress`);
            loggedProgressEvents.current.add(milestone);
          }
          break;
        }
      }
    };
    const api = current as { plyr: PlyrInstance };
    api.plyr.on("timeupdate", handleTimeUpdate);
    api.plyr.on("playing", () => {
      if (!loggedProgressEvents.current.has(0)) {
        trackAVProgress(source.type, source.title, 0);
        console.log("Playback started");
        loggedProgressEvents.current.add(0);
      }
    });
    api.plyr.on("ended", () => {
      if (!loggedProgressEvents.current.has(100)) {
        trackAVProgress(source.type, source.title, 100);
        console.log("Playback ended");
        loggedProgressEvents.current.add(100);
      }
    });
  });
  return (
    <video
      ref={raptorRef as MutableRefObject<HTMLVideoElement>}
      className="plyr-react plyr"
      height={playerHeight}
      width="100%"
      crossOrigin="anonymous"
    />
  );
});
CustomAVPlayer.displayName = "Custom AV Player";

export default CustomAVPlayer;
