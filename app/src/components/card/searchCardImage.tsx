import Image from "next/image";
import React from "react";
import { useState } from "react";
import { Box } from "@nypl/design-system-react-components";
import SearchCardType from "@/src/types/SearchCardType";

type SearchCardImageProps = {
  record: SearchCardType;
  viewMode: "grid" | "list";
};

export const SearchCardImage = ({ record, viewMode }: SearchCardImageProps) => {
  const fallbackImageSrc = {
    Image: "/noImage.png",
    Audio: "/noAudio.png",
    Video: "/noVideo.png",
  }[record.contentType ?? "Image"];
  const [imageSrc, setImageSrc] = useState(
    record.videoThumbnail ||
      (record.imageID ? record.imageURL : fallbackImageSrc)
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
          // objectFit: "contain",
          objectFit: viewMode === "grid" ? "contain" : "cover",
          // objectPosition: "center",
          backgroundColor: "#f5f5f5",
        }}
        onError={(_event) => {
          console.warn(
            `SearchCardImage: Card image failed to load, fallback image loaded instead. ImageURL: ${record.imageURL}`
          );
          setImageSrc(fallbackImageSrc);
        }}
      />
    </Box>
  );
};

export default SearchCardImage;
