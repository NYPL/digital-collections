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
