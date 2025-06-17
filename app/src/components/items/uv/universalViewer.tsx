"use client";
import {
  useUniversalViewer,
  useEvent,
} from "../../../hooks/useUniversalViewer";
import React, { useEffect, useMemo, useRef } from "react";
import { IIIFEvents as BaseEvents, IIIFURLAdapter } from "universalviewer";
import {
  uvConfigOptions,
  uvConfigModules,
  uvConfigLocalisation,
  uvConfigContent,
} from "./uvConfig";
export type UniversalViewerProps = {
  config?: any;
  manifestId: string;
  canvasIndex?: number;
  onChangeCanvas?: (manifest: string, canvas: string) => void;
  onChangeManifest?: (manifest: string) => void;
};

const handleOnClick = (e) => {
  console.log("e is: ", e);
  if (e.target === "div.openseadragon-canvas") {
    console.log("target is image viewer");

    // this doesn't work. think we need to select the great-grandparent? div
    const viewPortButtons = Array.from(
      document.getElementsByClassName(
        "viewportNavButton"
      ) as HTMLCollectionOf<HTMLElement>
    );

    Array.from(viewPortButtons).forEach((button) => {
      button.style.position = "absolute";
      button.style.zIndex = "10000";
    });
  }
};
// https://codesandbox.io/p/sandbox/uv-nextjs-example-239ff5?file=%2Fcomponents%2FUniversalViewer.tsx%3A39%2C1-49%2C8
const UniversalViewer: React.FC<UniversalViewerProps> = React.memo(
  ({ manifestId, canvasIndex, onChangeCanvas, config }) => {
    console.log("config as component prop is: ", config);
    // console.log("canvasIndex is: ", canvasIndex)

    console.log("canvasIndex in UniversalViewer component is: ", canvasIndex);
    const ref = useRef<HTMLDivElement>(null);
    const lastIndex = useRef<number>();
    const options = useMemo(
      () => ({
        manifest: manifestId,
        canvasIndex: canvasIndex || 0, //TODO: look into why adding the query param adds "1" to the string or value. it's very weird.
        embedded: false,
      }),
      []
    );

    const uv = useUniversalViewer(ref, options);

    useEffect(() => {
      console.log("canvasIndex in useEffect is: ", canvasIndex);

      // if (uv && (canvasIndex || canvasIndex === 0)) {
      //   if (lastIndex.current !== canvasIndex) {
      //     uv._assignedContentHandler?.publish(
      //       BaseEvents.CANVAS_INDEX_CHANGE,
      //       canvasIndex
      //     );
      //     lastIndex.current = canvasIndex;
      //   }
      // }

      if (uv) {
        // override config using an inline json object
        uv.on("configure", function ({ config, cb }) {
          console.log("config on uv.on(configure) is : ", config);
          console.log("cb is: ", cb);
          cb(
            // {
            //   options: {
            //     footerPanelEnabled: true,
            //     pagingEnabled: true,
            //     pagingHeaderPanel: true,
            //     pagingOptionEnabled: true,
            //     clickToZoomEnabled: false,
            //   },
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
            //         embedEnabled: false,
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
            // },
            {
              options: uvConfigOptions,
              modules: uvConfigModules,
            },
            [uv]
          );
        });
      }
    });

    useEvent(uv, BaseEvents.CANVAS_INDEX_CHANGE, (i) => {
      console.log("canvasIndex in useEvent is: ", canvasIndex);

      if (onChangeCanvas) {
        console.log("canvasIndex in useEvent onChangeCanvas is: ", canvasIndex);
        console.log("i in useEvent onChangeCanvas is: ", i);

        if (lastIndex.current !== i) {
          console.log("lastIndex is", lastIndex);
          const canvas = (uv as any)?.extension?.helper.getCanvasByIndex(i);
          if (canvas) {
            lastIndex.current = i;
            onChangeCanvas(manifestId, canvas.id);
          }
        }
      }
    });

    return (
      <>
        <div
          className="uv"
          onClick={(e) => handleOnClick(e)}
          style={{ height: 800 }}
          ref={ref}
        />
      </>
    );
  }
);

UniversalViewer.displayName = "UniversalViewer";

export default UniversalViewer;
