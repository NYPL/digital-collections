import { IControl, Map } from "maplibre-gl";

/**
 * A custom MapLibre control to change the opacity of an AllMaps WarpedMapLayer.
 */
export class OpacityControl implements IControl {
  private _map: Map | undefined;
  private _container: HTMLDivElement | undefined;
  private _warpedMapLayer: any;

  constructor(warpedMapLayer: any) {
    this._warpedMapLayer = warpedMapLayer;
  }

  onAdd(map: Map) {
    this._map = map;
    this._container = document.createElement("div");
    this._container.className = "maplibregl-ctrl maplibregl-ctrl-group";
    this._container.style.width = "29px";
    this._container.style.padding = "8px 0";
    this._container.style.display = "flex";
    this._container.style.flexDirection = "column";
    this._container.style.alignItems = "center";
    this._container.style.gap = "4px";

    const iconContainer = document.createElement("div");
    iconContainer.style.width = "24px";
    iconContainer.style.height = "24px";
    iconContainer.style.display = "flex";
    iconContainer.style.alignItems = "center";
    iconContainer.style.justifyContent = "center";
    iconContainer.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    `;

    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = "0";
    slider.max = "1";
    slider.step = "0.01";
    slider.value = "1";
    slider.style.width = "20px";
    slider.style.height = "80px";
    slider.style.cursor = "pointer";
    slider.style.display = "block";
    slider.style.marginTop = "4px";
    slider.style.outline = "none";
    // @ts-ignore - appearance and writing-mode for vertical slider
    slider.style.appearance = "slider-vertical";
    slider.style.webkitAppearance = "slider-vertical";
    slider.style.writingMode = "bt-lr";
    slider.style.accentColor = "#333333";

    slider.addEventListener("input", (e) => {
      const opacity = parseFloat((e.target as HTMLInputElement).value);
      this._warpedMapLayer.setOpacity(opacity);
    });

    this._container.appendChild(iconContainer);
    this._container.appendChild(slider);

    return this._container;
  }

  onRemove() {
    this._container?.parentNode?.removeChild(this._container);
    this._map = undefined;
  }
}
