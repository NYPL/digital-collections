import { useState, useEffect } from "react";

export function useTooltipOffset(cardRef) {
  const [offset, setOffset] = useState<[number, number]>([0, -130]);
  const getOffset = () => {
    console.log("im running");
    if (cardRef.current) {
      const image = cardRef.current.children[0] as HTMLElement;
      const imageHeight = image.offsetHeight;
      const percentageOffset = imageHeight * 1.01;

      setOffset([0, -percentageOffset]);
    }
  };
  useEffect(() => {
    setTimeout(getOffset, 0);
    window.addEventListener("resize", getOffset);

    return () => {
      window.removeEventListener("resize", getOffset);
    };
  }, []);

  return offset;
}
