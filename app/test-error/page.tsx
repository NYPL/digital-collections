"use client";
import { useEffect } from "react";

export default function TestError() {
  useEffect(() => {
    // Send error to New Relic
    if ((window as any).newrelic) {
      (window as any).newrelic.log("Test error", { level: "warn" });
    }
    throw new Error("Test error");
  }, []);
}
