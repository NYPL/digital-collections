import { apiResponse } from "./api";

/**
 * Returns a map of collection uuids with corresponding item counts.
 * @param {string[]} uuids - collection uuids
 */
export const getItemsCountFromCollections = async (uuids: string[]) => {
  const results = {};
  const apiUrl = `${process.env.API_URL}/api/v2/collections/`;
  await Promise.all(
    uuids.map(async (uuid) => {
      try {
        const response = await apiResponse(`${apiUrl}${uuid}`);
        const numItems = response.numItems || 0;
        results[uuid] = numItems;
      } catch (error) {
        console.error(`Error fetching collection ${uuid}:`, error.message);
        results[uuid] = 0;
      }
    })
  );
  return results;
};
