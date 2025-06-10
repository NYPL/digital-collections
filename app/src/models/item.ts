import { Maniiifest } from "maniiifest";

// https://github.com/jptmoore/maniiifest
// other resources:
// https://www.npmjs.com/package/@iiif/manifold
// https://github.com/iiif-commons/manifold

// import { getContentType } from "../utils/utils";
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
  hasItems?: boolean;
  hasRightsRestritions?: boolean;
  manifestURL: string;
  link: string;
  isRestricted: boolean;
  isImage: boolean;
  archivesLink?: string | null | undefined;
  catalogLink?: string | null | undefined;
  metadata?: {
    title: string;
    names?: string;
    collection?: string;
    origin: string;
    dateCreated?: string;
    dateIssued: string;
    tableOfContents?: string;
    locations: string;
    subjects?: string;
    genres: string;
    notes?: string;
    physicalDescription?: string;
    abstract?: string;
    languages: string;
    link?: string;
    identifiers: string;
    access: string;
    rights: string;
    typeOfResource: string;
  };

  constructor(uuid: string, manifest: any) {
    // get custom label from manifest
    const parser = new Maniiifest(manifest);
    this.hasItems = manifest.items.length > 0 ? true : false;
    const canvases = Array.from(parser.iterateManifestCanvas());
    const canvasAnnotations = Array.from(
      parser.iterateManifestCanvasAnnotation()
    );
    console.log("canvasAnnotations is: ", canvasAnnotations);
    // only used for order print button
    this.isImage = this.hasItems
      ? canvasAnnotations[0]?.body.type === "Image"
      : false;
    // this.isImage = !!canvasAnnotations[0] && canvasAnnotations[0].body.type === "Image";

    this.imageIDs = this.hasItems
      ? canvases.map((canvas) => {
          return canvas.id.split("/")[5];
        })
      : [];

    // const label = parser?.getManifestLabelByLanguage("en");
    const metadata = Array.from(parser.iterateManifestMetadata());
    const manifestMetadataHash = {};

    if (metadata) {
      for (const field of metadata) {
        const label = field.label["en"][0];
        const value = field.value["en"];
        manifestMetadataHash[label] = value;
      }
    }

    this.uuid = uuid;
    (this.link =
      process.env.APP_ENV === "development" || process.env.APP_ENV === "qa"
        ? `https://qa-digitalcollections.nypl.org/items/${this.uuid}`
        : `https://digitalcollections.nypl.org/items/${this.uuid}`),
      (this.typeOfResource = manifestMetadataHash["Resource Type"]
        ? manifestMetadataHash["Resource Type"].toString()
        : ""),
      (this.title = manifestMetadataHash["Title"]
        ? manifestMetadataHash["Title"].toString()
        : ""),
      (this.isRestricted = manifestMetadataHash["Is Restricted"]
        ? manifestMetadataHash["Is Restricted"].toString().toLowerCase() ===
          "true"
        : true),
      (this.manifestURL = `${process.env.COLLECTIONS_API_URL}/manifests/${uuid}`);

    // TO DO: add _isCartographic for map stuff
    this.metadata = {
      title: manifestMetadataHash["Title"]
        ? manifestMetadataHash["Title"].toString()
        : "",
      collection: manifestMetadataHash["Collection"]
        ? manifestMetadataHash["Collection"].join("<br>") //TODO: add arrows
        : "",
      names: manifestMetadataHash["Names"]
        ? manifestMetadataHash["Names"].join("<br>")
        : "",
      origin: manifestMetadataHash["Dates / origin"]
        ? manifestMetadataHash["Dates / origin"].join("<br>")
        : "",
      dateIssued: manifestMetadataHash["Date Issued"]
        ? manifestMetadataHash["Date Issued"].toString()
        : "",
      tableOfContents: manifestMetadataHash["Table of Contents"]
        ? manifestMetadataHash["Table of Contents"].toString()
        : "",
      locations: manifestMetadataHash["Library Locations"]
        ? manifestMetadataHash["Library Locations"].join("<br>")
        : "",
      subjects: manifestMetadataHash["Subjects"]
        ? manifestMetadataHash["Subjects"].join("<br>")
        : "",
      genres: manifestMetadataHash["Genres"]
        ? manifestMetadataHash["Genres"].join("<br>")
        : "",
      notes: manifestMetadataHash["Notes"]
        ? manifestMetadataHash["Notes"].toString()
        : "",
      physicalDescription: manifestMetadataHash["Physical Description"]
        ? manifestMetadataHash["Physical Description"].join("<br>")
        : "",
      typeOfResource: manifestMetadataHash["Resource Type"]
        ? manifestMetadataHash["Resource Type"].join("<br>")
        : "",
      abstract: manifestMetadataHash["Abstract"]
        ? manifestMetadataHash["Abstract"].toString()
        : "",
      languages: manifestMetadataHash["Languages"]
        ? manifestMetadataHash["Lanugages"].toString()
        : "",
      link: manifestMetadataHash["Link"]
        ? manifestMetadataHash["Link"].toString()
        : "",
      identifiers: manifestMetadataHash["Identifiers"]
        ? manifestMetadataHash["Identifiers"].join("<br>")
        : "",
      access: manifestMetadataHash["Access"]
        ? manifestMetadataHash["Access"].toString()
        : "",
      rights: manifestMetadataHash["Rights"]
        ? manifestMetadataHash["Rights"].toString()
        : "",
    };
    const identifiers = manifestMetadataHash["Identifiers"];
    const catalogLink = identifiers.find((identifier) =>
      identifier.includes("NYPL Catalog ID (bNumber)")
    );
    this.catalogLink = catalogLink ? catalogLink : "";
    const archivesLink = identifiers.find((identifier) => {
      identifiers.includes("Archives ID");
    });

    this.archivesLink = archivesLink ? archivesLink : "";
  }
}
