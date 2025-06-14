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

function toLanguageMap(lang: [string, string[]][] | { en: string[] }): {
  en: string[];
} {
  // If it's already in object format, return as-is
  if (!Array.isArray(lang)) {
    return {
      en: lang.en ?? [],
    };
  }

  // Otherwise, convert from [string, string[]][] to { en: string[] }
  const map = Object.fromEntries(lang);
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
