"use client";

import { ItemModel } from "../../../models/item";
import React from "react";
import { UniversalViewer } from "../uv/universalViewerLazy";
import "universalviewer/dist/esm/index.css";
import { triggerAsyncId } from "async_hooks";
import {
  uvConfigOptions,
  uvConfigModules,
  uvConfigLocalisation,
  uvConfigContent,
} from "../uv/uvConfig";

interface ItemProps {
  item: ItemModel;
  canvasIndex: number;
}

// const uvConfig = {
//   modules: {
//     openSeadragonCenterPanel: {
//       options: {
//         animationTime: 0.15,
//         autoHideControls: true,
//         requiredStatementEnabled: true,
//         blendTime: 0,
//         constrainDuringPan: false,
//         controlsFadeAfterInactive: 10000,
//         controlsFadeDelay: 20000,
//         controlsFadeLength: 20000,
//         defaultZoomLevel: 0,
//         immediateRender: true,
//         maxZoomPixelRatio: 1.25,
//         navigatorPosition: "BOTTOM_RIGHT",
//         pageGap: 50,
//         showHomeControl: false,
//         trimAttributionCount: 150,
//         visibilityRatio: 0.5,
//         zoomToBoundsEnabled: false,
//       },
//       content: {
//         attribution: "Attribution",
//         goHome: "Go Home",
//         imageUnavailable: "Image Unavailable",
//         next: "Next",
//         previous: "Previous",
//         rotateRight: "Rotate Right",
//         zoomIn: "Zoom In",
//         zoomOut: "Zoom Out",
//       },
//     },
//     shareDialogue: {
//       options: {
//         /** Determines if copy buttons are enabled */
//         copyToClipboardEnabled: true,
//         /** Determines if embed is enabled */
//         embedEnabled: false,
//         /** Set host for embed code (default: window.location.hostname) */
//         // embedHost?: {window.location.hostname},
//         /** Set port for embed code (default: window.location.protocol) */
//         // embedPort?: {window.location.protocol},
//         /** Set path to uv.html on embed host (default: /uv.html) */
//         embedPath: 'uv.html',
//         /** Template for embedding */
//         embedTemplate: '<iframe src="{0}" width="{1}" height="{2}" allowfullscreen frameborder="0"></iframe>',
//         /** Determines if instructions are enabled */
//         instructionsEnabled: true,
//         /** Determines if sharing is enabled */
//         shareEnabled: true,
//         /** Determines if sharing frame is enabled */
//         shareFrameEnabled: true,
//         /** Determines if sharing manifests is enabled */
//         shareManifestsEnabled: true,
//       },
//       content: {
//         customSize: "custom",
//         embed: "Embed",
//         embedInstructions:
//           "To embed this item in your own website, copy and paste the code below.",
//         height: "Height",
//         iiif: "IIIF Manifest",
//         share: "Share",
//         shareInstructions: "To share this item, copy the URL below.",
//         size: "Size:",
//         width: "Width",
//       },
//     },
//     downloadDialogue: {
//       options: {
//         confinedImageSize: 1000,
//         currentViewDisabledPercentage: 90,
//         maxImageWidth: 5000,
//         optionsExplanatoryTextEnabled: true,
//         selectionEnabled: true,
//       },
//       content: {
//         currentViewAsJpg: "Current view {0} x {1}px (jpg)",
//         currentViewAsJpgExplanation: "Opens in a new window",
//         download: "Download",
//         downloadSelection: "Download Selection",
//         downloadSelectionExplanation:
//           "Opens a dialogue to select which pages to download.",
//         editSettings: "Edit Settings",
//         entireDocument: "Entire document ({0})",
//         entireFileAsOriginal: "Entire file",
//         noneAvailable: "No download options are available.",
//         pagingNote:
//           "Please turn off Two Page View for additional options.",
//         preview: "Preview",
//         title: "Download",
//         wholeImageHighRes: "Whole image {0} x {1}px ({2})",
//         wholeImageHighResExplanation: "Opens in a new window.",
//         wholeImagesHighRes: "Whole images ({0})",
//         wholeImagesHighResExplanation: "Opens in two new windows.",
//         wholeImageLowResAsJpg: "Whole image {0} x {1}px (jpg)",
//         wholeImageLowResAsJpgExplanation: "Opens in a new window.",
//       },
//     },
//     footerPanel:{
//       options:{
//         /** Determines if bookmarking is enabled */
//         bookmarkEnabled: false,
//         /** Determines if downloading is enabled */
//         downloadEnabled: true,
//         /** Determines if embedding is enabled */
//         embedEnabled: true,
//         /** Determines if feedback is enabled */
//         feedbackEnabled: true,
//         /** Determines if fullscreen mode is enabled */
//         fullscreenEnabled: true,
//         /** Determines if buttons are minimised */
//         minimiseButtons: true,
//         /** Determines if more information is enabled */
//         moreInfoEnabled: true,
//         /** Determines if opening is enabled */
//         openEnabled: true,
//         /** Determines if printing is enabled */
//         printEnabled: true,
//         /** Determines if sharing is enabled */
//         shareEnabled: true,
//       },
//       content: {
//         // bookmark: string,
//         // download: string,
//         // embed: string,
//         // exitFullScreen: string,
//         // feedback: string,
//         // fullScreen: string,
//         // moreInfo: string,
//         // openLeftPanel: string,
//         // closeLeftPanel: string,
//         // openRightPanel: string,
//         // closeRightPanel: string,
//         // open: string,
//         // share: string,
//       }
//     }
//   },
// };

const uvConfig = {
  options: uvConfigOptions,
  modules: uvConfigModules,
  localisation: uvConfigLocalisation,
  content: uvConfigContent,
};

const ItemMediaViewer = ({ item, canvasIndex }: ItemProps) => {
  let viewer;
  viewer = (
    <>
      <UniversalViewer
        manifestId={item.manifestURL}
        canvasIndex={canvasIndex}
        config={uvConfig}
        onChangeCanvas={(manifest, canvas) => {
          // why is this not printing in the console
          console.log("canvas index changed", manifest, canvas);
        }}
        onChangeManifest={(manifest) => {
          console.log("manfest changed", manifest);
        }}
      />
    </>
  );
  return viewer;
};

export default ItemMediaViewer;
