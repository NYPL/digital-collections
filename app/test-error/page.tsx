"use client";
import { Metadata } from "next";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "Test Error",
};

export default function TestError() {
  useEffect(() => {
    throw new Error("Test error");
  }, []);
}
