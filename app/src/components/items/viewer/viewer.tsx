"use client";

import { ItemModel } from "../../../models/item";
import React from "react";
import { UniversalViewer } from "../uv/universalViewerLazy";
import "universalviewer/dist/esm/index.css";
import { PlyrPlayer } from "../plyr/dynamic";

interface ItemProps {
  item: ItemModel;
  canvasIndex: number;
}

const uvConfig = {
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
    downloadDialogue: {
      options: {
        downloadCurrentViewEnabled: false,
        downloadWholeImageHighResEnabled: false,
        downloadWholeImageLowResEnabled: false,
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
          captions={item.captions}
          type={item.contentType}
        />
      </>
    );
  }

  return viewer;
};

export default ItemMediaViewer;
