import { headerBreakpoints } from "@/src/utils/breakpoints";
import { Banner } from "@nypl/design-system-react-components";

export const MobileSearchBanner = () => {
  return (
    <Banner
      sx={{
        marginBottom: "xs",
        display: "flex",
        [`@media (min-width: ${headerBreakpoints.smTablet}px)`]: {
          display: "none",
        },
      }}
      isDismissible
      type="informative"
      content="Digital Collections is optimized for desktop use. Some features may not be available on mobile devices."
    />
  );
};
