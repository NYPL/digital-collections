import { IControl, Map } from "maplibre-gl";
import React from "react";
import { createRoot, Root } from "react-dom/client";
import { Icon, DSProvider } from "@nypl/design-system-react-components";

const STYLES = {
  container: {
    width: "29px",
    padding: "4px 0 8px 0",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "4px",
  },
  iconContainer: {
    width: "24px",
    height: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  slider: {
    width: "20px",
    height: "80px",
    cursor: "pointer",
    display: "block",
    outline: "none",
    writingMode: "vertical-lr" as const,
    direction: "rtl" as const,
    accentColor: "#333333",
  },
};

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
    Object.assign(this._container.style, STYLES.container);

    const iconContainer = document.createElement("div");
    Object.assign(iconContainer.style, STYLES.iconContainer);

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
    Object.assign(slider.style, STYLES.slider);

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
