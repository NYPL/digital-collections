import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Button,
  ButtonGroup,
  TagSet,
  HorizontalRule,
} from "@nypl/design-system-react-components";
import parse from "html-react-parser";

const PrintOverview = ({ item, imageID }) => {
  console.log("imageID is: ", imageID);
  return (
    <>
      <Box
        marginTop="m"
        // marginBottom="m"
      >
        <Heading size="heading6" marginBottom="xs">
          Purchase this print
        </Heading>
        <Link
          href={`https://archivea.studio/?id=${imageID}`}
          id={"print-btn"}
          isUnderlined={false}
          target="_blank"
          aria-label={`order print`}
          type="buttonSecondary"
        >
          Order Print
        </Link>
      </Box>
    </>
  );
};

export default PrintOverview;
