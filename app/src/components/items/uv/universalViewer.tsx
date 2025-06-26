"use client";
import {
  useUniversalViewer,
  useEvent,
} from "../../../hooks/useUniversalViewer";
import React, { useEffect, useMemo, useRef } from "react";
import { IIIFEvents as BaseEvents, IIIFURLAdapter } from "universalviewer";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCanvasContext } from "../../../context/CanvasProvider";

export type UniversalViewerProps = {
  config?: any;
  manifestId: string;
  canvasIndex?: number;
  onChangeCanvas?: (manifest: string, canvas: string) => void;
  onChangeManifest?: (manifest: string) => void;
};

// pulled most of this code from: https://codesandbox.io/p/sandbox/uv-nextjs-example-239ff5?file=%2Fcomponents%2FUniversalViewer.tsx%3A39%2C1-49%2C8
const UniversalViewer: React.FC<UniversalViewerProps> = React.memo(
  ({ manifestId, canvasIndex, onChangeCanvas, config }) => {
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
          button.style.pointerEvents = "auto";
        });

        const paginationButtons = Array.from(
          document.getElementsByClassName(
            "btn btn-default paging"
          ) as HTMLCollectionOf<HTMLElement>
        );
        console.log("paginationButtons: ", paginationButtons);

        paginationButtons.forEach((button) => {
          console.log("paginationButton before: ", button);

          const div = button.parentNode as HTMLElement;
          console.log("parentNode before: ", div);
          div.style.opacity = "100";
          div.style.position = "initial";
          div.style.zIndex = "10000";
          div.style.pointerEvents = "auto";
          div.focus();
          console.log("paginationButton after: ", button);
          console.log("parentNode after: ", div);
        });

        console.log("button: ", paginationButtons[0]);
        console.log("parent node: ", paginationButtons[0].parentNode);
      }

      //btn btn-default paging prev
      //btn btn-default paging next
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
            {
              options: {
                footerPanelEnabled: true,
                pagingEnabled: true,
                pagingHeaderPanel: true,
                pagingOptionEnabled: true,
                clickToZoomEnabled: false,
                allowStealFocus: false,
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
          style={{ height: 650 }}
          ref={ref}
        />
      </>
    );
  }
);

UniversalViewer.displayName = "UniversalViewer";

export default UniversalViewer;
