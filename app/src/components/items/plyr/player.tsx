import dynamic from "next/dynamic";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { useSearchParams } from "next/navigation";
import { useCanvasContext } from "../../../context/CanvasProvider";
import { Button } from "@nypl/design-system-react-components";
import React, { useRef, useEffect } from "react";
import { SimpleGrid as DCSimpleGrid } from "../../simpleGrid/simpleGrid";

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "..."; // Truncate and add ellipsis
  } else {
    return str; // Return original string if not longer than num
  }
}

interface PlyrProps {
  title: string;
  sources: string[];
  type: string; // TODO: only accept 'video' | 'audio'... this requires some refactoring
}

const PlyrPlayer = ({ title, sources, type }: PlyrProps) => {
  console.log("sources are: ", sources);
  const searchParams = useSearchParams();
  const { currentCanvasIndex, setCurrentCanvasIndex } = useCanvasContext();
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function updateCanvasIndex(newCanvasIndex: number) {
    setCurrentCanvasIndex(newCanvasIndex);
    const stringifiedParams = searchParams.toString();
    const urlSearchParams = new URLSearchParams(stringifiedParams);
    urlSearchParams.set("canvasIndex", newCanvasIndex.toString());
    window.history.pushState(null, "", `?${urlSearchParams}`);
  }

  let playerHeight = type === "video" ? "500px" : "55px";
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
  // this assumes that the only types returned to the component are 'audio' and 'video,' which should be the case
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
        <Plyr
          source={source}
          options={undefined}
          height={playerHeight}
          width="100%"
        />
      ) : (
        <>
          <Plyr
            source={source}
            options={undefined}
            height={playerHeight}
            width="100%"
          />
          <DCSimpleGrid marginTop="s" marginBottom="xs">
            {sources.map((src, index) => {
              return (
                <Button
                  aria-label={`${truncateString(title, 20)} (${index + 1})`}
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

export default PlyrPlayer;
