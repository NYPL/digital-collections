export const trackGa4PageView = (
  division?: string,
  collection?: string,
  subCollection?: string
) => {
  const dataLayer = window["dataLayer"] || [];
  dataLayer.push({
    event: "page_view",
    division_center: division ? division : "No Detail",
    collection: collection ? collection : "No Detail",
    subcollection: subCollection ? subCollection : "No Detail",
  });
};

export const sendDownloadEvent = (
  fileName: string,
  extension: string,
  division?: string,
  collection?: string,
  subcollection?: string
) => {
  const dataLayer = window["dataLayer"] || [];
  dataLayer.push({
    event: "file_download",
    file_name: fileName,
    file_extension: extension,
    division_center: division ? division : "No Detail",
    collection: collection ? collection : "No Detail",
    subcollection: subcollection ? subcollection : "No Detail",
  });
};
