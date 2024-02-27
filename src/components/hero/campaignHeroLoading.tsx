import { SkeletonLoader } from "@nypl/design-system-react-components";

const CampaignHeroLoading = () => {
  return (
    <SkeletonLoader
      imageAspectRatio="landscape"
      showContent={false}
      showHeading={false}
    />
  );
};

export default CampaignHeroLoading;
