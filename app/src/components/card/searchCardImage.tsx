import Image from "next/image";
import React from "react";
import { useState } from "react";
import { Box } from "@nypl/design-system-react-components";

export const SearchCardImage = ({ record }) => {
  const [imageSrc, setImageSrc] = useState(
    record.imageID ? record.imageURL : "/noImage.png"
  );

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        height: "126px",
        "@media (max-width: 650px)": {
          height: "auto",
          aspectRatio: "16 / 9",
        },
      }}
    >
      <Image
        src={imageSrc}
        key={imageSrc}
        alt=""
        id={
          record.imageID
            ? `image-${record.imageID}`
            : `no-image-${record.imageID}-${record.uuid}`
        }
        sizes="(max-width: 650px) 100vw, 25vw"
        quality={100}
        placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8WQ8AAlcBas53/MIAAAAASUVORK5CYII="
        fill
        decoding="sync"
        style={{
          objectFit: "cover",
          objectPosition: "top",
        }}
        onError={(_event) => {
          console.warn(
            `SearchCardImage: Card image failed to load, fallback image loaded instead. ImageURL: ${record.imageURL}`
          );
          setImageSrc("/noImage.png");
        }}
      />
    </Box>
  );
};

export default SearchCardImage;
