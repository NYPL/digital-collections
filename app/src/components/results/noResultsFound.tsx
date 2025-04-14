import {
  Flex,
  Heading,
  Text,
  List,
} from "@nypl/design-system-react-components";
import styles from "../../styles/Collections.module.css";

export default function NoResultsFound({
  searchTerm,
  page,
  isCollections = false,
}) {
  const headingText = searchTerm
    ? `No results for "${searchTerm}"
    ${page > 1 ? `found on page ${page}` : ``}`
    : "No results";
  return (
    <Flex
      flexDir="column"
      marginBottom="xxl"
      marginRight="l"
      alignItems="left"
      justifyContent="left"
      textAlign="left"
    >
      <Heading level="h2" size="heading5">
        {headingText}
      </Heading>
      <Text>Try the following to improve your search:</Text>
      <List className={styles.list} type="ul">
        <li>Use an exact phrase.</li>
        <li>Check your spelling and expand acronyms.</li>
        <li>Reduce the number of keywords, or use more general terms.</li>
        {!isCollections && (
          <li>Remove or modify filters to broaden your search.</li>
        )}
      </List>
    </Flex>
  );
}
