import { useEffect, useRef } from "react";
import { SearchManager } from "../utils/searchManager/searchManager";
import { trackSearchResults } from "../utils/ga4Utils";

const useSearchAnalytics = (
  searchManager: SearchManager,
  numResults?: number,
  runOnInitialMount: boolean = false
) => {
  const isInitialMount = useRef(true);
  const filters = searchManager.filters;
  const filterNames = filters.map((f) => f.filter) ?? undefined;
  const keywords = searchManager.keywords ?? undefined;
  const searchType =
    searchManager.filters.find((f) => f.filter === "rights")?.value ??
    undefined;
  // We don't send an event if the viewMode is the only thing that changed
  const changeHash = JSON.stringify({
    filterNames: filterNames,
    searchType: searchType,
    keywords: keywords,
    numResults: numResults,
  });

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      if (!runOnInitialMount) {
        return;
      }
    }
    trackSearchResults(
      searchManager.viewMode,
      filterNames,
      searchType,
      keywords,
      numResults
    );
  }, [changeHash]);
};

export default useSearchAnalytics;
