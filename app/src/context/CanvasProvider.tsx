"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import React, { createContext, useContext, useCallback } from "react";

interface CanvasContextType {
  currentCanvasIndex: number;
  setCurrentCanvasIndex: (index: number) => void;
  isMapView: boolean;
  handleMapViewToggle: () => void;
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
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, pathname, router]
  );

  const isMapView = searchParams.get("viewAs") === "map";

  const handleMapViewToggle = useCallback(() => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    console.log(
      "toggling map view. current params are: ",
      searchParams.toString()
    );
    if (isMapView) {
      newSearchParams.delete("viewAs");
    } else {
      newSearchParams.set("viewAs", "map");
      console.log(
        "enabling map view. new params are: ",
        newSearchParams.toString()
      );
    }

    router.push(`${pathname}?${newSearchParams.toString()}`, { scroll: false });
  }, [pathname, router, searchParams]);

  return (
    <CanvasContext.Provider
      value={{
        currentCanvasIndex,
        setCurrentCanvasIndex,
        isMapView,
        handleMapViewToggle,
      }}
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
