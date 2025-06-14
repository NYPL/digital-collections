type MetadataField = {
  label: { en: string[] };
  value: { en: string[] };
};

type ManifestMetadata = Record<string, string[]>;

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
