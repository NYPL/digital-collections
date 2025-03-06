export type FacetFilter = {
  name: string;
  options: FacetFilterOption[];
};

export type FacetFilterOption = {
  name: string;
  count: number;
};
