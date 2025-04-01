import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const searchParams = url.searchParams;
  let modified = false;

  // Allowed params
  const allowedParams = new Set(["q", "sort", "page", "filters"]);

  // Transform "collection_keywords" to "q"
  if (searchParams.has("collection_keywords")) {
    const keywordValue = searchParams.get("collection_keywords");
    searchParams.delete("collection_keywords");
    searchParams.set("q", keywordValue!);
    modified = true;
  }

  // Transform "keywords" to "q"
  if (searchParams.has("keywords")) {
    const keywordValue = searchParams.get("keywords");
    searchParams.delete("keywords");
    searchParams.set("q", keywordValue!);
    modified = true;
  }

  // Drop specific sorts
  const dropSorts = ["score desc", "sortString desc", "keyDate_st asc"];
  if (
    searchParams.has("sort") &&
    dropSorts.includes(searchParams.get("sort")!)
  ) {
    searchParams.delete("sort");
    modified = true;
  }

  // Transform date digitized sort
  if (searchParams.get("sort") === "dateDigitized_dt asc") {
    searchParams.set("sort", "date-asc");
    modified = true;
  } else if (searchParams.get("sort") === "dateDigitized_dt desc") {
    searchParams.set("sort", "date-desc");
    modified = true;
  }

  // Transform title sort
  if (searchParams.get("sort") === "mainTitle_ns asc") {
    searchParams.set("sort", "title-asc");
    modified = true;
  } else if (searchParams.get("sort") === "mainTitle_ns desc") {
    searchParams.set("sort", "title-desc");
    modified = true;
  }

  // Drop scroll
  if (searchParams.has("scroll")) {
    searchParams.delete("scroll");
    modified = true;
  }

  // Transform filters into a object
  const filters: Record<string, string | string[]> = {};
  searchParams.forEach((value, key) => {
    if (key.startsWith("filters[")) {
      const match = key.match(/filters\[(.*?)\]/);
      if (match) {
        let filterKey = match[1];
        let filterValue = value;

        // Special transformation for rights filter
        if (filterKey === "rights" && filterValue === "pd") {
          filterValue = "publicDomain";
        }

        // Store filters in the object
        if (!filters[filterKey]) {
          filters[filterKey] = filterValue;
        } else {
          if (Array.isArray(filters[filterKey])) {
            (filters[filterKey] as string[]).push(filterValue);
          } else {
            filters[filterKey] = [filters[filterKey] as string, filterValue];
          }
        }
        searchParams.delete(key);
        modified = true;
      }
    }
  });

  // If there are any filters, append them to the URL
  if (Object.keys(filters).length > 0) {
    const filterString = Object.entries(filters)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return `${key}=${value.join("&" + key + "=")}`;
        }
        return `${key}=${value}`;
      })
      .join("&");
    searchParams.set("filters", filterString);
  }

  // Remove all other params except allowed ones
  for (const key of searchParams.keys()) {
    if (!allowedParams.has(key)) {
      searchParams.delete(key);
      modified = true;
    }
  }

  // Redirect if changes were made
  if (modified) {
    const newUrl = `${url.origin}${url.pathname}?${searchParams.toString()}`;
    return NextResponse.redirect(newUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
