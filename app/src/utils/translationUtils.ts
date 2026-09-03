/**
 * Consts for GTranslate.
 */
export const GTRANSLATE_CDN_URL =
  "https://cdn.gtranslate.net/widgets/latest/dropdown.js";
export const supportedLanguages = [
  "en",
  "ar",
  "bn",
  "zh-CN",
  "zh-TW",
  "fr",
  "ht",
  "ko",
  "pl",
  "ru",
  "es",
  "ur",
];
export const GTRANSLATE_CUSTOM_CSS = `

.gtranslate_icon_wrapper {
  position: relative;
  display: inline-flex;
}

.gtranslate_icon_wrapper .gt_selector {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  border: 0;
  z-index: 2;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  color: transparent;
}

.gtranslate_icon_wrapper .gt_selector:focus,
.gtranslate_icon_wrapper .gt_selector:focus-visible {
  outline: none;
}
`;
