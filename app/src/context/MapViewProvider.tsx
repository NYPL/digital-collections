"use client";

import React, { createContext, useContext, useCallback, useState } from "react";

interface MapViewContextType {
  isMapView: boolean;
  handleMapViewToggle: () => void;
}

const MapViewContext = createContext<MapViewContextType | undefined>(undefined);

export const MapViewProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isMapView, setIsMapView] = useState(false);

  const handleMapViewToggle = useCallback(() => {
    setIsMapView((prev) => !prev);
  }, []);

  return (
    <MapViewContext.Provider
      value={{
        isMapView,
        handleMapViewToggle,
      }}
    >
      {children}
    </MapViewContext.Provider>
  );
};

export const useMapViewContext = (): MapViewContextType => {
  const context = useContext(MapViewContext);
  if (!context) {
    throw new Error("useMapViewContext must be used within a MapViewProvider");
  }
  return context;
};
