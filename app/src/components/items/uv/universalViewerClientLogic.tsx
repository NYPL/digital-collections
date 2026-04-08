"use client";
import { useEvent } from "../../../hooks/useUniversalViewer";
import { useEffect } from "react";
import { IIIFEvents as BaseEvents, Viewer } from "universalviewer";

export type UniversalViewerClientLogicProps = {
  uv?: Viewer;
  onCanvasChange: (canvasIndex: number) => void;
};

const UniversalViewerClientLogic = ({
  uv,
  onCanvasChange,
}: UniversalViewerClientLogicProps) => {
  useEvent(uv, BaseEvents.CANVAS_INDEX_CHANGE, (i) => {
    onCanvasChange(i);
  });

  return null;
};

UniversalViewerClientLogic.displayName = "UniversalViewerClientLogic";

export default UniversalViewerClientLogic;
