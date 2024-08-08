export interface CampaignHeroHeadingProps {
  numberOfDigitizedItems: string;
}

export interface CampaignHeroSubtextProps {
  featuredItem: {
    title: string;
    uuid: string;
    href: string;
    imageID: string;
    backgroundImageSrc: string;
    foregroundImageSrc: string;
  };
}
