"use client";
import React, { useEffect, useMemo, useRef } from "react";
import { IIIFEvents as BaseEvents } from "universalviewer";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  useUniversalViewer,
  useEvent,
} from "../../../hooks/useUniversalViewer";
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
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { setCurrentCanvasIndex } = useCanvasContext();

    // ------------ Logging helpers ------------
    function logLocation(label: string) {
      try {
        console.groupCollapsed(`[UV LOG] ${label}`);
        console.log(
          "href:",
          typeof window !== "undefined" ? window.location.href : "(no window)"
        );
        console.log("pathname (usePathname):", pathname);
        console.log("searchParams:", searchParams?.toString?.() ?? "(none)");
        console.log("canvasIndex (prop):", canvasIndex);
        console.groupEnd();
      } catch {}
    }

    // Safer replace: compare absolute URLs + querystring after navigation.
    function safeReplaceUrl(nextUrlRel: string, debugFrom: string) {
      if (typeof window === "undefined") return;

      const absTarget = new URL(nextUrlRel, window.location.origin).toString();
      const targetSearch = new URL(absTarget).search;

      console.groupCollapsed("[UV LOG] safeReplaceUrl");
      console.log("caller:", debugFrom);
      console.log("current href:", window.location.href);
      console.log("target href (abs):", absTarget);
      console.log("target search:", targetSearch);
      console.groupEnd();

      let routerThrew = false;
      try {
        router.replace(nextUrlRel, { scroll: false });
      } catch (e) {
        routerThrew = true;
        console.error("[UV LOG] router.replace threw:", e);
      }

      // Next tick: verify what actually changed
      setTimeout(() => {
        const hrefNow = window.location.href;
        const searchNow = window.location.search;

        console.groupCollapsed("[UV LOG] after router.replace()");
        console.log("href now:", hrefNow);
        console.log("search now:", searchNow);
        console.log("useSearchParams snapshot:", searchParams.toString());
        console.groupEnd();

        const hrefChanged = hrefNow === absTarget; // absolute vs absolute
        const searchChanged = searchNow === targetSearch; // query only

        if (!hrefChanged && !searchChanged) {
          console.warn(
            `[UV LOG] router.replace ${
              routerThrew ? "threw and" : ""
            } did not reflect change; trying history.replaceState fallback`
          );
          try {
            window.history.replaceState(null, "", absTarget);
            console.groupCollapsed("[UV LOG] after history.replaceState()");
            console.log("href now:", window.location.href);
            console.log("search now:", window.location.search);
            console.groupEnd();
          } catch (e2) {
            console.error("[UV LOG] history.replaceState failed:", e2);
          }
        }
      }, 0);
    }

    function updateCanvasIndex(newCanvasIndex: number) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("canvasIndex", String(newCanvasIndex));
      const nextUrlRel = `${pathname}?${params.toString()}`;

      console.groupCollapsed("[UV LOG] updateCanvasIndex");
      console.log("incoming index:", newCanvasIndex);
      console.log("computed nextUrl (relative):", nextUrlRel);
      console.groupEnd();

      safeReplaceUrl(nextUrlRel, "updateCanvasIndex");
    }

    // ------------ One-time: convert "#/?uuid=xxxx" → ?canvasIndex=... ------------
    useEffect(() => {
      if (typeof window === "undefined") return;
      logLocation("mount (before hash redirect)");

      try {
        const rawHash = window.location.hash ?? "";
        console.log("[UV LOG] raw hash:", rawHash);

        // Accept "#/?uuid=..." or "#uuid=..." or "#?uuid=..."
        const hash = rawHash.startsWith("#/?")
          ? rawHash.slice(3)
          : rawHash.replace(/^#\??/, "");

        const captureUuid = new URLSearchParams(hash).get("uuid");
        console.log("[UV LOG] parsed captureUuid:", captureUuid);

        if (!captureUuid) return;

        const captureIdx = captureUuidToIdx[captureUuid];
        console.log("[UV LOG] mapped captureIdx:", captureIdx);

        if (captureIdx === undefined) return;

        const url = new URL(window.location.href);
        url.hash = ""; // drop the OG-style hash
        url.searchParams.set("canvasIndex", String(captureIdx));
        console.log("[UV LOG] hash→query redirect to:", url.toString());
        window.location.replace(url.toString());
      } catch (e) {
        console.error("[UV LOG] hash redirect failed:", e);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // ------------ UI tweaks ------------
    const handleOnClick = (e: React.MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (t?.className === "openseadragon-canvas") {
        const btns = Array.from(
          document.getElementsByClassName(
            "viewportNavButton"
          ) as HTMLCollectionOf<HTMLElement>
        );
        btns.forEach((button) => {
          button.style.position = "relative";
          button.style.zIndex = "10000";
        });
      }
    };

    // ------------ UV setup ------------
    const ref = useRef<HTMLDivElement>(null);
    const lastIndex = useRef<number | undefined>(undefined);

    // Reactive: if canvasIndex shows up late, UV reconfigures accordingly.
    const options = useMemo(
      () => ({
        manifest: manifestId,
        canvasIndex, // may be undefined initially
        embedded: true,
      }),
      [manifestId, canvasIndex]
    );

    const uv = useUniversalViewer(ref, options);

    // Hide unwanted download options whenever they appear.
    function pruneDownloadButtons() {
      try {
        console.groupCollapsed("[UV LOG] pruneDownloadButtons()");
        const host =
          document.querySelector(".uv-iiif-extension-host") || document;
        const nodes = host.querySelectorAll<HTMLElement>(
          "li.option.single > button, li.option.single button, li.option.single > a, li.option.single a"
        );
        console.log("nodes found:", nodes.length);
        nodes.forEach((el) => {
          const text = (el.textContent || "").trim().toLowerCase();
          if (text.startsWith("whole image")) {
            const li = el.closest("li");
            console.log("hiding element with text:", text, "li:", !!li);
            if (li instanceof HTMLElement) {
              li.style.display = "none";
            } else {
              (el as HTMLElement).style.display = "none";
            }
          }
        });
        console.groupEnd();
      } catch (e) {
        console.error("[UV LOG] prune error:", e);
      }
    }

    useEffect(() => {
      if (!uv) return;

      logLocation("effect start (uv exists)");

      if (canvasIndex !== undefined && lastIndex.current !== canvasIndex) {
        console.log("[UV LOG] publishing CANVAS_INDEX_CHANGE:", canvasIndex);
        uv._assignedContentHandler?.publish(
          BaseEvents.CANVAS_INDEX_CHANGE,
          canvasIndex
        );
        lastIndex.current = canvasIndex;
      }

      let mo: MutationObserver | undefined;

      uv.on("configure", function ({ config: cfg, cb }) {
        console.groupCollapsed("[UV LOG] uv.on('configure')");
        console.log("cfg snapshot:", cfg);
        console.groupEnd();

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
                  shareInstructions: "To share this item, copy the URL below.",
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

        // Initial prune in case dialog already exists
        pruneDownloadButtons();
      });

      // Long-lived observer: prune whenever the dialog (or content) renders later
      try {
        mo = new MutationObserver(() => pruneDownloadButtons());
        mo.observe(document.body, { subtree: true, childList: true });
      } catch (e) {
        console.error("[UV LOG] MutationObserver failed:", e);
      }

      return () => {
        try {
          mo?.disconnect();
        } catch {}
      };
    }, [uv, canvasIndex, pathname, searchParams]);

    // ------------ Events ------------
    useEvent(uv, BaseEvents.CANVAS_INDEX_CHANGE, (i: number) => {
      console.log("[UV LOG] CANVAS_INDEX_CHANGE event:", i);
      updateCanvasIndex(i);
      setCurrentCanvasIndex(i);

      if (onChangeCanvas && lastIndex.current !== i) {
        const canvas = (uv as any)?.extension?.helper.getCanvasByIndex(i);
        console.log("[UV LOG] helper.getCanvasByIndex:", !!canvas, canvas?.id);
        if (canvas) {
          lastIndex.current = i;
          onChangeCanvas(manifestId, canvas.id);
        }
      }
    });

    useEvent(uv, BaseEvents.DOWNLOAD, (payload) => {
      console.log("[UV LOG] DOWNLOAD event payload:", payload);
      pruneDownloadButtons();
    });

    // Track param snapshots (helps validate router.replace updates)
    useEffect(() => {
      logLocation("searchParams changed");
    }, [searchParams, pathname]);

    return (
      <div
        className="uv"
        onClick={handleOnClick}
        style={{ height: 500 }}
        ref={ref}
      />
    );
  }
);

UniversalViewer.displayName = "UniversalViewer";
export default UniversalViewer;
