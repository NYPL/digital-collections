import {
  extractFirstHrefFromHTML,
  extractAllAnchorsFromHTML,
} from "./extractAnchorHrefs";

describe("extractFirstHrefFromHTML", () => {
  it("returns the first href in a simple anchor tag", () => {
    const html = "<span><a href='https://example.com'>Example</a></span>";
    const result = extractFirstHrefFromHTML(html);
    expect(result).toBe("https://example.com");
  });

  it("returns null when no anchor tag is present", () => {
    const html = "<span>No links here</span>";
    const result = extractFirstHrefFromHTML(html);
    expect(result).toBeNull();
  });

  it("handles double quotes in href", () => {
    const html = '<a href="https://double.com">Double</a>';
    const result = extractFirstHrefFromHTML(html);
    expect(result).toBe("https://double.com");
  });
});

describe("extractAllAnchorsFromHTML", () => {
  it("returns all hrefs and texts from multiple anchor tags", () => {
    const html = `
      <span><a href='https://one.com'>One</a></span>
      <span><a href="https://two.com">Two</a></span>
    `;
    const result = extractAllAnchorsFromHTML(html);
    expect(result).toEqual([
      { href: "https://one.com", text: "One" },
      { href: "https://two.com", text: "Two" },
    ]);
  });

  it("returns an empty array if no anchors exist", () => {
    const html = "<div>Nothing here</div>";
    const result = extractAllAnchorsFromHTML(html);
    expect(result).toEqual([]);
  });

  it("trims whitespace from anchor text", () => {
    const html = "<a href='https://site.com'>   Hello World   </a>";
    const result = extractAllAnchorsFromHTML(html);
    expect(result[0].text).toBe("Hello World");
  });
});
