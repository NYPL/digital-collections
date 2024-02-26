import { SkeletonLoader } from "@nypl/design-system-react-components";

const CampaignHeroLoading = () => {
  return (
    // the height of the placeholder image is too large but I only see a width param in the storybook docs
    <SkeletonLoader showContent={false} showHeading={false} />
  );
};

export default CampaignHeroLoading;
