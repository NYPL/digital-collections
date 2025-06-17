import { Box, Flex, Heading, Text } from "@nypl/design-system-react-components";
import { Fragment } from "react";
import parse from "html-react-parser";

// Helper function to parse anchor tag from HTML string
// annoyingly redundant
const parseHtmlString = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const anchor = doc.querySelector("a");
  return {
    href: anchor?.getAttribute("href"),
    text: anchor?.textContent,
  };
};

// TO DO: generate on the fly: https://github.com/NYPL/digitalreadingroom/blob/qa/app/views/partials/_item_metadata.html.erb
// TO DO: add tests for citations, use https://digitalcollections.nypl.org/items/a3fff740-395b-0138-983a-7f56d1f9ecb7#/?uuid=9cf949b0-d298-0139-4999-0242ac110003 as example
const CitationsOverview = ({ item }) => {
  const metadata = item.metadata;
  const shareUrl = item.link;

  const location = parseHtmlString(metadata?.locations?.split("<br>")[0]).text;
  const resource = parseHtmlString(
    metadata?.typeOfResource?.split("<br>")[0]
  ).text;

  const today = new Date().toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // TO DO: metadata.origin should be metadata.date_created
  const MLA = `<p>
    ${location ? location : ""},
    The New York Public Library. "${metadata.title}"
    <em>The New York Public Library Digital Collections</em>.
    ${metadata.origin ? metadata.origin + "." : ""}
    ${metadata.dateIssued ? metadata.dateIssued + "." : ""}
    ${shareUrl} 
  </p>`;

  const CHICAGO = `<p>
  ${location ? location : ""},
  The New York Public Library. "${metadata.title}"
    New York Public Library Digital Collections.
    Accessed ${today}.
    ${shareUrl}
    </p>
  `;
  // TO DO: metadata.origin should be metadata.date_created
  const APA = `
      <p>
      ${location ? location : ""},
      The New York Public Library.
          ${metadata.origin ? metadata.origin + "." : ""}
          ${metadata.dateIssued ? metadata.dateIssued + "." : ""}
          <em>${metadata.title}</em>
          Retrieved from ${shareUrl}
      </p>`;

  // TO DO: metadata.origin should be metadata.date_created
  // TO DO: replace metadata.orgin conditional with an if else, see code in OG DC for details
  const WIKI = `
          <p>
<p>&lt;ref name=NYPL&gt;{{cite web | url=${shareUrl} | title=
${resource ? "(" + resource + ")" : ""}
${metadata.title}
${metadata.origin ? "(" + metadata.origin + ")" : ""}${
    metadata.dateIssued ? "(" + metadata.dateIssued + ")" : ""
  }
| author=Digital Collections, The New York Public Library | accessdate=${today} | publisher=The New York Public Library, Astor, Lenox, and Tilden Foundations}}&lt;/ref&gt;</p>
  `;

  const citationFormatDummyData = {
    "MLA format": MLA,
    "APA format": APA,
    "Chicago/Turabian Format": CHICAGO,
    "Wikipedia citation": WIKI,
  };

  return (
    <>
      <Box>
        <Heading size="heading6" marginBottom="xs">
          Cite this item
        </Heading>

        {Object.keys(citationFormatDummyData)?.map((field, index) => {
          const value = citationFormatDummyData[field];
          if (value !== "") {
            return (
              <Fragment key={`citation-${field}`}>
                <Text size="overline1" marginBottom="xs">
                  {field}
                </Text>
                <Text marginBottom="m">{parse(value)}</Text>
              </Fragment>
            );
          }
        })}
        {/* </Flex> */}
      </Box>
    </>
  );
};

export default CitationsOverview;
