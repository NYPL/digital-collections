"use client";
import { useEffect } from "react";

export default function TestError() {
  useEffect(() => {
    throw new Error("Test error");
  }, []);
}
