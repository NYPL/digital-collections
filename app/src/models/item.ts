import { Maniiifest } from "maniiifest";
import {
  convertManiiifestMetadata,
  parseManifestMetadata,
} from "../utils/metadata/parseManifestMetadata";
import { normalizeItemMetadataFromManifest } from "../utils/metadata/normalizeItemMetdata";
import { NormalizedItemMetadata } from "../types/NormalizedItemMetadata";
import { getRenderableMetadata } from "../utils/metadata/filterRenderableMetadata";

// https://github.com/jptmoore/maniiifest
// other resources:
// https://www.npmjs.com/package/@iiif/manifold
// https://github.com/iiif-commons/manifold

// TO DO: add isCartographic for map stuff
export class ItemModel {
  uuid: string;
  mods: any;
  capture: any;
  typeOfResource: string;
  title: string;
  isSingleCapture: boolean;
  imageIDs?: string[];
  href: string;
  contentType: string;
  hasItems: boolean;
  manifestURL: string;
  link: string;
  isRestricted: boolean;
  isImage: boolean;
  archivesLink?: string | null | undefined;
  catalogLink?: string | null | undefined;
  divisionLink: string;
  metadata: NormalizedItemMetadata;
  renderableMetadata: Record<string, string>;

  constructor(uuid: string, manifest: any) {
    // get custom label from manifest
    const parser = new Maniiifest(manifest);
    this.hasItems = manifest.items.length > 0 ? true : false;
    const canvases = Array.from(parser.iterateManifestCanvas());
    const canvasAnnotations = Array.from(
      parser.iterateManifestCanvasAnnotation()
    );

    // example canvas.id is: "https://iiif.nypl.org/iiif/3/TH-38454/full/!700,700/0/default.jpg"
    this.imageIDs = this.hasItems
      ? canvases.map((canvas) => {
          return canvas.id.split("/")[5];
        })
      : [];

    // console.log("manifest.metadata is: ", manifest.metadata)
    const manifestMetadataArray = Array.from(parser.iterateManifestMetadata());
    // console.log("manifestMetadataArray is: ", manifestMetadataArray)
    const convertedManifestMetadata = convertManiiifestMetadata(
      manifestMetadataArray
    ); // convert types
    // console.log("convertedManifestMetadata is: ", convertedManifestMetadata)
    const rawManifestMetadata = parseManifestMetadata(
      convertedManifestMetadata
    );
    // console.log("rawManifestMetadata is: ", rawManifestMetadata)
    const normalizedManifestMetadata =
      normalizeItemMetadataFromManifest(rawManifestMetadata);
    // console.log("normalizedManifestMetadata is: ", normalizedManifestMetadata)
    this.metadata = normalizedManifestMetadata;
    this.renderableMetadata = getRenderableMetadata(this.metadata);
    // console.log("renderableMetadata is: ", this.renderableMetadata)

    this.uuid = uuid;
    this.link =
      process.env.APP_ENV === "development" || process.env.APP_ENV === "qa"
        ? `https://qa-digitalcollections.nypl.org/items/${this.uuid}`
        : `https://digitalcollections.nypl.org/items/${this.uuid}`;
    this.typeOfResource = rawManifestMetadata["Resource Type"]
      ? rawManifestMetadata["Resource Type"].toString()
      : "";
    this.title = rawManifestMetadata["Title"]
      ? rawManifestMetadata["Title"].toString()
      : "";
    this.isRestricted = rawManifestMetadata["Is Restricted"]
      ? rawManifestMetadata["Is Restricted"].toString().toLowerCase() === "true"
      : true;

    // for viewer configs and order print button
    this.contentType = rawManifestMetadata["Content Type"]
      ? rawManifestMetadata["Content Type"][0].toString()
      : "";

    // only used for order print button
    this.isImage =
      this.hasItems &&
      (this.contentType === "image" ||
        this.contentType === "single image" ||
        this.contentType === "multiple images");

    this.divisionLink =
      this.isRestricted && rawManifestMetadata["Division"]
        ? rawManifestMetadata["Division"].toString()
        : rawManifestMetadata["Library Locations"][0] || "";

    this.manifestURL = `${process.env.COLLECTIONS_API_URL}/manifests/${uuid}`;

    const identifiers = rawManifestMetadata["Identifiers"];
    const catalogLink = identifiers.find((identifier) =>
      identifier.includes("NYPL Catalog ID (bnumber)")
    );

    this.catalogLink = catalogLink ? catalogLink : "";
    const archivesLink = identifiers.find((identifier) => {
      identifiers.includes("Archives ID");
    });

    this.archivesLink = archivesLink ? archivesLink : "";
  }
}
