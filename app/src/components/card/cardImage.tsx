import Image from "next/image";
import React from "react";
import { useEffect, useRef, useState } from "react";

const CardImage = ({ collection }) => {
  const [imageHeight, setImageHeight] = useState(144);
  const imageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const updateImageHeight = () => {
      if (imageRef.current) {
        const image = imageRef.current as HTMLElement;
        const imageWidth = image.offsetWidth;

        setImageHeight(0.5 * imageWidth);
      }
    };
    updateImageHeight();
    window.addEventListener("resize", updateImageHeight);

    return () => window.removeEventListener("resize", updateImageHeight);
  }, []);

  return (
    <div
      ref={imageRef}
      style={{
        overflow: "hidden",
        height: imageHeight,
      }}
    >
      <Image
        src={collection.imageID ? collection.imageURL : "/noImage.png"}
        alt=""
        sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={288}
        height={144}
      />
    </div>
  );
};

export default CardImage;
