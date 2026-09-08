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
.gt_selector {
  appearance: none;
  background-color: var(--nypl-colors-ui-bg-default);
  padding: var(--nypl-space-xxs) var(--nypl-space-xs) var(--nypl-space-xxs) var(--nypl-space-l);
}

.gtranslate_button_wrapper {
  position: relative;
  display: inline-flex;
}

.gtranslate_button_wrapper .gt_selector {
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

.gtranslate_button_wrapper .gt_selector:focus,
.gtranslate_button_wrapper .gt_selector:focus-visible {
  outline: none;
}
`;
