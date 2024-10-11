import { headerBreakpoints } from "@/src/utils/breakpoints";
import {
  Box,
  Heading,
  Button,
  Text,
  Link,
} from "@nypl/design-system-react-components";
import Image from "next/image";
import { useFeedbackContext } from "../../pageLayout/pageLayout";
import useBreakpoints from "@/src/hooks/useBreakpoints";

export default function ErrorPage() {
  const { onOpen } = useFeedbackContext();
  const { isLargerThanLargeMobile } = useBreakpoints();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "xxl",
        marginBottom: "xxl",
        marginLeft: "l",
        marginRight: "l",
        textAlign: "center",
      }}
    >
      <Image
        src="/error-img.png"
        alt="Error image"
        width="98"
        height="68"
        style={{ marginBottom: "48px" }}
      />
      <Heading overline="Error 500" level="h3">
        Something went wrong on our end.
      </Heading>
      <Text
        size="body1"
        sx={{
          marginBottom: "xl",
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
    </Box>
  );
}
