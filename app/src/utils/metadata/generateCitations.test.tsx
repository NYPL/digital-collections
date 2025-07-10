import { generateCitations } from "./generateCitations";

describe("generateCitations", () => {
  const input = {
    title: "Test Title",
    link: "https://nypl.org/item/abc",
    location: "Main Branch",
    resource: "Text",
    dateIssued: "1902",
  };

  const result = generateCitations(input);

  it("returns all 4 citation formats", () => {
    expect(result).toHaveProperty("MLA format");
    expect(result).toHaveProperty("APA format");
    expect(result).toHaveProperty("Chicago/Turabian Format");
    expect(result).toHaveProperty("Wikipedia citation");
  });

  it("includes the title and link in all citations", () => {
    Object.values(result).forEach((citation) => {
      expect(citation).toContain("Test Title");
      expect(citation).toContain("https://nypl.org/item/abc");
    });
  });

  it("includes today’s date in Chicago and Wikipedia citations", () => {
    const today = new Date().toLocaleDateString("en-us", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    expect(result["Chicago/Turabian Format"]).toContain(today);
    expect(result["Wikipedia citation"]).toContain(today);
  });
});
