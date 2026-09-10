import { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import GTranslateIcon from "./gTranslateIcon";

const GTranslateDropdown = () => {
  const gtranslateRef = useRef<HTMLDivElement>(null);
  const [isSelectRendered, setIsSelectRendered] = useState(false);

  useEffect(() => {
    // This mutation observer logic is necessary to prevent the globe icon
    // from displaying before the GTranslate dropdown has been loaded onscreen

    const gtSelector =
      gtranslateRef.current?.querySelector<HTMLDivElement>(".gt_selector");
    if (gtSelector) {
      setIsSelectRendered(true);
      return;
    }

    const mutationObserver = new MutationObserver(() => {
      const gtSelector =
        gtranslateRef.current?.querySelector<HTMLDivElement>(".gt_selector");
      if (gtSelector) {
        setIsSelectRendered(true);
        mutationObserver.disconnect();
      }
    });

    mutationObserver.observe(gtranslateRef.current!, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <Box
      sx={{
        marginBottom: "xs",
        marginLeft: "m",
        color: "ui.black",
        minWidth: "161.5px",
        minHeight: "32px",
        position: "relative",
      }}
    >
      <GTranslateIcon isVisible={isSelectRendered} />
      <div ref={gtranslateRef} className="gtranslate_wrapper" />
    </Box>
  );
};

export default GTranslateDropdown;
