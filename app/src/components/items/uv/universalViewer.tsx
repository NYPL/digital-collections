"use client";
import {
  useUniversalViewer,
  useEvent,
} from "../../../hooks/useUniversalViewer";
import React, { useEffect, useMemo, useRef } from "react";
import { IIIFEvents as BaseEvents, IIIFURLAdapter } from "universalviewer";
import {
  uvConfigOptions,
  uvConfigModules,
  uvConfigLocalisation,
  uvConfigContent,
} from "./uvConfig";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCanvasContext } from "../../../context/CanvasProvider";

export type UniversalViewerProps = {
  config?: any;
  manifestId: string;
  canvasIndex?: number;
  onChangeCanvas?: (manifest: string, canvas: string) => void;
  onChangeManifest?: (manifest: string) => void;
};

// pulled most of this code from: https://codesandbox.io/p/sandbox/uv-nextjs-example-239ff5?file=%2Fcomponents%2FUniversalViewer.tsx%3A39%2C1-49%2C8
const UniversalViewer: React.FC<UniversalViewerProps> = React.memo(
  ({ manifestId, canvasIndex, onChangeCanvas, config }) => {
    const searchParams = useSearchParams();
    const { setCurrentCanvasIndex } = useCanvasContext();

    function updateCanvasIndex(newCanvasIndex: number) {
      const stringifiedParams = searchParams.toString();
      const urlSearchParams = new URLSearchParams(stringifiedParams);
      urlSearchParams.set("canvasIndex", newCanvasIndex.toString());
      window.history.pushState(null, "", `?${urlSearchParams}`);
    }

    const handleOnClick = (e) => {
      if (e.target.className === "openseadragon-canvas") {
        const viewPortButtons = Array.from(
          document.getElementsByClassName(
            "viewportNavButton"
          ) as HTMLCollectionOf<HTMLElement>
        );
        Array.from(viewPortButtons).forEach((button) => {
          button.style.position = "relative";
          button.style.zIndex = "10000";
        });
      }
    };

    console.log("config as component prop is: ", config);

    const ref = useRef<HTMLDivElement>(null);
    const lastIndex = useRef<number>();
    const options = useMemo(
      () => ({
        manifest: manifestId,
        canvasIndex: canvasIndex || 0, //TODO: look into why adding the query param adds "1" to the string or value. it's very weird.
        embedded: false,
      }),
      []
    );

    const uv = useUniversalViewer(ref, options);

    useEffect(() => {
      if (uv && (canvasIndex || canvasIndex === 0)) {
        if (lastIndex.current !== canvasIndex) {
          uv._assignedContentHandler?.publish(
            BaseEvents.CANVAS_INDEX_CHANGE,
            canvasIndex
          );
          lastIndex.current = canvasIndex;
        }
      }

      if (uv) {
        // override config using an inline json object
        uv.on("configure", function ({ config, cb }) {
          console.log("config on uv.on(configure) is : ", config);
          console.log("cb is: ", cb);
          cb(
            {
              options: uvConfigOptions,
              modules: uvConfigModules,
              localisation: uvConfigLocalisation,
              content: uvConfigContent,
            },
            [uv]
          );
          lastIndex.current = canvasIndex;
        });
      }
    }, [canvasIndex, uv]);

    useEvent(uv, BaseEvents.CANVAS_INDEX_CHANGE, (i) => {
      if (onChangeCanvas) {
        updateCanvasIndex(i);
        setCurrentCanvasIndex(i);

        if (lastIndex.current !== i) {
          const canvas = (uv as any)?.extension?.helper.getCanvasByIndex(i);
          if (canvas) {
            lastIndex.current = i;
            onChangeCanvas(manifestId, canvas.id);
          }
        }
      }
      // if (uv) {
      //   // override config using an inline json object
      //   uv.on("configure", function ({ config, cb }) {
      //     console.log("config on uv.on(configure) is : ", config);
      //     console.log("cb is: ", cb);
      //     cb(
      //       {
      //         options: uvConfigOptions,
      //         modules: uvConfigModules,
      //         localisation: uvConfigLocalisation,
      //         content: uvConfigContent,
      //       },
      //       [uv]
      //     );
      //     lastIndex.current = canvasIndex;
      //   });
      // }
    });

    return (
      <>
        <div
          className="uv"
          onClick={(e) => handleOnClick(e)}
          style={{ height: 650 }}
          ref={ref}
        />
      </>
    );
  }
);

UniversalViewer.displayName = "UniversalViewer";

export default UniversalViewer;
