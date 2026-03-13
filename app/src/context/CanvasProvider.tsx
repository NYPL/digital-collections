"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import React, { createContext, useContext, useCallback } from "react";

interface CanvasContextType {
  currentCanvasIndex: number;
  setCurrentCanvasIndex: (index: number) => void;
}

const CanvasContext = createContext<CanvasContextType | undefined>(undefined);

export const CanvasProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 1. Read directly from URL
  const currentCanvasIndex = parseInt(
    searchParams.get("canvasIndex") || "0",
    10
  );

  // 2. Update by changing the URL
  const setCurrentCanvasIndex = useCallback(
    (index: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("canvasIndex", index.toString());

      // This updates the URL without a full page reload
      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, router]
  );

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
