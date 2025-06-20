// Looks for the first <a href="..."> in the HTML string.
// Extracts and returns the href attribute’s value.
// If no match is found, returns null.
// ie. extractFirstHrefFromHTML("<span><a href='https://nypl.org'>Link</a></span>");
// → "https://nypl.org"
export function extractFirstHrefFromHTML(html: string): string | null {
  const match = html.match(/<a\s+(?:[^>]*?\s+)?href=["']([^"']+)["']/);
  return match?.[1] ?? null;
}

// Finds all <a> tags in the HTML string.
// Extracts both:
// The href attribute value
// The visible text inside the <a> tag
// Returns an array of objects like:
// { href: string, text: string }
// // → [
//     { href: "https://nypl.org", text: "NYPL" },
//     { href: "https://example.com", text: "Example" }
//   ]
export function extractAllAnchorsFromHTML(
  html: string
): { href: string; text: string }[] {
  const matches = [
    ...html.matchAll(/<a\s+[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/g),
  ];
  return matches.map(([, href, text]) => ({ href, text: text.trim() }));
}
