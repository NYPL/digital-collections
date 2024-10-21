import Image from "next/image";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { isCollectionCardDataType } from "./card";

const CardImage = ({ record }) => {
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

  const isCollection = isCollectionCardDataType(record);
  return (
    <div
      ref={imageRef}
      style={{
        overflow: "hidden",
        height: imageHeight,
      }}
    >
      <Image
        src={record.imageID ? record.imageURL : "/noImage.png"}
        alt=""
        id={
          record.imageID
            ? isCollection
              ? `image-${record.title}-${record.imageID}`
              : `image-${record.imageID}`
            : `no-image-${record.imageID}`
        }
        sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"
        style={{
          width: "100%",
          minHeight: "100%",
        }}
        width={288}
        height={144}
        onError={(_event) =>
          console.warn(
            `Card image failed to load, fallback image loaded instead. ImageURL: ${record.imageURL}`
          )
        }
      />
    </div>
  );
};

export default CardImage;
