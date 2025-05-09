import { AvailableFilterOption } from "./AvailableFilterType";

export type CollectionSearchParamsType = {
  q: string;
  sort: string;
  filters: string;
  page: number;
  availableFilters?: Record<string, AvailableFilterOption[]>;
};

export default CollectionSearchParamsType;
