"use client";
import {
  useUniversalViewer,
  useEvent,
} from "../../../hooks/useUniversalViewer";
import uvConfig from "./uvConfig.json";
import React, { useEffect, useMemo, useRef } from "react";
import { useCanvasContext } from "../../../context/CanvasProvider";
import {
  sendDownloadEvent,
  sendFailedUVImageLoadEvent,
} from "@/src/utils/ga4Utils";
import { useAnalyticsDataContext } from "@/src/context/AnalyticsDataProvider";

export type UniversalViewerProps = {
  config?: any;
  manifestId: string;
  captureUuidToIdx: { [uuid: string]: number };
};

// A copy of https://github.com/UniversalViewer/universalviewer/blob/1f2a35d3eda54854ef19d951afb8121ef8d8e6a0/src/content-handlers/iiif/IIIFEvents.ts
// We need to figure out a way to not have to import universalviewer during server rendering, but until then,
// just use this.
const IIIFEvents = {
  CANVAS_INDEX_CHANGE: "canvasIndexChange",
  DOWNLOAD: "download",
  LOGIN_FAILED: "loginFailed",
};

// pulled most of this code from: https://codesandbox.io/p/sandbox/uv-nextjs-example-239ff5?file=%2Fcomponents%2FUniversalViewer.tsx%3A39%2C1-49%2C8
const UniversalViewer: React.FC<UniversalViewerProps> = React.memo(
  ({ manifestId, captureUuidToIdx, config }) => {
    const { currentCanvasIndex, setCurrentCanvasIndex } = useCanvasContext();
    const canvasIndex = currentCanvasIndex;

    useEffect(() => {
      // Try to parse a capture uuid from the url hash for OG-style capture links
      // These links come with a hash like '#/?uuid=xxxx', so to convert to params,
      // we strip off the first 3 chars
      const hash = window.location.hash.slice(3);
      const captureUuid = new URLSearchParams(hash).get("uuid");
      if (captureUuid) {
        const captureIdx = captureUuidToIdx[captureUuid];
        if (captureIdx) {
          setCurrentCanvasIndex(captureIdx);
        }
      }
    });

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
    const options = useMemo(
      () => ({
        manifest: manifestId,
        canvasIndex: canvasIndex,
        embedded: true,
      }),
      []
    );

    const uv = useUniversalViewer(ref, options);

    useEffect(() => {
      const container = ref.current;
      if (!container) return;

      // The UniversalViewer/OpenSeadragon instance doesn't automatically
      // resize when its container does. We can use a ResizeObserver to
      // watch for container size changes and dispatch a window resize event,
      // which UV/OSD listens for to trigger its internal resize logic.
      const resizeObserver = new ResizeObserver(() => {
        window.dispatchEvent(new Event("resize"));
      });

      resizeObserver.observe(container);

      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    useEffect(() => {
      if (uv) {
        uv._assignedContentHandler?.publish(
          IIIFEvents.CANVAS_INDEX_CHANGE,
          canvasIndex
        );
      }
    }, [canvasIndex, uv]);

    useEffect(() => {
      if (uv) {
        // override config using an inline json object
        uv.on("configure", function ({ config, cb }) {
          cb(uvConfig, [uv]);
        });
      }
    }, [canvasIndex, uv]);

    useEvent(uv, IIIFEvents.CANVAS_INDEX_CHANGE, (i) => {
      setCurrentCanvasIndex(i);
    });

    const analyticsData = useAnalyticsDataContext();

    useEvent(uv, IIIFEvents.DOWNLOAD, ({ label }) => {
      const fileInfo = parseUVDownloadFilename(label);
      const ga4Data = {
        fileName: fileInfo ? fileInfo.name : label,
        extension: fileInfo?.extension ?? undefined,
        ...analyticsData,
      };
      if (!fileInfo) {
        console.log(`Could not parse file info from label ${label}`);
      }
      sendDownloadEvent(ga4Data);
    });

    useEvent(uv, IIIFEvents.LOGIN_FAILED, () => {
      sendFailedUVImageLoadEvent();
    });

    const parseUVDownloadFilename = (fileLabel: string) => {
      const match = fileLabel.match(/^(.*)\s\((.*)\)$/);
      if (match) {
        return {
          name: match[1],
          extension: match[2],
        };
      }
      return null;
    };

    return (
      <>
        <div
          className="uv"
          onClick={(e) => handleOnClick(e)}
          style={{ height: "100%" }}
          ref={ref}
        />
      </>
    );
  },
  (prevProps, nextProps) => prevProps.manifestId === nextProps.manifestId
);

UniversalViewer.displayName = "UniversalViewer";

export default UniversalViewer;
