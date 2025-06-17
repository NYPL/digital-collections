"use client";
import {
  useUniversalViewer,
  useEvent,
} from "../../../hooks/useUniversalViewer";
import React, { useEffect, useMemo, useRef } from "react";
import { IIIFEvents as BaseEvents, IIIFURLAdapter } from "universalviewer";
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

    // TODO: why this no worky with the clamped index
    function updateCanvasIndex(newCanvasIndex: number) {
      const stringifiedParams = searchParams.toString();
      const urlSearchParams = new URLSearchParams(stringifiedParams);
      urlSearchParams.set("canvasIndex", newCanvasIndex.toString());
      window.history.pushState(null, "", `?${urlSearchParams}`);
    }

    const ref = useRef<HTMLDivElement>(null);
    const lastIndex = useRef<number>();
    const options = useMemo(
      () => ({
        manifest: manifestId,
        canvasIndex: canvasIndex, //TODO: look into why adding the query param adds "1" to the string or value. it's very weird.
        embedded: true,
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
    });

    return (
      <>
        <div className="uv" style={{ height: 650 }} ref={ref} />
      </>
    );
  }
);

UniversalViewer.displayName = "UniversalViewer";

export default UniversalViewer;
