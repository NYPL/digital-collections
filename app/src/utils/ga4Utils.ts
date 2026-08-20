const GA_NOT_SET = "Not set";

interface GA4BaseData {
  division?: string;
  collection?: string;
  subcollection?: string;
}

interface PageViewData extends GA4BaseData {
  contentType?: string;
  resourceType?: string;
}

export const trackGa4PageView = ({
  division = GA_NOT_SET,
  collection = GA_NOT_SET,
  subcollection = GA_NOT_SET,
  contentType = GA_NOT_SET,
  resourceType = GA_NOT_SET,
}: PageViewData) => {
  const dataLayer = window["dataLayer"] || [];
  dataLayer.push({
    event: "page_view",
    division_center: division,
    collection: collection,
    subcollection: subcollection,
    dc_content_type: contentType,
    dc_resource_type: resourceType,
  });
};

interface DownloadData extends GA4BaseData {
  fileName: string;
  extension?: string;
}

export const sendDownloadEvent = ({
  fileName,
  extension = GA_NOT_SET,
  division = GA_NOT_SET,
  collection = GA_NOT_SET,
  subcollection = GA_NOT_SET,
}: DownloadData) => {
  const dataLayer = window["dataLayer"] || [];
  dataLayer.push({
    event: "file_download",
    file_name: fileName,
    file_extension: extension,
    division_center: division,
    collection: collection,
    subcollection: subcollection,
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

export const sendFailedUVImageLoadEvent = () => {
  const dataLayer = window["dataLayer"] || [];
  dataLayer.push({
    event: "uv_image_load_error",
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
  searchTerm?: string,
  numResults?: number
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
  if (numResults !== undefined) {
    data["results_count"] = numResults;
  }
  dataLayer.push(data);
};

const upperGridViewLayoutParam = (param: "grid" | "list") => {
  return { grid: "Grid", list: "List" }[param];
};
