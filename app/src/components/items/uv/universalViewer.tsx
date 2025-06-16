"use client";
import {
  useUniversalViewer,
  useEvent,
} from "../../../hooks/useUniversalViewer";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { IIIFEvents as BaseEvents, IIIFURLAdapter } from "universalviewer";
import { MediaElementExtensionEvents } from "node_modules/universalviewer/dist/cjs/content-handlers/iiif/extensions/uv-mediaelement-extension/Events";
import {
  nearestPercentageMilestone,
  sendAudioPlayEvent,
  sendDownloadEvent,
  sendVideoPlayEvent,
} from "@/src/utils/ga4Utils";

export type UniversalViewerProps = {
  config?: any;
  manifestId: string;
  canvasIndex?: number;
  analyticsMetadata?: { fileType: string; media_name: string; length: number };
  onChangeCanvas?: (manifest: string, canvas: string) => void;
  onChangeManifest?: (manifest: string) => void;
};

// https://codesandbox.io/p/sandbox/uv-nextjs-example-239ff5?file=%2Fcomponents%2FUniversalViewer.tsx%3A39%2C1-49%2C8
const UniversalViewer: React.FC<UniversalViewerProps> = React.memo(
  ({ manifestId, canvasIndex, analyticsMetadata, onChangeCanvas, config }) => {
    // console.log("canvasIndex is: ", canvasIndex)

    console.log("canvasIndex in UniversalViewer component is: ", canvasIndex);
    const ref = useRef<HTMLDivElement>(null);
    const lastIndex = useRef<number>();
    const lastPlayPercentage = useRef<number>();
    const playPercentage = useState(0);
    const options = useMemo(
      () => ({
        manifest: manifestId,
        canvasIndex: canvasIndex || 0, //TODO: look into why adding the query param adds "1" to the string or value. it's very weird.
        embedded: true,
        // footerPanelEnabled: false,
        // options: {
        //   "headerPanel": {
        //     "options": {
        //       "centerOptionsEnabled": true,
        //       "localeToggleEnabled": false,
        //       "settingsButtonEnabled": false
        //     }
        //   },
        // }
        //UVConfig.options
        // config: config || UVConfig, //{},
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
          cb(
            {
              options: {
                footerPanelEnabled: true,
                pagingEnabled: true,
                pagingHeaderPanel: true,
                pagingOptionEnabled: true,
                modules: {
                  headerPanel: {
                    options: {
                      centerOptionsEnabled: true,
                      localeToggleEnabled: false,
                      settingsButtonEnabled: false,
                    },
                  },
                  pagingHeaderPanel: {
                    options: {
                      autoCompleteBoxEnabled: true,
                      autocompleteAllowWords: false,
                      galleryButtonEnabled: false,
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
                },
              },
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

    useEvent(uv, MediaElementExtensionEvents.MEDIA_TIME_UPDATE, (i) => {
      const playPercentage = nearestPercentageMilestone(
        i,
        analyticsMetadata!.length
      );
      if (lastPlayPercentage.current !== playPercentage) {
        lastPlayPercentage.current = playPercentage;
        if (analyticsMetadata?.fileType === "video") {
          sendVideoPlayEvent(analyticsMetadata.media_name, playPercentage);
        } else if (analyticsMetadata?.fileType === "audio") {
          sendAudioPlayEvent(analyticsMetadata.media_name, playPercentage);
        }
      }
    });

    return (
      <>
        <div className="uv" style={{ height: 800 }} ref={ref} />
      </>
    );
  }
);

UniversalViewer.displayName = "UniversalViewer";

export default UniversalViewer;
