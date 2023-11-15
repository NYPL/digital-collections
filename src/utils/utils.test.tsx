import featuredItemsData from "../data/featureditems.json";
import {
  generateRandomImageID,
  getNumItems,
  featuredImageID,
  getAPIUri,
  apiCall,
} from "@/utils/utils";

// test that this data returned in dataFromUri is valid:
describe("featuredImageID Object", () => {
  it("should return a defined imageID, uuid, title, and href if query param image id is not valid", async () => {
    const imageID = featuredImageID("1234");
    const apiUri = await getAPIUri("local_image_id", imageID);
    const dataFromUri = await apiCall(apiUri.apiUri);
    let featuredItemObject = {
      imageID: imageID,
      uuid: apiUri.uuid,
      title: dataFromUri.mods.titleInfo.title,
      href: `${process.env.DC_URL}/items/${apiUri.uuid}`,
    };
    expect(featuredItemObject.imageID).toBeDefined();
    expect(featuredItemObject.uuid).toBeDefined();
    expect(featuredItemObject.title).toBeDefined();
    expect(featuredItemObject.href).toBeDefined();
  });

  it("should return a defined imageID, uuid, title, and href if query param image id is not supplied", async () => {
    const imageID = featuredImageID();
    const apiUri = await getAPIUri("local_image_id", imageID);
    const dataFromUri = await apiCall(apiUri.apiUri);
    let featuredItemObject = {
      imageID: imageID,
      uuid: apiUri.uuid,
      title: dataFromUri.mods.titleInfo.title.$,
      href: `${process.env.DC_URL}/items/${apiUri.uuid}`,
    };
    expect(featuredItemObject.imageID).toBeDefined();
    expect(featuredItemObject.uuid).toBeDefined();
    expect(featuredItemObject.title).toBeDefined();
    expect(featuredItemObject.href).toBeDefined();
  });

  it("should return a defined imageID, uuid, title, and href if query param image id is valid", async () => {
    const imageID = featuredImageID("105180");
    const apiUri = await getAPIUri("local_image_id", imageID);
    const dataFromUri = await apiCall(apiUri.apiUri);
    let featuredItemObject = {
      imageID: imageID,
      uuid: apiUri.uuid,
      title: dataFromUri.mods.titleInfo.title.$,
      href: `${process.env.DC_URL}/items/${apiUri.uuid}`,
    };
    expect(featuredItemObject.imageID).toBeDefined();
    expect(featuredItemObject.uuid).toBeDefined();
    expect(featuredItemObject.title).toBeDefined();
    expect(featuredItemObject.href).toBeDefined();
  });
  // TO DO: it("should return an imageID that is included in featuredItemsData", () => {});
});

describe("generateRandomImageID()", () => {
  it("should return an imageID", () => {
    expect(generateRandomImageID()).toBeDefined();
  });
});

describe("featuredImageID()", () => {
  let featuredItemsImageIDArray = [];
  for (let i = 0; i < featuredItemsData.featuredItems.images.length; i++) {
    featuredItemsImageIDArray.push(
      featuredItemsData.featuredItems.images[i].split(".")[0]
    );
  }

  it("should return an imageID if an imageID is NOT passed in as an argument", () => {
    expect(featuredImageID()).toBeDefined();
  });

  it("should return an imageID if an imageID IS passed in as an argument", () => {
    expect(featuredImageID("1234")).toBeDefined();
  });

  it("should return an imageID that is included in featuredItemsData if an imageID is NOT passed in as an argument", () => {
    expect(featuredItemsImageIDArray).toContain(featuredImageID());
  });

  it("should return an imageID that is included in featuredItemsData if a non-featured imageID is passed in as anargument", () => {
    expect(featuredItemsImageIDArray).toContain(featuredImageID("1234"));
  });

  it("should return an imageID that is included in featuredItemsData if a valid featured imageID is passed in as anargument", () => {
    expect(featuredItemsImageIDArray).toContain(featuredImageID("105180"));
  });
});

describe("getAPIUri()", () => {
  it("should not be undefined", async () => {
    const apiUriData = await getAPIUri("local_image_id", "105180");
    expect(apiUriData.apiUri).toBeDefined();
  });
});

describe("apiCall()", () => {
  it("should not return undefined", async () => {
    expect(
      await apiCall(
        "https://api.repo.nypl.org/api/v2/items/local_image_id/105180"
      )
    ).toBeDefined();
    expect(
      await apiCall(
        "http://api.repo.nypl.org/api/v2/mods/6265a5c0-c5ef-012f-687c-58d385a7bc34"
      )
    ).toBeDefined();
  });
});

// TO DO:
/**
 * Represents a IIIF Image API URL, which will be used globally throughout the application.
 * IIIF Image API has several params, the ones we are the most concerned about are Region, Size, and Rotation.
 * This function currently is concerned with the Size parameter. This function currently uses the '!h,w' format.
 * @param {string} imageId - the image ID of the book
 * @param {string} region - optional param for the width of an image, default is "full"
 * @param {string} size - optional param for the height of an image, default is "!1600,1600"
 * @param {string} rotation - optional param for the height of an image, default is "0"
 */

// imageURL(
//   imageId: any,
//   region = "full",
//   size = "!1600,1600",
//   rotation = "0"
// )

// Cases:
// if imageID is not a string: 12345
// if imageID is not supplied
// if imageID is a string

// if region is not a string
// if region is not supplied
// if region is a string

// if size is not a string
// if size is not supplied
// if size is a string

// if rotation is not a string
// if rotation is not supplied
// if rotation is a string & not default
