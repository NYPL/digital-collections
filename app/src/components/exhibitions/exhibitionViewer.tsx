"use client";
import React from "react";

interface ExhibitionViewerProps {
  manifestURL: any;
  slug: string;
}

const ExhibitionViewer = ({ manifestURL, slug }: ExhibitionViewerProps) => {
  return (
    <>
      {slug === "exhibit" ? (
        <iframe
          src="https://www.exhibit.so/exhibits/ZdQduGmrysoAk17TFaMN?embedded=true"
          width="1200"
          height="800"
          allowfullscreen
          allow="autoplay"
          frameborder="0"
        ></iframe>
      ) : (
        <iframe
          src={manifestURL}
          height="800"
          width="1200"
          title="Iframe Example"
        ></iframe>
      )}
    </>
  );
};

export default ExhibitionViewer;
