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
