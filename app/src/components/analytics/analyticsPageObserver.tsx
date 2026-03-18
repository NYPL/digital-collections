"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export default function AnalyticsPageObserver() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const previousUrlRef = useRef<string | null>(null);

  useEffect(() => {
    const currentUrl = window.location.href;
    const previousUrl = previousUrlRef.current ?? document.referrer;
    window.dataLayer = window.dataLayer || [];
    console.log(`Page changed from ${previousUrl} to ${currentUrl}`);
    window.dataLayer.push({
      event: "page_changed",
      page_location: currentUrl,
      page_referer: previousUrl,
    });
    previousUrlRef.current = currentUrl;
  });

  return null;
}
