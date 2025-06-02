import { AvailableFilterOption } from "./AvailableFilterType";

export type SearchResultsType = {
  keyword: string;
  numResults: number;
  page: number;
  perPage: number;
  rightsFilter: string | null;
  dateStart: string | null;
  dateEnd: string | null;
  availableFilters: Record<string, AvailableFilterOption[]>;
  sort: string;
  results: SearchResultType[];
};

export type SearchResultType = {
  title: string;
  partName: string;
  uuid: string;
  imageID: string;
  recordType: string;
  typeOfResource?: string[];
  highlights;
  firstIndexed_dt: string;
  containsMultipleCaptures?: boolean;
  numberOfDigitizedItems: number;
  containsAVMaterial: boolean;
  containsOnSiteMaterial: boolean;
  contentType: string[] | null;
  score: number;
};
