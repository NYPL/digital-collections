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
  captureUuidToIdx: { [uuid: string]: number };
  onChangeCanvas?: (manifest: string, canvas: string) => void;
  onChangeManifest?: (manifest: string) => void;
};

// pulled most of this code from: https://codesandbox.io/p/sandbox/uv-nextjs-example-239ff5?file=%2Fcomponents%2FUniversalViewer.tsx%3A39%2C1-49%2C8
const UniversalViewer: React.FC<UniversalViewerProps> = React.memo(
  ({ manifestId, captureUuidToIdx, canvasIndex, onChangeCanvas, config }) => {
    const searchParams = useSearchParams();
    const { setCurrentCanvasIndex } = useCanvasContext();

    // Try to parse a capture uuid from the url hash for OG-style capture links
    // These links come with a hash like '#/?uuid=xxxx', so to convert to params,
    // we strip off the first 3 chars
    const hash = window.location.hash.slice(3);
    const captureUuid = new URLSearchParams(hash).get("uuid");
    if (captureUuid) {
      const captureIdx = captureUuidToIdx[captureUuid];
      if (captureIdx) {
        setCurrentCanvasIndex(captureIdx);
      }
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
      console.log("USE EFFECT IN VIEWER");
      // OPTIONAL: wipe UV prefs in dev so old settings don't override you; I kept having issues making changes.
      // try {
      //   Object.keys(localStorage)
      //     .filter(k => k.toLowerCase().includes("uv") || k.toLowerCase().includes("universal"))
      //     .forEach(k => localStorage.removeItem(k));
      // } catch {}

      let mo: MutationObserver | undefined;
      console.log(typeof uv);
      console.log(uv);

      if (uv) {
        console.log(lastIndex.current);
        console.log(canvasIndex);
        if (lastIndex.current !== canvasIndex) {
          uv._assignedContentHandler?.publish(
            BaseEvents.CANVAS_INDEX_CHANGE,
            canvasIndex ?? 0
          );
          lastIndex.current = canvasIndex;
        }
      }

      if (uv) {
        // Hide specific default download options by button/anchor text. Right now, just "Whole imiage".
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
              // Uncomment to verify what got hidden:
              // console.log("[UV prune] hid", text, el);
            }
          });
        }

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
                // saveUserSettings: false, // uncomment if you want to stop new prefs persisting
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
          lastIndex.current = canvasIndex;

          // Initial pass (in case the dialog already exists)
          pruneDownloadButtons();

          // Watch for dialog render/changes and re-prune
          try {
            mo = new MutationObserver(() => pruneDownloadButtons());
            mo.observe(document.body, { subtree: true, childList: true });
          } catch {}
        });
      }

      // cleanup: disconnect observer on unmount / dependency change
      return () => {
        try {
          mo?.disconnect();
        } catch {}
      };
    }, [canvasIndex, uv]);

    useEvent(uv, BaseEvents.CANVAS_INDEX_CHANGE, (i) => {
      console.log("Index Changed");
      console.log(onChangeCanvas);
      if (onChangeCanvas) {
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
