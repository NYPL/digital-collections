import { Box, Heading, Link, Text } from "@nypl/design-system-react-components";

export const parseHtmlString = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const anchor = doc.querySelector("a");
  return {
    href: anchor?.getAttribute("href"),
    text: anchor?.textContent,
  };
};

const ExternalLinksOverview = ({ item }) => {
  return (
    <>
      <Box
        marginTop="m"
        // marginBottom="m"
      >
        <Heading size="heading6" marginBottom="xs">
          View this item elsewhere
        </Heading>
        {!item.catalogLink && !item.archivesLink && (
          <Text>This item does not have any external references yet</Text>
        )}
        {item.archivesLink && (
          <Link
            href={parseHtmlString(item.archivesLink).href}
            id={"finding-aid-btn"}
            isUnderlined={false}
            target="_blank"
            aria-label={`view finding aid`}
            type="buttonSecondary"
            marginRight="xs"
          >
            View Finding Aid
          </Link>
        )}
        {item.catalogLink && (
          <Link
            href={parseHtmlString(item.catalogLink).href}
            id={"catalog-btn"}
            isUnderlined={false}
            target="_blank"
            aria-label={`view in catalog`}
            type="buttonSecondary"
          >
            View Catalog
          </Link>
        )}
      </Box>
    </>
  );
};

export default ExternalLinksOverview;
