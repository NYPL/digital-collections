import dynamic from "next/dynamic";
// import Plyr from 'plyr';
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { useSearchParams } from "next/navigation";
import { useCanvasContext } from "../../../context/CanvasProvider";
import { Button } from "@nypl/design-system-react-components";
import React from "react";
import { SimpleGrid as DCSimpleGrid } from "../../simpleGrid/simpleGrid";

const Player = dynamic(() => import("react-player/lazy"), { ssr: false });

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "..."; // Truncate and add ellipsis
  } else {
    return str; // Return original string if not longer than num
  }
}
// example from https://www.npmjs.com/package/plyr-react
export default function PlyrPlayer({
  uuid,
  title,
  src,
  srcs,
  type,
  canvasIndex,
}) {
  console.log("srcs are: ", srcs);
  const searchParams = useSearchParams();
  const { currentCanvasIndex, setCurrentCanvasIndex } = useCanvasContext();

  function updateCanvasIndex(newCanvasIndex: number) {
    setCurrentCanvasIndex(newCanvasIndex);
    const stringifiedParams = searchParams.toString();
    const urlSearchParams = new URLSearchParams(stringifiedParams);
    urlSearchParams.set("canvasIndex", newCanvasIndex.toString());
    window.history.pushState(null, "", `?${urlSearchParams}`);
  }

  // https://github.com/sampotts/plyr#the-source-setter
  let playerHeight = type === "video" ? "500px" : "55px";
  let source;

  // this assumes that the only types returned to the component are 'audio' and 'video,' which should be the case
  if (type === "video") {
    source = {
      type: "video",
      title: title,
      sources: [
        {
          src: srcs[currentCanvasIndex],
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
          src: srcs[currentCanvasIndex],
          type: "audio/mp3",
        },
      ],
    };
  }

  // docs: https://github.com/sampotts/plyr#options
  const options = undefined;
  return (
    <div>
      {srcs.length === 1 ? (
        <Plyr
          source={source}
          options={options}
          height={playerHeight}
          width="100%"
        />
      ) : (
        <>
          <Plyr
            source={source}
            options={options}
            height={playerHeight}
            width="100%"
          />
          <DCSimpleGrid marginTop="s" marginBottom="xs">
            {srcs.map((src, index) => {
              return (
                <Button
                  key={`item-canvas-${index + 1}-button`}
                  id={`item-canvas-${index + 1}-button`}
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
}
