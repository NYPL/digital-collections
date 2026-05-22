"use client";

import React, { createContext, useContext, useCallback } from "react";

interface AnalyticsDataContextType {
  division?: string;
  collection?: string;
  subCollection?: string;
}

const AnalyticsDataContext = createContext<
  AnalyticsDataContextType | undefined
>(undefined);

export const AnalyticsDataProvider = ({
  data,
  children,
}: {
  data: AnalyticsDataContextType;
  children: React.ReactNode;
}) => {
  return (
    <AnalyticsDataContext.Provider value={data}>
      {children}
    </AnalyticsDataContext.Provider>
  );
};

export const useAnalyticsDataContext = (): AnalyticsDataContextType => {
  const context = useContext(AnalyticsDataContext);
  if (!context) {
    throw new Error(
      "useAnalyticsDataContext must be used within a AnalyticsDataProvider"
    );
  }
  return context;
};
