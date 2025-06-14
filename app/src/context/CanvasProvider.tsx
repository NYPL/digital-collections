"use client";

import React, { createContext, useContext, useState } from "react";
import { useSearchParams } from "next/navigation";

interface CanvasContextType {
  currentCanvasIndex: number;
  setCurrentCanvasIndex: (index: number) => void;
}

const CanvasContext = createContext<CanvasContextType | undefined>(undefined);

export const CanvasProvider = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();

  const paramIndex = parseInt(searchParams.get("canvasIndex") || "0", 10);

  const [currentCanvasIndex, setCurrentCanvasIndex] =
    useState<number>(paramIndex);
  return (
    <CanvasContext.Provider
      value={{ currentCanvasIndex, setCurrentCanvasIndex }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvasContext = (): CanvasContextType => {
  const context = useContext(CanvasContext);
  if (!context) {
    throw new Error("useCanvasContext must be used within a CanvasProvider");
  }
  return context;
};
