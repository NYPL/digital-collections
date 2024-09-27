"use client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Error",
};

export default function TestError() {
  throw new Error("Test error");
}
