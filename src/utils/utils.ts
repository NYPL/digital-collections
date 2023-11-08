import featuredItemsData from "../data/featureditems.json";

/**
 * Returns a random image ID from the list of featured items.
 */
export const featuredImageID = () => {
  const randomIndex = Math.floor(
    Math.random() * featuredItemsData.featuredItems.images.length
  );
  return featuredItemsData.featuredItems.images[randomIndex].split(".")[0];
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
 * Returns the total number of items in the collection.
 * @param {string} uuid - the collection ID
 */

export const getNumItems = async (uuid: string) => {
  const apiUrl = `https://api.repo.nypl.org/api/v2/collections/${uuid}/items`;
  const apiKey = process.env.AUTH_TOKEN;
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Token token=${apiKey}`,
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      const numItems = data.nyplAPI.response.numItems;
      return numItems;
    } else {
      return 0;
    }
  } catch (error) {
    return 0;
  }
};

/**
 * Calls Repo API collectins/uuid/items endpoint
 * @param {string} uuid - collection uuid
 */

export const getItemsFromUUID = async (uuid: string) => {
  const apiUrl = `https://api.repo.nypl.org/api/v2/collections/${uuid}/items`;
  return apiCall(apiUrl);
};

/**
 * Returns the uuid, API uri, and numResults of an item given an identifier type and identifier value.
 * @param {string} identifierType - the identifier type
 * @param {string} identifier - the identifier value
 */

export const getAPIUri = async (identifierType: string, identifier: string) => {
  const apiUrl = `https://api.repo.nypl.org/api/v2/items/${identifierType}/${identifier}`;
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
      return responseData;
    } else {
      return 0;
    }
  } catch (error) {
    return 0;
  }
};
