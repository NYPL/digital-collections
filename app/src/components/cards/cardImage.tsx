import Image from "next/image";
import { useEffect, useState } from "react";

const CardImage = ({ collection }) => {
  const [imageWidth, setImageWidth] = useState(288);
  const [imageHeight, setImageHeight] = useState(0.5 * imageWidth);

  useEffect(() => {
    const updateImageWidth = () => {
      const smTabletBreakpoint = 768;
      const lgTabletBreakpoint = 1024;

      if (window.innerWidth >= lgTabletBreakpoint) {
        setImageWidth(288);
      } else if (window.innerWidth >= smTabletBreakpoint) {
        setImageWidth(480);
      } else {
        setImageWidth(480);
      }
      setImageHeight(0.5 * imageWidth);
    };

    updateImageWidth();
    window.addEventListener("resize", updateImageWidth);

    return () => window.removeEventListener("resize", updateImageWidth);
  }, []);

  return (
    <div
      style={{
        display: "inline-block",
        height: imageHeight,
        overflow: "hidden",
      }}
    >
      <Image
        src={collection.imageID ? collection.imageURL : "/noImage.png"}
        alt=""
        width={imageWidth}
        height={imageHeight}
      />
    </div>
  );
};

export default CardImage;
