import { useState, useEffect } from "react";

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
