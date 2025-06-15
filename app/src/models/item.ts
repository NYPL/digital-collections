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
  divisionLink: string;
  contentType: string;
  isImage: boolean;
  archivesLink: string | null;
  catalogLink: string | null;
  citationData: CitationOutput;
  breadcrumbData: any;

  constructor(uuid: string, manifest: any) {
    const parser = new Maniiifest(manifest);

    // Non-Manifest/Metadata related fields
    this.uuid = uuid;
    this.link =
      process.env.APP_ENV === "development" || process.env.APP_ENV === "qa"
        ? `https://qa-digitalcollections.nypl.org/items/${this.uuid}`
        : `https://digitalcollections.nypl.org/items/${this.uuid}`;
    this.manifestURL = `${process.env.COLLECTIONS_API_URL}/manifests/${uuid}`;

    // Manifest related fields
    this.hasItems = manifest.items.length > 0 ? true : false;
    const canvases = Array.from(parser.iterateManifestCanvas());

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

    // console.log("manifest.metadata is: ", manifest.metadata)
    // console.log("manifestMetadataArray is: ", manifestMetadataArray)
    // console.log("convertedManifestMetadata is: ", convertedManifestMetadata)
    // console.log("rawManifestMetadata is: ", rawManifestMetadata)
    // console.log("normalizedManifestMetadata is: ", normalizedManifestMetadata)
    // console.log("renderableMetadata is: ", this.renderableMetadata)

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

    //this will break in Prod if we don't deploy API first bc the name of the field is "Library Location"
    this.divisionLink =
      this.isRestricted && rawManifestMetadata["Division"]
        ? rawManifestMetadata["Division"].toString()
        : rawManifestMetadata["Library Locations"][0] || "";

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

    const archivesLink = identifiers.find((identifier) => {
      identifier.includes("Archives ID");
    });

    const catalogLink = identifiers.find((identifier) =>
      identifier.includes("NYPL Catalog ID (bnumber)")
    );

    this.archivesLink = archivesLink
      ? extractFirstHrefFromHTML(archivesLink)
      : null;

    this.catalogLink = catalogLink
      ? extractFirstHrefFromHTML(catalogLink)
      : null;

    // Citation Data
    this.citationData = generateCitations({
      title: this.title,
      link: this.link,
      location:
        extractAllAnchorsFromHTML(
          this.metadata?.locations?.split("<br>")[0] ?? ""
        )[0].text ?? "",
      resource:
        extractAllAnchorsFromHTML(
          this.metadata?.typeOfResource?.split("<br>")[0] ?? ""
        )[0].text ?? "",
      origin: this.metadata?.origin,
      dateIssued: this.metadata?.dateIssued,
    });

    // Breadcrumb Data
    // TODO: these won't work in Vercel - fix these links so they are a slug and not an external link
    this.breadcrumbData = {
      division: extractAllAnchorsFromHTML(
        this.metadata?.locations?.split("<br>")[0] ?? ""
      )[0],
      collection: extractAllAnchorsFromHTML(
        this.metadata?.collection?.split("<br>")[0] ?? ""
      )[0],
    };
  }
}
