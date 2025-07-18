import { Maniiifest } from "maniiifest";
import {
  convertManiiifestMetadata,
  parseManifestMetadata,
} from "../utils/metadata/parseManifestMetadata";
import { normalizeItemMetadataFromManifest } from "../utils/metadata/normalizeItemMetdata";
import { NormalizedItemMetadata } from "../types/NormalizedItemMetadata";
import { getRenderableMetadata } from "../utils/metadata/filterRenderableMetadata";
import {
  extractFirstHrefFromHTML,
  extractAllAnchorsFromHTML,
} from "../utils/metadata/extractAnchorHrefs";
import {
  generateCitations,
  CitationOutput,
} from "../utils/metadata/generateCitations";

// https://github.com/jptmoore/maniiifest
// other resources:
// https://www.npmjs.com/package/@iiif/manifold
// https://github.com/iiif-commons/manifold

export class CaptureModel {
  uuid: string;
  imageId: string | null;
  orderInSequence: number;
}

// TO DO: add isCartographic for map stuff
export class ItemModel {
  uuid: string;
  link: string;
  manifestURL: string;
  hasItems: boolean;
  imageIDs: string[] | null;
  metadata: NormalizedItemMetadata;
  renderableMetadata: Record<string, string>;
  title: string;
  typeOfResource: string;
  isRestricted: boolean;
  buyable: boolean;
  divisionLink: string;
  contentType: string;
  isImage: boolean;
  archivesLink: string | null;
  catalogLink: string | null;
  citationData: CitationOutput | null;
  breadcrumbData: any;
  mediaFiles: string[];
  subcollectionName: string | null;
  permittedLocationText: string;
  captures: CaptureModel[];

  constructor(
    uuid: string,
    manifest: any,
    captures?: CaptureModel[],
    citationData?: any
  ) {
    const parser = new Maniiifest(manifest);
    // Non-Manifest/Metadata related fields
    this.uuid = uuid;
    this.manifestURL = `${process.env.COLLECTIONS_API_URL}/manifests/${uuid}`;
    this.captures = captures ?? [];

    // Manifest related fields
    this.hasItems = manifest.items.length > 0;
    const canvases = Array.from(parser.iterateManifestCanvas());
    const annotations = Array.from(parser.iterateManifestCanvasAnnotation());
    // Metadata assignment
    const manifestMetadataArray = Array.from(parser.iterateManifestMetadata());
    // convert Maniifest MetadataT to custom type
    const convertedManifestMetadata = convertManiiifestMetadata(
      manifestMetadataArray
    );
    const rawManifestMetadata = parseManifestMetadata(
      convertedManifestMetadata
    );
    const normalizedManifestMetadata =
      normalizeItemMetadataFromManifest(rawManifestMetadata);

    this.metadata = normalizedManifestMetadata;
    this.renderableMetadata = getRenderableMetadata(this.metadata);

    // Manifest Metadata related fields
    this.title = rawManifestMetadata["Title"]
      ? rawManifestMetadata["Title"].toString()
      : "";

    this.typeOfResource = rawManifestMetadata["Resource Type"]
      ? rawManifestMetadata["Resource Type"].toString()
      : "";

    this.isRestricted = rawManifestMetadata["Is Restricted"]
      ? rawManifestMetadata["Is Restricted"].toString().toLowerCase() === "true"
      : true;

    this.buyable = rawManifestMetadata["Buyable"]
      ? rawManifestMetadata["Buyable"].toString().toLowerCase() === "true"
      : false;

    //this will break in Prod if we don't deploy API first bc the name of the field is "Library Location"
    this.divisionLink =
      this.isRestricted && rawManifestMetadata["Division"]
        ? rawManifestMetadata["Division"].toString()
        : rawManifestMetadata["Library Locations"]?.[0] || "";

    this.permittedLocationText =
      this.isRestricted && rawManifestMetadata["Permitted Locations"]
        ? rawManifestMetadata["Permitted Locations"][0]?.toString()
        : "";

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

    // get list of imageIDs for order print button
    // example canvas.id is: "https://iiif.nypl.org/iiif/3/TH-38454/full/!700,700/0/default.jpg"
    this.imageIDs =
      this.hasItems && this.isImage
        ? canvases.map((canvas) => {
            return canvas.id.split("/")[5];
          })
        : null;

    // Special NYPL Identifiers for external links
    const identifiers = rawManifestMetadata["Identifiers"];

    const archivesComponentLink = identifiers.find((identifier) =>
      identifier.includes("Archives EAD ID")
    );
    this.archivesLink = archivesComponentLink
      ? extractFirstHrefFromHTML(archivesComponentLink)
      : null;

    if (!this.archivesLink) {
      const archivesFindingAidLink = identifiers.find((identifier) =>
        identifier.includes("Archives ID")
      );
      this.archivesLink = archivesFindingAidLink
        ? extractFirstHrefFromHTML(archivesFindingAidLink)
        : null;
    }

    const catalogLink = identifiers.find((identifier) =>
      identifier.includes("NYPL Catalog ID (bnumber)")
    );

    this.catalogLink = catalogLink
      ? extractFirstHrefFromHTML(catalogLink)
      : null;

    // Citation Data
    this.citationData = null;
    if (citationData) {
      this.citationData = generateCitations({
        title: citationData.title,
        link: citationData.shareURL,
        location: citationData.division,
        resource: citationData.type,
        dateIssued: citationData.year_end
          ? `${citationData.year_start} - ${citationData.year_end}`
          : citationData.year_start,
      });
    }

    // Breadcrumb Data
    const divisionLinkObj = extractAllAnchorsFromHTML(
      this.metadata?.locations?.split("<br>")[0] ?? ""
    )[0];
    if (divisionLinkObj) {
      divisionLinkObj["path"] = new URL(divisionLinkObj.href).pathname;
    }

    const orderedCollections = this.metadata?.collection?.split("<br>") ?? [];
    // note: this points to the top level collection, not the immediate parent collection or subcollection
    const collectionLinkObj = extractAllAnchorsFromHTML(
      orderedCollections[0] ?? ""
    )[0];
    if (collectionLinkObj && divisionLinkObj) {
      collectionLinkObj["path"] = new URL(collectionLinkObj.href).pathname;
      this.breadcrumbData = {
        division: divisionLinkObj,
        collection: collectionLinkObj,
      };
    } else if (collectionLinkObj) {
      collectionLinkObj["path"] = new URL(collectionLinkObj.href).pathname;
      this.breadcrumbData = {
        collection: collectionLinkObj,
      };
    } else if (divisionLinkObj) {
      this.breadcrumbData = {
        division: divisionLinkObj,
      };
    }

    this.subcollectionName = null;
    if (orderedCollections.length > 1) {
      const subcollection = orderedCollections[orderedCollections.length - 1];
      this.subcollectionName =
        extractAllAnchorsFromHTML(subcollection)[0]?.text;
    }

    // get a list of signed urls
    this.mediaFiles = annotations.map((annotation) => annotation.id);
  }
}
