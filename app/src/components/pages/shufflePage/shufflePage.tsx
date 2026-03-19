"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { trackCTA } from "@/src/utils/ga4Utils";

interface ShufflePageProps {
  redirectPath: string;
}

export default function ShufflePage({ redirectPath }: ShufflePageProps) {
  const router = useRouter();
  useEffect(() => {
    trackCTA("Shuffle", redirectPath, "Digital Collections Shuffle");
    router.push(redirectPath);
  });
  return null;
}
