import {
  Flex,
  Heading,
  Text,
  Link,
  List,
} from "@nypl/design-system-react-components";
import Image from "next/image";
import useBreakpoints from "@/src/hooks/useBreakpoints";
import { useFeedbackContext } from "@/src/context/FeedbackProvider";

export default function NoResultsFound({ searchTerm }) {
  console.log("searchTerm is: ", searchTerm);
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
