import {
  Flex,
  Heading,
  Text,
  Link,
} from "@nypl/design-system-react-components";
import Image from "next/image";
import useBreakpoints from "@/src/hooks/useBreakpoints";
import { useFeedbackContext } from "@/src/context/FeedbackProvider";

export default function ErrorPage() {
  const { onOpen } = useFeedbackContext();
  const { isLargerThanLargeMobile } = useBreakpoints();
  return (
    <Flex
      flexDir="column"
      marginTop="xxl"
      marginBottom="xxl"
      marginLeft="l"
      marginRight="l"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Image
        src="/error-img.png"
        alt="Error image"
        width="98"
        height="68"
        style={{ marginBottom: "48px" }}
      />
      <Heading level="h3">Something went wrong on our end.</Heading>
      <Text
        sx={{
          marginBottom: "xxl",
        }}
      >
        We encountered an error while trying to load the page.{" "}
        {isLargerThanLargeMobile ? <br /> : null} Try refreshing the page or{" "}
        <Link onClick={onOpen} id={"feedback-link"}>
          contact us
        </Link>{" "}
        if the error persists.
      </Text>
      <Link type="buttonPrimary" href="/">
        Back to Digital Collections
      </Link>
    </Flex>
  );
}
