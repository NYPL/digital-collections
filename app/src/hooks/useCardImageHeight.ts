import { useState, useEffect } from "react";

/**
 * Calculates the height of the image in the DCCard component as it resizes with the window,
 * returns it to the CardImage so its parent container can cut off overflow accordingly.
 */

export function useCardImageHeight(cardRef) {
  const [imageHeight, setImageHeight] = useState(144);
  useEffect(() => {
    const updateImageHeight = () => {
      if (cardRef.current) {
        const image = cardRef.current as HTMLElement;
        const imageWidth = image.offsetWidth;

        setImageHeight(0.5 * imageWidth);
      }
    };
    updateImageHeight();
    window.addEventListener("resize", updateImageHeight);

    return () => window.removeEventListener("resize", updateImageHeight);
  }, []);
  return imageHeight;
}
