import {
  Link as DSLink,
  HorizontalRule,
  Text,
  Spacer,
} from "@nypl/design-system-react-components";

const CampaignHeroSubText = ({ featuredItem }: any) => {
  return (
    <>
      {/* To Do: make the link color blue: */}
      <Text color="ui.typography.body">
        This site is a living database with new materials added every day,
        featuring prints, photographs, maps, manuscripts, streaming video, and
        more.
      </Text>
      <Text color="ui.typography.body">
        Our collections include some content that may be harmful or difficult to{" "}
        <br /> view.{" "}
        <DSLink
          color="var(--nypl-colors-ui-link-primary) !important"
          __css={{
            _hover: {
              color: "var(--nypl-colors-ui-link-secondary) !important",
            },
            _visited: {
              color: "var(--nypl-colors-ui-link-tertiary) !important",
            },
          }}
          href="https://digitalcollections.nypl.org/about#nypl_harmful_content_statement"
          aria-label="Learn more about harmful content"
          target="_blank"
        >
          Learn more
        </DSLink>
      </Text>
      <HorizontalRule />
      <Text color="ui.typography.body" mb="0px">
        Featured Image:{" "}
        <DSLink
          color="var(--nypl-colors-ui-link-primary) !important"
          __css={{
            display: "inline !important",
            _hover: {
              color: "var(--nypl-colors-ui-link-secondary) !important",
            },
            _visited: {
              color: "var(--nypl-colors-ui-link-tertiary) !important",
            },
          }}
          href={featuredItem.href}
        >
          {" "}
          {featuredItem.title.$}{" "}
        </DSLink>
      </Text>
    </>
  );
};

export default CampaignHeroSubText;
