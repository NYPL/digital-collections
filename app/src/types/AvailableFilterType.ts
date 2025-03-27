export type AvailableFilter = {
  name: string;
  options: AvailableFilterOption[];
};

export type AvailableFilterOption = {
  name: string;
  count: number;
};
