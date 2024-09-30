import { useState, useEffect } from "react";

export type Offset = [number, number];

/**
 * Calculates the height of the image in the DCCard component as it resizes with the window,
 * then sets the position of the title's tooltip accordingly.
 */

export function useTooltipOffset(cardRef) {
  const initialImageHeight = -130;
  const [toolTipOffset, setToolTipOffset] = useState<Offset>([
    0,
    initialImageHeight,
  ]);
  const getOffset = () => {
    if (cardRef.current) {
      const image = cardRef.current.children[0] as HTMLElement;
      const imageHeight = image.offsetHeight;
      const slightlyMoreHeight = 1.01;
      const offset = imageHeight * slightlyMoreHeight;

      setToolTipOffset([0, -offset]);
    }
  };
  useEffect(() => {
    setTimeout(getOffset, 0);
    window.addEventListener("resize", getOffset);

    return () => {
      window.removeEventListener("resize", getOffset);
    };
  }, []);

  return toolTipOffset as Offset;
}
