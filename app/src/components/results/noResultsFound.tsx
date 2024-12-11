import {
  Flex,
  Heading,
  Text,
  List,
} from "@nypl/design-system-react-components";

export default function NoResultsFound({ searchTerm }) {
  const headingText = `No Results for "${searchTerm}"`;
  return (
    <Flex
      flexDir="column"
      marginTop="xxl"
      marginBottom="xxl"
      marginRight="l"
      alignItems="left"
      justifyContent="left"
      textAlign="left"
    >
      <Heading level="h5">{headingText}</Heading>
      <Text>Try the following to improve your search:</Text>
      <List type="ul">
        <li>Use an exact phrase.</li>
        <li>Check your spelling and expand acronyms.</li>
        <li>Reduce the number of keywords, or use more general terms.</li>
      </List>
    </Flex>
  );
}
