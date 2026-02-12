import { useEffect } from "react";
import { SearchManager } from "../utils/searchManager/searchManager";
import { trackSearchResults } from "../utils/ga4Utils";

const useSearchAnalytics = (searchManager: SearchManager) => {
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
  });

  useEffect(() => {
    trackSearchResults(
      searchManager.viewMode,
      filterNames,
      searchType,
      keywords
    );
  }, [changeHash]);
};

export default useSearchAnalytics;
