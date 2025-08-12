"use client";
import {
  useUniversalViewer,
  useEvent,
} from "../../../hooks/useUniversalViewer";
import React, { useEffect, useMemo, useRef } from "react";
import { IIIFEvents as BaseEvents } from "universalviewer";
import { useSearchParams } from "next/navigation";
import { useCanvasContext } from "../../../context/CanvasProvider";

export type UniversalViewerProps = {
  config?: any;
  manifestId: string;
  canvasIndex?: number;
  captureUuidToIdx: { [uuid: string]: number };
  onChangeCanvas?: (manifest: string, canvas: string) => void;
  onChangeManifest?: (manifest: string) => void;
};

const UniversalViewer: React.FC<UniversalViewerProps> = React.memo(
  ({ manifestId, captureUuidToIdx, canvasIndex, onChangeCanvas, config }) => {
    // Parse OG-style hash links like "#/?uuid=xxxx"
    try {
      const hash =
        typeof window !== "undefined" ? window.location.hash.slice(3) : "";
      const captureUuid = new URLSearchParams(hash).get("uuid");
      if (captureUuid) {
        const captureIdx = captureUuidToIdx[captureUuid];
        // Important: allow index 0
        if (captureIdx !== undefined) {
          window.location.replace(
            window.location.pathname + `?canvasIndex=${captureIdx}`
          );
        }
      }
    } catch {}

    const searchParams = useSearchParams();
    const { setCurrentCanvasIndex } = useCanvasContext();

    function updateCanvasIndex(newCanvasIndex: number) {
      const stringifiedParams = searchParams.toString();
      const urlSearchParams = new URLSearchParams(stringifiedParams);
      urlSearchParams.set("canvasIndex", newCanvasIndex.toString());
      window.history.pushState(null, "", `?${urlSearchParams}`);
    }

    const handleOnClick = (e: React.MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t?.className === "openseadragon-canvas") {
        const viewPortButtons = Array.from(
          document.getElementsByClassName(
            "viewportNavButton"
          ) as HTMLCollectionOf<HTMLElement>
        );
        viewPortButtons.forEach((button) => {
          button.style.position = "relative";
          button.style.zIndex = "10000";
        });
      }
    };

    console.log("config as component prop is: ", config);

    const ref = useRef<HTMLDivElement>(null);
    const lastIndex = useRef<number | undefined>(undefined);

    // Make options reactive so a late-arriving canvasIndex will update UV
    const options = useMemo(
      () => ({
        manifest: manifestId,
        canvasIndex, // can be undefined initially; UV will update when it changes. (try it. it's fun.)
        embedded: true,
      }),
      [manifestId, canvasIndex]
    );

    const uv = useUniversalViewer(ref, options);

    // Helper to hide unwanted download options whenever they appear. Right now just 'whole image'.
    function pruneDownloadButtons() {
      const host =
        document.querySelector(".uv-iiif-extension-host") || document;
      const nodes = host.querySelectorAll<HTMLElement>(
        "li.option.single > button, li.option.single button, li.option.single > a, li.option.single a"
      );
      nodes.forEach((el) => {
        const text = (el.textContent || "").trim().toLowerCase();
        const isWholeImage = text.startsWith("whole image");
        if (isWholeImage) {
          const li = el.closest("li");
          if (li instanceof HTMLElement) {
            li.style.display = "none";
          } else {
            (el as HTMLElement).style.display = "none";
          }
        }
      });
    }

    useEffect(() => {
      if (uv && canvasIndex !== undefined) {
        if (lastIndex.current !== canvasIndex) {
          uv._assignedContentHandler?.publish(
            BaseEvents.CANVAS_INDEX_CHANGE,
            canvasIndex
          );
          lastIndex.current = canvasIndex;
        }
      }

      let mo: MutationObserver | undefined;

      if (uv) {
        // Configure UV
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

          // Run once here in case the dialog is already in the DOM
          try {
            pruneDownloadButtons();
          } catch {}
        });

        // Attach a long-lived MutationObserver independent of canvasIndex,
        // so late UI (like the download dialog, which grumble grumble) gets pruned when it appears.
        try {
          mo = new MutationObserver(() => pruneDownloadButtons());
          mo.observe(document.body, { subtree: true, childList: true });
        } catch {}
      }

      // cleanup
      return () => {
        try {
          mo?.disconnect();
        } catch {}
      };
    }, [uv, canvasIndex]);

    useEvent(uv, BaseEvents.CANVAS_INDEX_CHANGE, (i: number) => {
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
      console.log("DOWNLOAD event payload: ", i);
      // Extra safety: prune again right when user opens download UI
      try {
        pruneDownloadButtons();
      } catch {}
    });

    return (
      <>
        <div
          className="uv"
          onClick={handleOnClick}
          style={{ height: 500 }}
          ref={ref}
        />
      </>
    );
  }
);

UniversalViewer.displayName = "UniversalViewer";

export default UniversalViewer;
