"use client";

import { ItemModel } from "../../../models/item";
import React from "react";
import { UniversalViewer } from "../uv/universalViewerLazy";
import "universalviewer/dist/esm/index.css";
import { PlyrPlayer } from "../plyr/dynamic";
import { UV_Config } from "@/src/config/constants";

interface ItemProps {
  item: ItemModel;
  canvasIndex: number;
}

// const uvConfig = UV_Config
const uvConfig = {
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
        shareInstructions: "To share this item, copy the URL below.",
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
        pagingNote: "Please turn off Two Page View for additional options.",
        preview: "Preview",
        title: "Download",
        wholeImageHighRes: "Whole image high res {0} x {1}px (jpg)",
        wholeImageHighResExplanation: "Opens in a new window.",
        wholeImagesHighRes: "Whole images high res ({0})",
        wholeImagesHighResExplanation: "Opens in two new windows.",
        wholeImageLowResAsJpg: "Whole image low res {0} x {1}px (jpg)",
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
};
const ItemMediaViewer = ({ item, canvasIndex }: ItemProps) => {
  let viewer;
  let contentType = item.contentType;
  const captureUuidToIdx = Object.fromEntries(
    item.captures.map((capture) => [capture.uuid, capture.orderInSequence - 1])
  );

  if (item.isImage) {
    viewer = (
      <>
        <UniversalViewer
          manifestId={item.manifestURL}
          canvasIndex={canvasIndex || 0}
          captureUuidToIdx={captureUuidToIdx}
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
  } else {
    viewer = (
      <>
        <PlyrPlayer
          title={item.title}
          sources={item.mediaFiles}
          type={item.contentType}
        />
      </>
    );
  }

  return viewer;
};

export default ItemMediaViewer;
