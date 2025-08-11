import dynamic from "next/dynamic";
import Plyr, { APITypes, PlyrInstance, usePlyr } from "plyr-react";
import "plyr-react/plyr.css";
import { useSearchParams } from "next/navigation";
import { useCanvasContext } from "../../../context/CanvasProvider";
import { Button } from "@nypl/design-system-react-components";
import React, { useRef, useEffect, forwardRef, MutableRefObject } from "react";
import { SimpleGrid as DCSimpleGrid } from "../../simpleGrid/simpleGrid";
import { trackAVProgress } from "@/src/utils/ga4Utils";
import { truncateString } from "@/src/utils/utils";

interface PlyrProps {
  title: string;
  sources: string[];
  type: string; // TODO: only accept 'video' | 'audio'... this requires updating Item model to either have a new typed field for content type that only expects these two options, or update the existing contentType field. I'm in favor of the former because the latter would need to be inclusive of images.
}

const Player = ({ title, sources, type }: PlyrProps) => {
  console.log("sources are: ", sources);
  const searchParams = useSearchParams();
  const { currentCanvasIndex, setCurrentCanvasIndex } = useCanvasContext();
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const plyrRef = useRef<APITypes>(null);

  function updateCanvasIndex(newCanvasIndex: number) {
    setCurrentCanvasIndex(newCanvasIndex);
    const stringifiedParams = searchParams.toString();
    const urlSearchParams = new URLSearchParams(stringifiedParams);
    urlSearchParams.set("canvasIndex", newCanvasIndex.toString());
    window.history.pushState(null, "", `?${urlSearchParams}`);
  }

  let source;

  // if query param is present
  useEffect(() => {
    const canvasIndexParam = searchParams.get("canvasIndex");
    if (canvasIndexParam) {
      const index = parseInt(canvasIndexParam);
      if (!isNaN(index)) {
        setCurrentCanvasIndex(index);

        // Focus the button after render
        setTimeout(() => {
          buttonRefs.current[index]?.focus();
        }, 0);
      }
    }
  }, []);

  if (type === "video") {
    source = {
      type: "video",
      title: title,
      sources: [
        {
          src: sources[currentCanvasIndex],
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
          src: sources[currentCanvasIndex],
          type: "audio/mp3",
        },
      ],
    };
  }

  return (
    <div>
      {sources.length === 1 ? (
        <CustomPlyr ref={plyrRef} source={source} />
      ) : (
        <>
          <CustomPlyr ref={plyrRef} source={source} />
          <DCSimpleGrid marginTop="s" marginBottom="xs">
            {sources.map((src, index) => {
              return (
                <Button
                  aria-label={`${truncateString(title, 20)} (${index + 1})`}
                  aria-pressed={index === currentCanvasIndex}
                  buttonType={
                    index === currentCanvasIndex ? "primary" : "secondary"
                  }
                  key={`item-canvas-${index + 1}-button`}
                  id={`item-canvas-${index + 1}-button`}
                  ref={(el) => (buttonRefs.current[index] = el)}
                  onClick={() => {
                    updateCanvasIndex(index);
                  }}
                >
                  {truncateString(title, 20)} ({index + 1})
                </Button>
              );
            })}
          </DCSimpleGrid>
        </>
      )}
    </div>
  );
};

const CustomPlyr = forwardRef<APITypes, any>((props, ref) => {
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
            console.log(`${milestone}%`);
            loggedProgressEvents.current.add(milestone);
          }
          break;
        }
      }
    };
    const api = current as { plyr: PlyrInstance };
    api.plyr.on("timeupdate", handleTimeUpdate);
    api.plyr.on("ended", () => {
      if (!loggedProgressEvents.current.has(100)) {
        trackAVProgress(source.type, source.title, 100);
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
    />
  );
});
CustomPlyr.displayName = "Custom Player";

export default Player;
