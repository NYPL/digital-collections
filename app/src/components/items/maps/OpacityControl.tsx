import { IControl, Map } from "maplibre-gl";
import React from "react";
import { createRoot, Root } from "react-dom/client";
import { Icon, DSProvider } from "@nypl/design-system-react-components";

/**
 * A custom MapLibre control to change the opacity of an AllMaps WarpedMapLayer.
 */
export class OpacityControl implements IControl {
  private _map: Map | undefined;
  private _container: HTMLDivElement | undefined;
  private _warpedMapLayer: any;
  private _root: Root | undefined;

  constructor(warpedMapLayer: any) {
    this._warpedMapLayer = warpedMapLayer;
  }

  onAdd(map: Map) {
    this._map = map;
    this._container = document.createElement("div");
    this._container.className = "maplibregl-ctrl maplibregl-ctrl-group";
    this._container.style.width = "29px";
    this._container.style.padding = "4px 0 8px 0";
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

    this._container.appendChild(iconContainer);

    this._root = createRoot(iconContainer);
    this._root.render(
      <DSProvider>
        <Icon name="mapsLayers" size="medium" title="Opacity control" />
      </DSProvider>
    );

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

    this._container.appendChild(slider);

    return this._container;
  }

  onRemove() {
    this._root?.unmount();
    this._container?.parentNode?.removeChild(this._container);
    this._map = undefined;
  }
}
