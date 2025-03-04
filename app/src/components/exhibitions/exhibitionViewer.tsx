"use client";
import React from "react";

interface ExhibitionViewerProps {
  manifestURL: any;
}

const ExhibitionViewer = ({ manifestURL }: ExhibitionViewerProps) => {
  return (
    <>
      {/* <iframe src="demo_iframe.htm" height="200" width="300" title="Iframe Example"></iframe>
       */}
      <iframe
        src={manifestURL}
        height="800"
        width="1200"
        title="Iframe Example"
      ></iframe>
    </>
  );
};

export default ExhibitionViewer;
