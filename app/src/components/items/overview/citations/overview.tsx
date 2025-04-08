import { Box, Flex, Heading, Text } from "@nypl/design-system-react-components";

const citationFormatDummyData = {
  "MLA format": `Manuscripts and Archives Division, The New York Public Library. "Explicit, final note and (last rule line) erased ex libris. 2-line initials with penwork, name of book in red and blue" The New York Public Library Digital Collections. 1200 - 1299. https://digitalcollections.nypl.org/items/510d47da-e36e-a3d9-e040-e00a18064a99`,
  "APA format": `Manuscripts and Archives Division, The New York Public Library. (1200 - 1299). Explicit, final note and (last rule line) erased ex libris. 2-line initials with penwork, name of book in red and blue Retrieved from https://digitalcollections.nypl.org/items/510d47da-e36e-a3d9-e040-e00a18064a99`,
  "Chicago/Turabian Format": `Manuscripts and Archives Division, The New York Public Library. "Explicit, final note and (last rule line) erased ex libris. 2-line initials with penwork, name of book in red and blue" New York Public Library Digital Collections. Accessed March 13, 2025. https://digitalcollections.nypl.org/items/510d47da-e36e-a3d9-e040-e00a18064a99`,
  "Wikipedia Citation": `<ref name=NYPL>{{cite web | url=https://digitalcollections.nypl.org/items/510d47da-e36e-a3d9-e040-e00a18064a99 | title= (text) Explicit, final note and (last rule line) erased ex libris. 2-line initials with penwork, name of book in red and blue, (1200 - 1299)|author=Digital Collections, The New York Public Library |accessdate=March 13, 2025 |publisher=The New York Public Library, Astor, Lenox, and Tilden Foundations}}</ref>`,
};

const CitationsOverview = ({ item }) => {
  console.log("item.metadata is: ", item.metadata);
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
              <>
                <Text key={index} size="overline1" marginBottom="xs">
                  {field}
                </Text>
                <Text key={index} marginBottom="m">
                  {value}
                </Text>
              </>
            );
          }
        })}
        {/* </Flex> */}
      </Box>
    </>
  );
};

export default CitationsOverview;
