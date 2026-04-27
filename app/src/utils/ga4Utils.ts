const GA_NOT_SET = "Not set";

export const trackGa4PageView = (
  division?: string,
  collection?: string,
  subCollection?: string,
  contentType?: string,
  resourceType?: string
) => {
  const dataLayer = window["dataLayer"] || [];
  dataLayer.push({
    event: "page_view",
    division_center: division ? division : GA_NOT_SET,
    collection: collection ? collection : GA_NOT_SET,
    subcollection: subCollection ? subCollection : GA_NOT_SET,
    dc_content_type: contentType ?? GA_NOT_SET,
    dc_resource_type: resourceType ?? GA_NOT_SET,
  });
};

export const sendDownloadEvent = (
  fileName: string,
  extension?: string,
  division?: string,
  collection?: string,
  subcollection?: string
) => {
  const dataLayer = window["dataLayer"] || [];
  dataLayer.push({
    event: "file_download",
    file_name: fileName,
    file_extension: extension ?? GA_NOT_SET,
    division_center: division ? division : GA_NOT_SET,
    collection: collection ? collection : GA_NOT_SET,
    subcollection: subcollection ? subcollection : GA_NOT_SET,
  });
};

export const sendLayoutSelectedEvent = (viewMode: "grid" | "list") => {
  const dataLayer = window["dataLayer"] || [];
  const layout = upperGridViewLayoutParam(viewMode);
  dataLayer.push({
    event: "select_search_results_layout",
    search_results_layout: layout,
  });
};

export const trackAVProgress = (
  mediaType: string,
  mediaName: string,
  progressPercentage: number
) => {
  const dataLayer = window["dataLayer"] || [];
  dataLayer.push({
    event: `${mediaType}_play`,
    media_name: mediaName,
    progress: progressPercentage,
  });
};

export const trackCTA = (text: string, url: string, type: string) => {
  const dataLayer = window["dataLayer"] || [];
  dataLayer.push({
    event: "cta_click",
    click_text: text,
    click_url: url,
    click_type: type,
  });
};

export const trackSearchResults = (
  searchResultsLayout: "grid" | "list",
  filterNames: string[],
  searchType?: string,
  searchTerm?: string
) => {
  const dataLayer = window["dataLayer"] || [];
  const layout = upperGridViewLayoutParam(searchResultsLayout);
  let data = {
    event: "view_search_results",
    search_type: searchType ?? "default",
    search_results_layout: layout,
  };
  if (searchTerm) {
    data["search_term"] = searchTerm;
  }
  if (filterNames.length > 0) {
    data["filter_name"] = filterNames.join("|");
  }
  dataLayer.push(data);
};

const upperGridViewLayoutParam = (param: "grid" | "list") => {
  return { grid: "Grid", list: "List" }[param];
};
