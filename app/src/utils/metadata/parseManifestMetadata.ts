import type { MetadataT } from "maniiifest/dist/specification";

export type MetadataField = {
  label: { en: string[] };
  value: { en: string[] };
};
export type ManifestMetadata = Record<string, string[]>;

// annoying methods to convert Typescript types
export function convertManiiifestMetadata(raw: MetadataT[]): MetadataField[] {
  return raw.map((entry) => ({
    label: toLanguageMap(entry.label),
    value: toLanguageMap(entry.value),
  }));
}

function toLanguageMap(langArray: [string, string[]][]): { en: string[] } {
  const map = Object.fromEntries(langArray);
  // fallback to `en` or empty array
  return {
    en: map.en ?? [],
  };
}

export function parseManifestMetadata(
  metadata: MetadataField[]
): ManifestMetadata {
  const result: ManifestMetadata = {};

  for (const field of metadata) {
    const label = field.label?.en?.[0];
    const values = field.value?.en || [];

    if (label && values.length) {
      result[label] = values;
    }
  }

  return result;
}
