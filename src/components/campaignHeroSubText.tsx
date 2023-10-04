
import {
	Box,
	Button,
	Card,
	CardContent,
	CardHeading,
	Flex,
	Heading,
	Hero,
	HorizontalRule,
	Link,
	SimpleGrid,
	Spacer,
	TemplateAppContainer,
	Text,
} from "@nypl/design-system-react-components";

const CampaignHeroSubText = () => {
   return (  
     <>
     {/* To Do: make the link color blue: */}
        <Text color="var(--nypl-colors-ui-typography-heading)">
          This site is a living database with new materials added every day,
          featuring prints, photographs, maps, manuscripts, streaming video, and
          more.
        </Text>
        {/* <br></br> */}
        <Text color="var(--nypl-colors-ui-typography-heading)">
        Our collections include some content that may be harmful or difficult to view. <Link href="https://digitalcollections.nypl.org/about#nypl_harmful_content_statement">Learn more</Link>
        </Text>
        <Text color="var(--nypl-colors-ui-typography-heading)">
        Featured Item: 
        <br></br>
        <Link href="https://digitalcollections.nypl.org/items/510d47e0-cb17-a3d9-e040-e00a18064a99"> Momoyogusa = Flowers of a Hundred Generations. </Link>
        </Text>
      </>
    );
}

export default CampaignHeroSubText