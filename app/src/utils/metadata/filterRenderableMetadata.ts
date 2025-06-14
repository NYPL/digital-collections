export const metadataFieldToDisplay: Record<string, string> = {
  title: "Title",
  collection: "Collection",
  names: "Names",
  origin: "Date / Origin",
  tableOfContents: "Table Of Contents",
  locations: "Library Location",
  subjects: "Subjects",
  genres: "Genres",
  notes: "Notes",
  physicalDescription: "Physical Description",
  abstract: "Abstract",
  languages: "Languages",
  link: "Link",
  identifiers: "Identifiers",
  access: "Access",
  rights: "Rights",
  typeOfResource: "Type Of Resource",
  dateCreated: "Date Created",
  dateIssued: "Date Issued",
};

export function getRenderableMetadata(
  metadata: Record<string, string | undefined>
): Record<string, string> {
  const result: Record<string, string> = {};

  for (const key of Object.keys(metadataFieldToDisplay)) {
    const val = metadata[key];
    if (val && val !== "") {
      result[key] = val;
    }
  }

  return result;
}
