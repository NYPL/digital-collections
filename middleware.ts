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
    if (keywordValue && keywordValue.length > 0) {
      searchParams.set("q", keywordValue!);
    }
    modified = true;
  }

  // Drop specific sorts
  const dropSorts = [
    "score desc",
    "sortString desc",
    "sortString asc",
    "keyDate_st asc",
    "keyDate_st desc",
  ];
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

  // Transform filters into an object
  const filtersObj: Record<string, string[]> = {};

  searchParams.forEach((value, key) => {
    const match = key.match(/^filters\[(.*?)\](?:\[\])?$/);
    if (match) {
      let filterKey = match[1];
      let filterValue = decodeURIComponent(value);
      if (filterKey === "rights" && filterValue === "pd") {
        filterValue = "publicDomain";
      }
      if (filterKey === "date") {
        // Regular expression to match end date x-9999, start date -9999-x, or x-x (both)
        const datePattern = /^(-?\d{4})?-(-?\d{4})?$/;
        const dateMatch = filterValue.match(datePattern);
        if (dateMatch) {
          const [, start, end] = dateMatch;
          if (start && start !== "-9999") {
            filtersObj["dateStart"] = [start];
          }
          if (end && end !== "9999") {
            filtersObj["dateEnd"] = [end];
          }
        }
        modified = true;
      } else {
        if (!filtersObj[filterKey]) {
          filtersObj[filterKey] = [];
        }
        filtersObj[filterKey].push(filterValue);
        modified = true;
      }
    } else if (key === "year_begin" || key === "year_end") {
      // Replace with year_begin/year_end values if available
      let filterKey = key === "year_begin" ? "dateStart" : "dateEnd";
      let filterValue = decodeURIComponent(value);
      filtersObj[filterKey] = [filterValue];
      modified = true;
    }
  });

  // Remove old filter keys
  Object.keys(filtersObj).forEach((key) =>
    searchParams.delete(`filters[${key}]`)
  );

  // Reconstruct filters
  const filtersString = Object.entries(filtersObj)
    .map(([key, values]) => `[${key}=${values.join(",")}]`)
    .join("");

  if (filtersString) {
    searchParams.set("filters", filtersString);
  }

  // Remove all other params except allowed ones
  const keys = Array.from(searchParams.keys());
  keys.forEach((key) => {
    if (!allowedParams.has(key)) {
      searchParams.delete(key);
      modified = true;
    }
  });

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
