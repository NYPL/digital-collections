// utils/generateCitations.ts
export type CitationFormats =
  | "MLA format"
  | "APA format"
  | "Chicago/Turabian Format"
  | "Wikipedia citation";

export interface CitationInput {
  title: string;
  link: string;
  location?: string;
  resource?: string;
  dateIssued?: string;
}

export type CitationOutput = Record<CitationFormats, string>;

export function generateCitations(data: CitationInput): CitationOutput {
  const today = new Date().toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const { title, link, location, dateIssued, resource } = data;

  const MLA = `<p>${
    location ? location + ", " : ""
  }The New York Public Library. "${title}" <em>The New York Public Library Digital Collections</em>. ${
    dateIssued ? dateIssued + "." : ""
  } ${link}</p>`;

  const APA = `<p>${
    location ? location + ", " : ""
  }The New York Public Library. ${
    dateIssued ? `(${dateIssued})` + "." : ""
  } <em>${title}</em> Retrieved from ${link}</p>`;

  const CHICAGO = `<p>${
    location ? location + ", " : ""
  }The New York Public Library. "${title}" New York Public Library Digital Collections. Accessed ${today}. ${link}</p>`;

  const WIKI = `<p>&lt;ref name=NYPL&gt;{{cite web | url=${link} | title=${
    resource ? " (" + resource + ") " : ""
  }${title}${
    dateIssued ? " (" + dateIssued + ")" : ""
  } | author=Digital Collections, The New York Public Library | accessdate=${today} | publisher=The New York Public Library, Astor, Lenox, and Tilden Foundations}}&lt;/ref&gt;</p>`;

  return {
    "MLA format": MLA,
    "APA format": APA,
    "Chicago/Turabian Format": CHICAGO,
    "Wikipedia citation": WIKI,
  };
}
