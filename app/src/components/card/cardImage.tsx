import Image from "next/image";
import React from "react";
import { useState } from "react";
import { DCCardProps } from "./card";

interface CardImageProps extends Pick<DCCardProps, "record"> {
  imageHeight: number;
}

export const CardImage = ({ record, imageHeight }: CardImageProps) => {
  const [imageSrc, setImageSrc] = useState(
    record.imageID ? record.imageURL : "/noImage.png"
  );
  const initialImageHeight = 144;
  return (
    <div
      style={{
        overflow: "hidden",
        height: imageHeight,
      }}
    >
      <Image
        src={imageSrc}
        alt=""
        id={
          record.imageID
            ? `image-${record.imageID}`
            : `no-image-${record.imageID}`
        }
        sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"
        style={{
          width: "100%",
          minHeight: "100%",
          height: "auto",
        }}
        quality={100}
        placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8WQ8AAlcBas53/MIAAAAASUVORK5CYII="
        width={initialImageHeight * 2}
        height={initialImageHeight}
        onError={(_event) => {
          console.warn(
            `CardImage: Card image failed to load, fallback image loaded instead. ImageURL: ${record.imageURL}`
          );
          setImageSrc("/noImage.png");
        }}
      />
    </div>
  );
};

export default CardImage;
