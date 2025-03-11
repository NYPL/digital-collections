"use client";
import React, { useEffect } from "react";
import StoriiiesViewer from "@cogapp/storiiies-viewer";

interface ExhibitionViewerProps {
  manifestURL: any;
  slug: string;
}

const ExhibitionViewer = ({ manifestURL, slug }: ExhibitionViewerProps) => {
  useEffect(() => {
    const myViewer = new StoriiiesViewer({
      container: "#storiiies-viewer", // or document.querySelector("#storiiies-viewer")
      manifestUrl: manifestURL,
    });
  }, []);

  return (
    <>
      {slug === "exhibit" ? (
        <>
          {/* <StoriiiesViewer >
        </StoriiiesViewer> */}

          <iframe
            src="https://www.exhibit.so/exhibits/ZdQduGmrysoAk17TFaMN?embedded=true"
            width="1200"
            height="800"
            allowfullscreen
            allow="autoplay"
            frameborder="0"
          ></iframe>
        </>
      ) : (
        <>
          {/* <iframe
          src={manifestURL}
          height="800"
          width="1200"
          title="Iframe Example"
        ></iframe> */}
          <div
            id="storiiies-viewer"
            style={{ width: "1200px", height: "800px" }}
          ></div>
        </>
      )}
    </>
  );
};

export default ExhibitionViewer;
