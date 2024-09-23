import React from "react";
import { Metadata } from "next";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import SearchResults from "../../src/components/search/results";
import { getCollections, RepoAPICall } from "@/src/utils/api";

export type SearchProps = {
  params: { slug: string };
  searchParams: { page: string };
};

// export const metadata: Metadata = {
//   title: "Search - NYPL Digital Collections",
// };

// export async function generateMetadata({
//   params,
// }: SearchProps): Promise<Metadata> {
//   return {
//     title: `Search - NYPL Digital Collections`,
//   };
// }

export default async function Search() {
  // const initialData = await RepoAPICall('https://api.repo.nypl.org/api/v2/items/search?q=[search-terms]&publicDomainOnly=true')
  const initialData = await getCollections();
  console.log(`initial data is: ${initialData}`);
  return (
    <PageLayout
      activePage="collections"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Keyword Search", url: "/search/index" },
      ]}
      adobeAnalyticsPageName="search"
    >
      <SearchResults showFilter={false} data={{ initialData }} />
    </PageLayout>
  );
}
