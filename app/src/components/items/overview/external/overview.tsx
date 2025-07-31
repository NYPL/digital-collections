import { Box, Heading, Link, Text } from "@nypl/design-system-react-components";

const ExternalLinksOverview = ({ catalogLink, archivesLink, manifestURL }) => {
  return (
    <>
      <Box marginBottom="m">
        <Heading size="heading6" marginBottom="xs">
          {catalogLink && archivesLink ? "Data sources:" : "Data source:"}
        </Heading>
        {!catalogLink && !archivesLink && !manifestURL && (
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
            Finding Aid
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
            marginRight="xs"
          >
            Research Catalog
          </Link>
        )}
        {manifestURL && (
          <Link
            href={manifestURL}
            id={"iiif-manifest-btn"}
            isUnderlined={false}
            target="_blank"
            aria-label={`view IIIF manifest`}
            type="buttonSecondary"
            marginRight="xs"
          >
            IIIF Manifest
          </Link>
        )}
      </Box>
    </>
  );
};

export default ExternalLinksOverview;
