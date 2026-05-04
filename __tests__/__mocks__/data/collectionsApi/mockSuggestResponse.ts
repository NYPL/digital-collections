import { type SuggestResult } from "@/src/components/search/searchSuggestions";

export const mockSuggestResponse: { suggestions: SuggestResult[] } = {
  suggestions: [
    {
      uuid: "aaa1-0001",
      title: "Cromwell Family Papers",
      type: "Collection",
    },
    {
      uuid: "bbb2-0002",
      title: "Cromwell, Oliver — Portraits",
      type: "Item",
    },
    {
      uuid: "ccc3-0003",
      title: "Cromwell Avenue, Bronx",
      type: "Item",
    },
  ],
};
