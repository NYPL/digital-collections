/**
 * Calculates the percentage played and returns one of the following values, rounded down:
 * [10, 25, 50, 75, 100]
 * Eg:  Playing 2 seconds of a 10 second clip would return "10"
 * @param elapsed: Time elapsed, in seconds
 * @param total: Total time of clip, in seconds
 */
export const nearestPercentageMilestone = (elapsed: number, total: number) => {
  const milestones = [10, 25, 50, 75, 100];
  const percentage = (elapsed / total) * 100;

  return Math.max(...milestones.filter((val) => val <= percentage));
};

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

export const sendVideoPlayEvent = (
  fileName: string,
  progress: number,
  division?: string,
  collection?: string,
  subcollection?: string
) => {
  const dataLayer = window["dataLayer"] || [];
  dataLayer.push({
    event: "video_play",
    division_center: division ? division : "No Detail",
    collection: collection ? collection : "No Detail",
    subcollection: subcollection ? subcollection : "No Detail",
    media_name: fileName,
    progress: progress,
  });
};

export const sendAudioPlayEvent = (
  fileName: string,
  progress: number,
  division?: string,
  collection?: string,
  subcollection?: string
) => {
  const dataLayer = window["dataLayer"] || [];
  dataLayer.push({
    event: "audio_play",
    media_name: fileName,
    division_center: division ? division : "No Detail",
    collection: collection ? collection : "No Detail",
    subcollection: subcollection ? subcollection : "No Detail",
    progress: progress,
  });
};
