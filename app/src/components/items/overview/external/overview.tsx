import { Box, Heading, Link, Text } from "@nypl/design-system-react-components";

const ExternalLinksOverview = ({ catalogLink, archivesLink }) => {
  return (
    <>
      <Box marginTop="sm">
        <Heading size="heading6" marginBottom="xs">
          View this item elsewhere
        </Heading>
        {!catalogLink && !archivesLink && (
          <Text>This item does not have any external references yet</Text>
        )}
        {archivesLink && (
          <Link
            href={archivesLink}
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
        {catalogLink && (
          <Link
            href={catalogLink}
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
