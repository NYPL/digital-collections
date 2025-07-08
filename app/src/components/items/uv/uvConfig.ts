// all comments come from https://github.com/UniversalViewer/universalviewer/blob/dev/src/content-handlers/iiif/BaseConfig.ts#L160
// if it doesn't have a comment, then it's not documented in the github

// TO DO: document any additional or optional params
// For more options, look at: https://docs.universalviewer.io/types/_internal_.Options.html
export const uvConfigOptions = {
  /** A default animation duration */
  animationDuration: 1000,
  /** Determines if the focus can be stolen */
  allowStealFocus: false,
  /** Version of the authentication API */
  authAPIVersion: 1,
  /** Height of the bookmark thumbnail */
  bookmarkThumbHeight: 150,
  /** Width of the bookmark thumbnail */
  bookmarkThumbWidth: 90,
  /** Determines if click to zoom is enabled */
  clickToZoomEnabled: false,
  /** Determines if double click annotation is enabled */
  doubleClickAnnotationEnabled: false,
  /** Determines if drop is enabled */
  dropEnabled: true,
  /** Determines if the footer panel is enabled */
  footerPanelEnabled: true,
  /** Determines if the header panel is enabled */
  headerPanelEnabled: true,
  /** Determines if the left panel is enabled */
  leftPanelEnabled: true,
  /** Determines if locales are limited */
  limitLocales: true,
  /** Metrics array */
  metrics: [
    {
      type: "sm",
      minWidth: 0,
    },
    {
      type: "md",
      minWidth: 768,
    },
    {
      type: "lg",
      minWidth: 1024,
    },
    {
      type: "xl",
      minWidth: 1280,
    },
  ],
  /** MIME type for multi selection */
  multiSelectionMimeType: "application/zip",
  /** Determines if the navigator is enabled */
  navigatorEnabled: true,
  /** Template for opening */
  openTemplate: "http://universalviewer.io?manifest={0}",
  /** Determines if full screen is overridden */
  overrideFullScreen: true,
  /** Determines if paging is enabled */
  pagingEnabled: true,
  pagingOptionEnabled: true,
  pessimisticAccessControl: true,
  /** Determines if the mediaelement extension should be preferred */
  preferMediaElementExtension: false,
  /** Determines if viewport is preserved */
  preserveViewport: true,
  /** Controls whether to have animations or not */
  reducedAnimation: false,
  /** Determines if the right panel is enabled */
  rightPanelEnabled: true,
  /** Determines if user settings are saved */
  saveUserSettings: false,
  /** Determines if search within is enabled */
  searchWithinEnabled: true,
  /** Determines if terms of use are enabled */
  termsOfUseEnabled: true,
  theme: "uv-en-GB-theme",
  /** Storage for tokens */
  tokenStorage: "session",
  /** Determines if arrow keys can be used to navigate */
  useArrowKeysToNavigate: true,
  /** Determines if zoom to search result is enabled */
  zoomToSearchResultEnabled: true,
  /** Determines if zoom to bounds is enabled */
  zoomToBoundsEnabled: true,
};

export const uvConfigModules = {
  avCenterPanel: {
    options: {
      autoPlay: true,
      includeParentInTitleEnabled: true,
      posterImageRatio: 0.3,
      subtitleMetadataField: "contributor",
      titleEnabled: true,
      subtitleEnabled: true,
      mostSpecificRequiredStatement: true,
      requiredStatementEnabled: true,
      posterImageExpanded: false,
      hideMediaError: true,
      enableFastForward: true,
      enableFastRewind: true,
      limitToRange: true,
      autoAdvanceRanges: true,
    },
    content: {
      attribution: "$attribution",
      currentTime: "$currentTime",
      delimiter: " - ",
      duration: "$duration",
      mute: "$mute",
      next: "$next",
      pause: "$pause",
      play: "$play",
      previous: "$previous",
    },
  },
  centerPanel: {
    options: {},
    content: {},
  },
  contentLeftPanel: {
    options: {
      autoExpandTreeEnabled: false,
      autoExpandTreeIfFewerThan: 20,
      branchNodesExpandOnClick: true,
      branchNodesSelectable: false,
      defaultToTreeEnabled: false,
      defaultToTreeIfGreaterThan: 0,
      elideCount: 40,
      expandFullEnabled: true,
      galleryThumbChunkedResizingThreshold: 400,
      galleryThumbHeight: 320,
      galleryThumbLoadPadding: 3,
      galleryThumbWidth: 200,
      oneColThumbHeight: 320,
      oneColThumbWidth: 200,
      pageModeEnabled: true,
      panelAnimationDuration: 250,
      panelCollapsedWidth: 30,
      panelExpandedWidth: 255,
      panelOpen: true,
      tabOrder: "",
      thumbsCacheInvalidation: {
        enabled: true,
        paramType: "?",
      },
      thumbsEnabled: true,
      thumbsExtraHeight: 8,
      thumbsImageFadeInDuration: 300,
      thumbsLoadRange: 15,
      treeEnabled: true,
      twoColThumbHeight: 150,
      twoColThumbWidth: 90,
    },
    content: {
      collapse: "Collapse Contents",
      collapseFull: "Collapse Gallery",
      date: "date",
      expand: "Expand Contents",
      expandFull: "Expand Gallery",
      index: "Index",
      manifestRanges: "Manifest Ranges",
      searchResult: "{0} search result",
      searchResults: "{0} search results",
      sortBy: "Sort By:",
      thumbnails: "Thumbnails",
      title: "Contents",
      volume: "volume",
    },
  },
  dialogue: {
    topCloseButtonEnabled: true,
    content: {
      close: "Close",
    },
  },
  downloadDialogue: {
    options: {
      /** Size of the confined image */
      confinedImageSize: 1000,
      /** Determines if download of current view is enabled */
      downloadCurrentViewEnabled: false,
      /** Determines if download of whole image in high resolution is enabled */
      downloadWholeImageHighResEnabled: false,
      /** Determines if download of whole image in low resolution is enabled */
      downloadWholeImageLowResEnabled: false,
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
  genericDialogue: {
    content: {
      emptyValue: "please enter a value.",
      invalidNumber: "Please enter a valid number.",
      noMatches: "No matches were found.",
      ok: "OK",
      pageNotFound:
        "This item does not contain a page with the number you entered. Try switching the numbering mode to 'image'.",
      refresh: "Refresh",
    },
  },
  headerPanel: {
    options: {
      /** Determines if center options are enabled */
      centerOptionsEnabled: true,
      /** Determines if locale toggle is enabled */
      localeToggleEnabled: true,
      /** Determines if settings button is enabled */
      settingsButtonEnabled: false,
      /** Optional: Determines if help is enabled */
      // helpEnabled: boolean;
      // helpUrl?: string;
    },
    content: {
      close: "close",
      settings: "settings",
      help: "help",
    },
  },
  helpDialogue: {
    content: {
      text: "placeholder text",
      title: "Help",
    },
  },
  moreInfoRightPanel: {
    options: {
      canvasDisplayOrder: "",
      canvasExclude: "",
      copyToClipboardEnabled: false,
      manifestDisplayOrder: "",
      manifestExclude: "",
      panelAnimationDuration: 250,
      panelCollapsedWidth: 30,
      panelExpandedWidth: 255,
      panelOpen: false,
      rtlLanguageCodes: "ar, ara, dv, div, he, heb, ur, urd",
      showAllLanguages: false,
      textLimit: 1,
      textLimitType: "lines",
    },
    content: {
      attribution: "Attribution",
      canvasHeader: "About the image",
      collapse: "Collapse Information",
      collapseFull: "Collapse Gallery",
      copiedToClipboard: "Copied to clipboard",
      copyToClipboard: "Copy to clipboard",
      description: "Description",
      expand: "Expand Information",
      expandFull: "Expand Gallery",
      holdingText: "Your module goes here!",
      less: "less",
      license: "License",
      logo: "Logo",
      manifestHeader: "About the item",
      more: "more",
      noData: "No data to display",
      page: "Page",
      rangeHeader: "About this section",
      title: "More Information",
    },
  },
  multiSelectDialogue: {
    options: {
      galleryThumbChunkedResizingEnabled: true,
      galleryThumbChunkedResizingThreshold: 400,
      galleryThumbHeight: 320,
      galleryThumbLoadPadding: 3,
      galleryThumbWidth: 200,
      pageModeEnabled: true,
    },
    content: {
      select: "Download",
      selectAll: "Select All",
      title: "Select Pages for Download",
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
  openSeadragonCenterPanel: {
    options: {
      /** Duration of the animation */
      animationTime: 0.15,
      /** Determines if controls are hidden automatically */
      autoHideControls: false,
      /** Time taken to blend images */
      blendTime: 0,
      /** Determines if panning is constrained */
      constrainDuringPan: false,
      /** Time after which controls fade after inactivity */
      controlsFadeAfterInactive: 15000,
      /** Delay before controls start to fade */
      controlsFadeDelay: 25000,
      /** Duration of controls fade */
      controlsFadeLength: 25000,
      /** Default zoom level */
      defaultZoomLevel: 0,
      /** Determines if annotation is enabled */
      // doubleClickAnnotationEnabled: false,
      /** Determines if rendering is immediate */
      immediateRender: false,
      /** Maximum pixel ratio for zoom */
      maxZoomPixelRatio: 1.25,
      /** Position of the navigator */
      navigatorPosition: "BOTTOM_RIGHT",
      /** Gap between pages */
      pageGap: 50,
      /** Determines if required statement is enabled */
      requiredStatementEnabled: true,
      /** Determines if adjust image control is shown */
      // showAdjustImageControl: true,
      /** Determines if home control is shown */
      showHomeControl: true,
      /** Number of attributions to trim */
      trimAttributionCount: 150,
      /** Ratio of visibility */
      visibilityRatio: 1,
      /** Whether to zoom in to first annotation on load */
      // zoomToInitialAnnotation: true,
    },
    content: {
      adjustImage: "Adjust Image",
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
  OSDDownloadDialogue: {
    options: {
      /** Size of the confined image */
      confinedImageSize: 5000,
      /** Determines if download of current view is enabled */
      downloadCurrentViewEnabled: true,
      /** Determines if download of whole image in high resolution is enabled */
      downloadWholeImageHighResEnabled: true,
      /** Determines if download of whole image in low resolution is enabled */
      downloadWholeImageLowResEnabled: true,
      /** Maximum width of the image */
      maxImageWidth: 5000,
      /** Determines if selection is enabled */
      selectionEnabled: true,
    },
    content: {
      // allPages: "",
      currentViewAsJpg: "Current view {0} x {1}px (jpg)",
      currentViewAsJpgExplanation: "Opens in a new window",
      download: "Download",
      downloadSelection: "Download Selection",
      downloadSelectionExplanation:
        "Opens a dialogue to select which pages to download.",
      editSettings: "Edit Settings",
      entireDocument: "Entire document ({0})",
      entireFileAsOriginal: "Entire file",
      // entireFileAsOriginalWithFormat: "",
      // individualPages: "",
      noneAvailable: "No download options are available.",
      pagingNote: "Please turn off Two Page View for additional options.",
      preview: "Preview",
      selection: "Selection",
      // termsOfUse: "",
      title: "Download",
      wholeImageHighRes: "Whole image {0} x {1}px ({2})",
      wholeImageHighResExplanation: "Opens in a new window.",
      wholeImagesHighRes: "Whole images ({0})",
      wholeImagesHighResExplanation: "Opens in two new windows.",
      wholeImageLowResAsJpg: "Whole image {0} x {1}px (jpg)",
      wholeImageLowResAsJpgExplanation: "Opens in a new window.",
    },
  },
  // OSDSettingsDialogue: {
  //   // options:{},
  //   // content:{}
  // },
  searchFooterPanel: {
    options: {
      elideDetailsTermsCount: 20,
      elideResultsTermsCount: 10,
      forceImageMode: false,
      pageModeEnabled: true,
      positionMarkerEnabled: false,
    },
    content: {
      clearSearch: "Clear",
      defaultLabel: "-",
      displaying: "{0} {1} of {2}",
      enterKeyword: "Enter Keyword",
      image: "image",
      imageCaps: "Image",
      instanceFound: "1 instance of '{0}' found",
      instancesFound: "{0} instances of '{1}' found",
      nextResult: "Next Result",
      page: "page",
      pageCaps: "Page",
      previousResult: "Previous Result",
      print: "Print",
      resultFoundFor: "result found for",
      resultsFoundFor: "results found for",
      searchWithin: "Search within this item:",
    },
  },
  settingsDialogue: {
    content: {
      locale: "Locale",
      navigatorEnabled: "Navigator Enabled",
      clickToZoomEnabled: "Mouse Click To Zoom",
      pagingEnabled: "Two Page View",
      reducedMotion: "Reduce motion (disables animations)",
      preserveViewport: "Preserve Zoom",
      title: "Settings",
      website:
        "<a href='https://github.com/universalviewer/universalviewer#contributors'>more info</a>",
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
  authDialogue: {
    content: {
      cancel: "Cancel",
      confirm: "Confirm",
    },
  },
  clickThroughDialogue: {
    content: {
      viewTerms: "Read Full Terms and Conditions",
    },
  },
  loginDialogue: {
    content: {
      login: "Login",
      logout: "Logout",
      cancel: "Cancel",
    },
  },
  mobileFooterPanel: {
    content: {
      rotateRight: "Rotate Right",
      moreInfo: "More Information",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
    },
  },
  restrictedDialogue: {
    content: {
      cancel: "Cancel",
    },
  },
};

export const uvConfigLocalisation = {
  label: "English (GB)",
  locales: [
    {
      name: "cy-GB",
      label: "Cymraeg",
    },
    {
      name: "en-GB",
      label: "English (GB)",
    },
    {
      name: "fr-FR",
      label: "Français (FR)",
    },
    {
      name: "pl-PL",
      label: "Polski",
    },
    {
      name: "sv-SE",
      label: "Svenska",
    },
  ],
};

export const uvConfigContent = {
  authCORSError:
    "Your browser does not support CORS, please upgrade to view this content.",
  authorisationFailedMessage:
    "Your log-in attempt did not appear to be successful. Please try again.",
  canvasIndexOutOfRange: "Canvas index out of range.",
  fallbackDegradedLabel: "Login",
  fallbackDegradedMessage:
    "Please log in to view this content at full resolution.",
  forbiddenResourceMessage:
    "Your current access rights are insufficient to view this image",
  mediaViewer: "Media Viewer",
  skipToDownload: "Skip to downloads and alternative formats",
  termsOfUse: "Terms of Use",
};
