import { SkeletonLoader } from "@nypl/design-system-react-components";

const CampaignHeroLoading = () => {
  return (
    <SkeletonLoader
      sx={{ "> div": { height: "500px" } }}
      data-testid="hero-skeleton-loader"
      imageAspectRatio="landscape"
      showContent={false}
      showHeading={false}
      showButton={false}
    />
  );
};

export default CampaignHeroLoading;
