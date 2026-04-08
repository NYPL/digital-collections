"use client";
import { useEvent } from "../../../hooks/useUniversalViewer";
import { useEffect } from "react";
import { IIIFEvents as BaseEvents, Viewer } from "universalviewer";

export type UniversalViewerClientLogicProps = {
  uv?: Viewer;
  canvasIndex: number;
  onCanvasChange: (canvasIndex: number) => void;
};

const UniversalViewerClientLogic = ({
  uv,
  canvasIndex,
  onCanvasChange,
}: UniversalViewerClientLogicProps) => {
  useEffect(() => {
    if (uv) {
      uv._assignedContentHandler?.publish(
        BaseEvents.CANVAS_INDEX_CHANGE,
        canvasIndex
      );
    }
  }, [canvasIndex, uv]);

  useEvent(uv, BaseEvents.CANVAS_INDEX_CHANGE, (i) => {
    onCanvasChange(i);
  });

  return null;
};

UniversalViewerClientLogic.displayName = "UniversalViewerClientLogic";

export default UniversalViewerClientLogic;
