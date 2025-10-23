"use client";
import { useUniversalViewer } from "app/src/hooks/useUniversalViewer";
import React, { useEffect, useMemo, useRef } from "react";

export type UniversalViewerProps = {
  config?: any;
  manifestId: string;
  onChangeCanvas?: (manifest: string, canvas: string) => void;
  onChangeManifest?: (manifest: string) => void;
};

const UniversalViewer: React.FC<UniversalViewerProps> = React.memo(
  ({ manifestId, onChangeCanvas, config }) => {
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

    const ref = useRef<HTMLDivElement>(null);
    const options = useMemo(
      () => ({
        manifest: manifestId,
        embedded: true,
      }),
      []
    );

    const uv = useUniversalViewer(ref, options);

    useEffect(() => {
      if (uv) {
        // override config using an inline json object
        uv.on("configure", function ({ config, cb }) {
          console.log("config on uv.on(configure) is : ", config);
          console.log("cb is: ", cb);
          cb(
            {
              options: {
                footerPanelEnabled: true,
                pagingEnabled: true,
                pagingHeaderPanel: true,
                pagingOptionEnabled: true,
                clickToZoomEnabled: false,
                zoomToBoundsEnabled: false,
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
                    embedTemplate:
                      '<iframe src="{0}" width="{1}" height="{2}" allowfullscreen frameborder="0"></iframe>',
                    instructionsEnabled: false,
                    shareFrameEnabled: true,
                    shareManifestsEnabled: true,
                  },
                  content: {
                    customSize: "custom",
                    embed: "Embed",
                    embedInstructions:
                      "To embed this item in your own website, copy and paste the code below.",
                    height: "Height",
                    iiif: "IIIF Manifest",
                    share: "Share",
                    shareInstructions:
                      "To share this item, copy the URL below.",
                    size: "Size:",
                    width: "Width",
                  },
                },
                openSeadragonCenterPanel: {
                  options: {
                    animationTime: 0.15,
                    autoHideControls: false,
                    requiredStatementEnabled: true,
                    blendTime: 0,
                    constrainDuringPan: true,
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
                    downloadCurrentViewEnabled: false,
                  },
                },
              },
            },
            [uv]
          );
        });
      }
    }, [uv]);

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
