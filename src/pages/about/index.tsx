import { Box } from "@nypl/design-system-react-components";
import Header from "@/components/header/header";
import NotificationBanner from "@/components/notificationBanner/notificationBanner";
import aboutPageElements from "@/data/aboutPageElements";

export default function About() {
  function createSection(heading: React.JSX.Element, body: React.JSX.Element) {
    return (
      <>
        {heading}
        {body}
      </>
    );
  }

  return (
    <>
      <NotificationBanner />
      <Header />
      <Box
        sx={{
          maxWidth: "820px",
          margin: "s",
          [`@media screen and (min-width: 820px)`]: {
            margin: "auto",
          },
        }}
      >
        {aboutPageElements.map((section) =>
          createSection(section.heading, section.body)
        )}
      </Box>
    </>
  );
}
