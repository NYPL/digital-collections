import { Icon } from "@chakra-ui/react";
import { TRANSLATION_SVG_PATH } from "../../utils/translationUtils";
export interface GTranslateIconProps {
  isVisible?: boolean;
  isMobile?: boolean;
}

const GTranslateIcon = ({
  isVisible = false,
  isMobile = false,
}: GTranslateIconProps) => {
  return (
    <Icon
      viewBox="0 0 16 16"
      boxSize="24px"
      position={isMobile ? "relative" : "absolute"}
      insetInlineStart={isMobile ? undefined : "4px"}
      top={isMobile ? undefined : "4px"}
      pointerEvents="none"
      style={{ display: isVisible ? "block" : "none" }}
    >
      <g fill="black">
        <path d={TRANSLATION_SVG_PATH} />
      </g>
    </Icon>
  );
};

export default GTranslateIcon;
