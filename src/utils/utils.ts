import featuredItemsData from "../data/featureditems.json";
let featuredItemArray = [];

/**
 * Sets global featuredItemArray so other functions can use it.
 **/
export const setFeaturedItemArray = () => {
  let itemsArray = [];
  for (let i = 0; i < featuredItemsData.featuredItems.images.length; i++) {
    itemsArray.push(featuredItemsData.featuredItems.images[i].split(".")[0]);
  }
  // set featuredItemArray
  if (featuredItemArray.length === 0) {
    featuredItemArray = itemsArray;
  }
  return itemsArray;
};

/**
 * Returns a random image ID from the list of featured items.
 */
export const generateRandomImageID = () => {
  console.log("generating random imageID");
  if (featuredItemArray.length === 0) {
    setFeaturedItemArray();
  }
  const randomIndex = Math.floor(Math.random() * featuredItemArray.length);
  return featuredItemArray[randomIndex];
};

/**
 * Returns a valid featured imageID.
 * Checks if an imageID passed by as a query parameter is included in the pre-approved list of image IDs for featured items.
 * If the imageID is not valid, the function returns a random imageID.
 * @param {string} imageID - optional imageID to check against list of image IDs for featured items.
 */
export const featuredImageID = (imageID = "") => {
  if (featuredItemArray.length === 0) {
    setFeaturedItemArray();
  }

  if (imageID !== "") {
    return featuredItemArray.includes(imageID)
      ? imageID
      : generateRandomImageID();
  } else {
    return generateRandomImageID();
  }
};

/**
 * Represents a IIIF Image API URL, which will be used globally throughout the application.
 * IIIF Image API has several params, the ones we are the most concerned about are Region, Size, and Rotation.
 * This function currently is concerned with the Size parameter. This function currently uses the '!h,w' format.
 * @param {string} imageId - the image ID of the book
 * @param {string} region - optional param for the width of an image, default is "full"
 * @param {string} size - optional param for the height of an image, default is "!1600,1600"
 * @param {string} rotation - optional param for the height of an image, default is "0"
 */

export const imageURL = (
  imageId: any,
  region = "full",
  size = "!1600,1600",
  rotation = "0"
) => {
  return `https://iiif.nypl.org/iiif/2/${imageId}/${region}/${size}/${rotation}/default.jpg`;
};

/**
 * Returns the number of digitized items in repo api.
 */

export const getNumDigitizedItems = async () => {
  const apiUrl = `${process.env.API_URL}/api/v2/items/total`;
  const res = await apiCall(apiUrl);
  const fallbackCount = 863848;
  const totalItems = res.count.$ || fallbackCount;
  return addCommas(totalItems);
};

/**
 * Returns the total number of items in the collection.
 * @param {string} uuid - the collection ID
 */

export const getNumItems = async (uuid: string) => {
  const apiUrl = `${process.env.API_URL}/api/v2/collections/${uuid}/items`;
  const res = await apiCall(apiUrl);
  return res.numItems || 0;
};

/**
 * Returns the uuid, API uri, and numResults of an item given an identifier type and identifier value.
 * @param {string} identifierType - the identifier type
 * @param {string} identifier - the identifier value
 */

export const getAPIUri = async (identifierType: string, identifier: string) => {
  const apiUrl = `${process.env.API_URL}/api/v2/items/${identifierType}/${identifier}`;
  return apiCall(apiUrl);
};

/**
 * Returns Repo API response.
 * @param {string} apiUrl - the url to make a request to
 */

export const apiCall = async (apiUrl: string) => {
  const apiKey = process.env.AUTH_TOKEN;
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Token token=${apiKey}`,
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      const responseData = data.nyplAPI.response;
      // if (apiUrl.includes('api/v2/items/total')) {
      //   console.log("responseData for api/v2/items/total", responseData)
      // }
      return responseData;
    } else {
      return 0;
    }
  } catch (error) {
    return 0;
  }
};

export const getItemDataFromImageID = async (imageID: string) => {
  const apiUri = await getAPIUri("local_image_id", imageID);
  const data = await apiCall(apiUri.apiUri);
  return {
    uuid: apiUri.uuid,
    title: getTitleFromRepoAPIResponseData(data) || "",
  };
};

function addCommas(number) {
  // Return the formatted number
  return Number(number).toLocaleString("en-US");
}

function getTitleFromRepoAPIResponseData(data) {
  // if titleInfo is an array of objects, use the first object. if titleInfo is a hash, return the title.
  const titleInfo = data.mods.titleInfo;
  return Array.isArray(titleInfo) ? titleInfo[0].title.$ : titleInfo.title.$;
}
