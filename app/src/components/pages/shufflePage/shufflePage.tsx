"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface ShufflePageProps {
  redirectPath: string;
}

export default function ShufflePage({ redirectPath }: ShufflePageProps) {
  const router = useRouter();
  useEffect(() => {
    router.push(redirectPath);
  });
  return null;
}
