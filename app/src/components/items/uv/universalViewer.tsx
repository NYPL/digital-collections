"use client";
import {
  useUniversalViewer,
  useEvent,
} from "../../../hooks/useUniversalViewer";
import React, { useEffect, useMemo, useRef } from "react";
import { IIIFEvents as BaseEvents, IIIFURLAdapter } from "universalviewer";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCanvasContext } from "../../../context/CanvasProvider";
import { UV_Config } from "@/src/config/constants";

export type UniversalViewerProps = {
  config?: any;
  manifestId: string;
  canvasIndex?: number;
  captureUuidToIdx: { [uuid: string]: number };
  onChangeCanvas?: (manifest: string, canvas: string) => void;
  onChangeManifest?: (manifest: string) => void;
};

// pulled most of this code from: https://codesandbox.io/p/sandbox/uv-nextjs-example-239ff5?file=%2Fcomponents%2FUniversalViewer.tsx%3A39%2C1-49%2C8
const UniversalViewer: React.FC<UniversalViewerProps> = React.memo(
  ({ manifestId, captureUuidToIdx, canvasIndex, onChangeCanvas, config }) => {
    // Try to parse a capture uuid from the url hash for OG-style capture links
    // These links come with a hash like '#/?uuid=xxxx', so to convert to params,
    // we strip off the first 3 chars
    const hash = window.location.hash.slice(3);
    const captureUuid = new URLSearchParams(hash).get("uuid");
    if (captureUuid) {
      const captureIdx = captureUuidToIdx[captureUuid];
      if (captureIdx) {
        window.location.replace(
          window.location.pathname + `?canvasIndex=${captureIdx}`
        );
      }
    }

    const searchParams = useSearchParams();
    const { setCurrentCanvasIndex } = useCanvasContext();

    function updateCanvasIndex(newCanvasIndex: number) {
      const stringifiedParams = searchParams.toString();
      const urlSearchParams = new URLSearchParams(stringifiedParams);
      urlSearchParams.set("canvasIndex", newCanvasIndex.toString());
      window.history.pushState(null, "", `?${urlSearchParams}`);
    }
    const handleOnClick = (e) => {
      if (e.target.className === "openseadragon-canvas") {
        const viewPortButtons = Array.from(
          document.getElementsByClassName(
            "viewportNavButton"
          ) as HTMLCollectionOf<HTMLElement>
        );
        Array.from(viewPortButtons).forEach((button) => {
          button.style.position = "relative";
          button.style.zIndex = "10000";
        });
      }
    };

    console.log("config as component prop is: ", config);
    // console.log("canvasIndex is: ", canvasIndex)

    const ref = useRef<HTMLDivElement>(null);
    const lastIndex = useRef<number>();
    const options = useMemo(
      () => ({
        manifest: manifestId,
        canvasIndex: canvasIndex,
        embedded: true,
      }),
      []
    );

    const uv = useUniversalViewer(ref, options);

    useEffect(() => {
      if (uv && (canvasIndex || canvasIndex === 0)) {
        if (lastIndex.current !== canvasIndex) {
          uv._assignedContentHandler?.publish(
            BaseEvents.CANVAS_INDEX_CHANGE,
            canvasIndex
          );
          lastIndex.current = canvasIndex;
        }
      }

      if (uv) {
        // override config using an inline json object
        uv.on("configure", function ({ config, cb }) {
          console.log("config on uv.on(configure) is : ", config);
          console.log("cb is: ", cb);
          cb(
            // UV_Config
            {
              options: {
                footerPanelEnabled: true,
                clickToZoomEnabled: false,
              },
              modules: {
                headerPanel: {
                  options: {
                    centerOptionsEnabled: true,
                    localeToggleEnabled: false,
                    settingsButtonEnabled: true,
                  },
                },
                pagingHeaderPanel: {
                  options: {
                    autoCompleteBoxEnabled: true,
                    autocompleteAllowWords: false,
                    galleryButtonEnabled: true,
                    imageSelectionBoxEnabled: false,
                    pageModeEnabled: false,
                    pagingToggleEnabled: true,
                  },
                  content: {
                    close: "Close",
                    emptyValue: "Please enter a value",
                    first: "First",
                    firstImage: "First Image",
                    firstPage: "First Page",
                    folio: "Folio",
                    gallery: "Gallery",
                    go: "Go",
                    help: "Help",
                    image: "Image",
                    last: "Last",
                    lastImage: "Last Image",
                    lastPage: "Last Page",
                    next: "Next",
                    nextImage: "Next Image",
                    nextPage: "Next Page",
                    of: "of {0}",
                    oneUp: "Single page view",
                    page: "Page",
                    pageSearchLabel: "Search by Page Number",
                    previous: "Previous",
                    previousImage: "Previous Image",
                    previousPage: "Previous Page",
                    settings: "Settings",
                    twoUp: "Two page view",
                  },
                },
                shareDialogue: {
                  options: {
                    /** Determines if copy buttons are enabled */
                    copyToClipboardEnabled: true,
                    /** Determines if embed is enabled */
                    embedEnabled: false,
                    /** Set host for embed code (default: window.location.hostname) */
                    embedHost: "",
                    /** Set port for embed code (default: window.location.protocol) */
                    embedPort: 3000,
                    /** Set path to uv.html on embed host (default: /uv.html) */
                    embedPath: "",
                    /** Template for embedding */
                    embedTemplate:
                      '<iframe src="{0}" width="{1}" height="{2}" allowfullscreen frameborder="0"></iframe>',
                    /** Determines if instructions are enabled */
                    instructionsEnabled: false,
                    /** Determines if sharing is enabled */
                    shareEnabled: true,
                    /** Determines if sharing frame is enabled */
                    shareFrameEnabled: true,
                    /** Determines if sharing manifests is enabled */
                    shareManifestsEnabled: true,
                  },
                  content: {
                    copyBtn: "copyBtn",
                    copyToClipboard: "copyToClipboard",
                    customSize: "custom",
                    embed: "Embed",
                    embedInstructions:
                      "To embed this item in your own website, copy and paste the code below.",
                    height: "Height",
                    iiif: "IIIF Manifest",
                    share: "Share",
                    shareLink: "shareLink",
                    shareInstructions:
                      "To share this item, copy the URL below.",
                    size: "Size:",
                    width: "Width",
                    shareUrl: "shareUrl",
                  },
                },
                openSeadragonCenterPanel: {
                  options: {
                    animationTime: 0.15,
                    autoHideControls: true,
                    requiredStatementEnabled: true,
                    blendTime: 0,
                    constrainDuringPan: false,
                    controlsFadeAfterInactive: 10000,
                    controlsFadeDelay: 20000,
                    controlsFadeLength: 20000,
                    defaultZoomLevel: 0,
                    immediateRender: false,
                    maxZoomPixelRatio: 1.25,
                    navigatorPosition: "BOTTOM_RIGHT",
                    pageGap: 50,
                    showHomeControl: true,
                    trimAttributionCount: 150,
                    visibilityRatio: 0.5,
                  },
                  content: {
                    attribution: "Attribution",
                    goHome: "Go Home",
                    imageUnavailable: "Image Unavailable",
                    next: "Next",
                    previous: "Previous",
                    rotateRight: "Rotate Right",
                    zoomIn: "Zoom In",
                    zoomOut: "Zoom Out",
                  },
                },
                downloadDialogue: {
                  options: {
                    /** Size of the confined image */
                    confinedImageSize: 1000,
                    /** Determines if download of current view is enabled */
                    downloadCurrentViewEnabled: false,
                    /** Determines if download of whole image in high resolution is enabled */
                    downloadWholeImageHighResEnabled: true,
                    /** Determines if download of whole image in low resolution is enabled */
                    downloadWholeImageLowResEnabled: true,
                    currentViewDisabledPercentage: 90,
                    maxImageWidth: 5000,
                    optionsExplanatoryTextEnabled: false,
                    selectionEnabled: true,
                  },
                  content: {
                    currentViewAsJpg: "Current view", //"Current view {0} x {1}px (jpg)",
                    currentViewAsJpgExplanation: "Opens in a new window",
                    download: "Download",
                    downloadSelection: "Download Selection",
                    downloadSelectionExplanation:
                      "Opens a dialogue to select which pages to download.",
                    editSettings: "Edit Settings",
                    entireDocument: "Entire document ({0})",
                    entireFileAsOriginal: "Entire file",
                    noneAvailable: "No download options are available.",
                    pagingNote:
                      "Please turn off Two Page View for additional options.",
                    preview: "Preview",
                    title: "Download",
                    wholeImageHighRes: "Whole image high res {0} x {1}px (jpg)",
                    wholeImageHighResExplanation: "Opens in a new window.",
                    wholeImagesHighRes: "Whole images high res ({0})",
                    wholeImagesHighResExplanation: "Opens in two new windows.",
                    wholeImageLowResAsJpg:
                      "Whole image low res {0} x {1}px (jpg)",
                    wholeImageLowResAsJpgExplanation: "Opens in a new window.",
                  },
                },
                footerPanel: {
                  options: {
                    autocompleteAllowWords: false,
                    bookmarkEnabled: true,
                    downloadEnabled: true,
                    embedEnabled: false,
                    feedbackEnabled: false,
                    fullscreenEnabled: true,
                    minimiseButtons: true,
                    moreInfoEnabled: true,
                    openEnabled: false,
                    printEnabled: false,
                    shareEnabled: true,
                  },
                  content: {
                    bookmark: "Add to bookmarks",
                    download: "Download",
                    embed: "Embed",
                    exitFullScreen: "Exit Full Screen",
                    feedback: "Feedback",
                    fullScreen: "Full Screen",
                    moreInfo: "More Information",
                    open: "Open",
                    share: "Share",
                  },
                },
              },
            },
            [uv]
          );
          lastIndex.current = canvasIndex;
        });
      }
    }, [canvasIndex, uv]);

    useEvent(uv, BaseEvents.CANVAS_INDEX_CHANGE, (i) => {
      if (onChangeCanvas) {
        updateCanvasIndex(i);
        setCurrentCanvasIndex(i);

        if (lastIndex.current !== i) {
          const canvas = (uv as any)?.extension?.helper.getCanvasByIndex(i);
          if (canvas) {
            lastIndex.current = i;
            onChangeCanvas(manifestId, canvas.id);
          }
        }
      }
    });

    useEvent(uv, BaseEvents.DOWNLOAD, (i) => {
      console.log("blah i ", i);
    });

    return (
      <>
        <div
          className="uv"
          onClick={(e) => handleOnClick(e)}
          style={{ height: 500 }}
          ref={ref}
        />
      </>
    );
  }
);

UniversalViewer.displayName = "UniversalViewer";

export default UniversalViewer;
