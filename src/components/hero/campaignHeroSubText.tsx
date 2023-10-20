
import {
	Link as DSLink,
  HorizontalRule,
	Text,
  Spacer,
} from "@nypl/design-system-react-components";
import React from "react";

const CampaignHeroSubText = () => {
   return (  
     <>
     {/* To Do: make the link color blue: */}
        <Text sx={{"lineHeight":"24px", }}color="ui.typography.body">
          This site is a living database with new materials added every day,
          featuring prints, photographs, maps, manuscripts, streaming video, and
          more.
        </Text>
        <Text color="ui.typography.body">
        Our collections include some content that may be harmful or difficult to <br /> view. <DSLink color="var(--nypl-colors-ui-link-primary) !important" href="https://digitalcollections.nypl.org/about#nypl_harmful_content_statement" aria-label="Learn more about harmful content" >Learn more</DSLink>
        </Text>
        <HorizontalRule/>
        <Text color="ui.typography.body" mb="0px">
        Featured Image:{" "}
        <DSLink color="var(--nypl-colors-ui-link-primary) !important" href="https://digitalcollections.nypl.org/items/510d47e0-cb17-a3d9-e040-e00a18064a99"> Momoyogusa = Flowers of a Hundred Generations. </DSLink>
        </Text>
      </>
    );
}

export default CampaignHeroSubText