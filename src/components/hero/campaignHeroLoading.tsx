import { SkeletonLoader } from "@nypl/design-system-react-components";

const CampaignHeroLoading = () => {
  return (
    <SkeletonLoader
      data-testid="hero-skeleton-loader"
      imageAspectRatio="landscape"
      showContent={false}
      showHeading={false}
    />
  );
};

export default CampaignHeroLoading;
