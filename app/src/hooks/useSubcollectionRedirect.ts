import { useEffect } from "react";

export function useSubcollectionRedirect() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const { pathname, hash, origin, search } = window.location;

    const collectionMatch = pathname.match(
      /^\/collections\/([0-9a-fA-F-]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12})$/
    );
    if (!collectionMatch || !hash.includes("roots=")) return;

    const rootsParamMatch = hash.match(/roots=([^&#]*)/);
    if (!rootsParamMatch) return;

    const rootsPath = decodeURIComponent(rootsParamMatch[1]);

    // Match both plain or prefixed UUIDs (e.g. 5:uuid)
    const uuidMatches = [
      ...rootsPath.matchAll(/(?:^|\/)(?:[^:/]+:)?([0-9a-fA-F-]{36})/g),
    ];
    const uuids = uuidMatches.map((m) => m[1]);

    const lastUuid = uuids[uuids.length - 1];
    if (!lastUuid) return;

    const fetchAndRedirect = async () => {
      try {
        const newUrl = new URL(origin + pathname + search);
        newUrl.hash = "";
        newUrl.searchParams.set("filters", `[subcollection=${lastUuid}]`);
        window.location.replace(newUrl.toString());
      } catch (err) {
        console.error("Redirect error:", err);
      }
    };

    fetchAndRedirect();
  }, []);
}
