import { useEffect } from "react";
import {
  GeneralSearchManager,
  SearchManager,
} from "../utils/searchManager/searchManager";
import { trackSearchResults } from "../utils/ga4Utils";

const useSearchAnalytics = (searchManager: SearchManager) => {
  const filters = searchManager.filters;
  const filterNames = filters.map((f) => f.filter);
  const data = {
    searchTerm: searchManager.keywords ?? undefined,
    filterNames: searchManager.filters.map((f) => f.filter),
    searchResultsLayout: searchManager.viewMode,
    searchType:
      searchManager.filters.find((f) => f.filter === "rights")?.value ??
      undefined,
  };
  useEffect(() => {
    trackSearchResults(
      data.searchResultsLayout,
      data.filterNames,
      data.searchType,
      data.searchTerm
    );
  }, [JSON.stringify(data)]);
};

export default useSearchAnalytics;
