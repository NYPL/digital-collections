import { Box, Flex, Heading, Text } from "@nypl/design-system-react-components";
import { Fragment } from "react";
import parse from "html-react-parser";

// TO DO: generate on the fly: https://github.com/NYPL/digitalreadingroom/blob/qa/app/views/partials/_item_metadata.html.erb
// TO DO: add tests for citations, use https://digitalcollections.nypl.org/items/a3fff740-395b-0138-983a-7f56d1f9ecb7#/?uuid=9cf949b0-d298-0139-4999-0242ac110003 as example
const CitationsOverview = ({ citationData }) => {
  console.log("citationData is: ", citationData);

  return (
    <>
      <Box>
        <Heading size="heading6" marginBottom="xs">
          Cite this item
        </Heading>

        {Object.keys(citationData)?.map((field, index) => {
          const value = citationData[field];
          if (value !== "") {
            return (
              <Fragment key={`citation-${field}`}>
                <Text size="overline1" marginBottom="xs">
                  {field}
                </Text>
                <Box marginBottom="m">{parse(value)}</Box>
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
