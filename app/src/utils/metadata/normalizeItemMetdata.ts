import { MetadataField, ManifestMetadata } from "./parseManifestMetadata";
import { NormalizedItemMetadata } from "../../types/NormalizedItemMetadata";

function joinWithBr(val?: string[]): string {
  return val?.join("<br>") || "";
}

export function normalizeItemMetadataFromManifest(
  raw: ManifestMetadata
): NormalizedItemMetadata {
  return {
    title: raw["Title"]?.[0] || "",
    collection: joinWithBr(raw["Collection"]),
    names: joinWithBr(raw["Names"]),
    origin: joinWithBr(raw["Dates / Origin"]),
    dateIssued: raw["Date Issued"]?.[0] || "",
    tableOfContents: raw["Table Of Contents"]?.[0] || "",
    locations: joinWithBr(raw["Library Locations"]),
    subjects: joinWithBr(raw["Subjects"]),
    genres: joinWithBr(raw["Genres"]),
    notes: joinWithBr(raw["Notes"]),
    physicalDescription: joinWithBr(raw["Physical Description"]),
    typeOfResource: joinWithBr(raw["Resource Type"]),
    abstract: raw["Abstract"]?.[0] || "",
    languages: raw["Languages"]?.[0] || "",
    link: raw["Link"]?.[0] || "",
    identifiers: joinWithBr(raw["Identifiers"]),
    access: raw["Access"]?.[0] || "",
    rights: raw["Rights"]?.[0] || "",
  };
}
