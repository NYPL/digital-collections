"use client";
import React from "react";
import { CanvasProvider } from "@/src/context/CanvasProvider";
import { UniversalViewer } from "@/src/components/collections/uv/universalViewerLazy";
import { Box } from "@nypl/design-system-react-components";

export function CollectionViewerPage({ manifestId }) {
  return (
    <CanvasProvider>
      <Box>
        <UniversalViewer manifestId={manifestId} />
      </Box>
    </CanvasProvider>
  );
}
