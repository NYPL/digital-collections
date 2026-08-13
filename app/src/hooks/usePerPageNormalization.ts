import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { SearchManager } from "@/src/utils/searchManager/searchManager";

// Pushes a corrected URL when the page was loaded without perPage and the
// stored preference differs from what the server rendered.
export function usePerPageNormalization({
  serverPerPage,
  serverPage,
  searchManager,
  pathname,
  push,
  setIsLoaded,
}: {
  serverPerPage: number;
  serverPage: number;
  searchManager: SearchManager;
  pathname: string;
  push: (url: string) => void;
  setIsLoaded: (v: boolean) => void;
}) {
  const urlSearchParams = useSearchParams();

  useEffect(() => {
    const hasPerPageInUrl =
      typeof urlSearchParams?.has === "function"
        ? urlSearchParams.has("perPage")
        : Boolean(urlSearchParams?.get?.("perPage"));

    if (
      !hasPerPageInUrl &&
      typeof push === "function" &&
      searchManager.perPage !== serverPerPage
    ) {
      const query = searchManager.handlePageChange(serverPage);
      setIsLoaded(false);
      push(`${pathname}?${query}`);
    }
  }, [
    pathname,
    push,
    searchManager,
    serverPage,
    serverPerPage,
    setIsLoaded,
    urlSearchParams,
  ]);
}
