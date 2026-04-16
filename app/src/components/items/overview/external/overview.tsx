import {
  Box,
  Heading,
  Link,
  Text,
  Button,
} from "@nypl/design-system-react-components";
// import { useCanvasContext } from "../../../../context/CanvasProvider";

const ExternalLinksOverview = ({ catalogLink, archivesLink, isInAllMaps }) => {
  return (
    <>
      <Box marginBottom="m">
        <Heading size="heading6" marginBottom="xs">
          {catalogLink && archivesLink ? "Data sources:" : "Data source:"}
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
            variant="buttonSecondary"
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
            variant="buttonSecondary"
            marginRight="xs"
          >
            Research Catalog
          </Link>
        )}

        {isInAllMaps ? (
          <Button
            onClick={() => {
              console.log("map view button clicked");
            }}
            id={"all-maps-btn"}
            aria-label={`view in All Maps Viewer`}
            variant="secondary"
            display={"inline"}
          >
            {`View on Map`}
            {/* {isMapView ? 'Close Map' : 'View on Map'} */}
          </Button>
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};

export default ExternalLinksOverview;
