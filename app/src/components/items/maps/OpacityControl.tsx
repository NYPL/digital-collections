import { IControl, Map } from "maplibre-gl";
import { WarpedMapLayer } from "@allmaps/maplibre";
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

type WarpedMapLayer = typeof WarpedMapLayer;

const OpacityControlComponent = ({
  warpedMapLayer,
}: {
  warpedMapLayer: WarpedMapLayer;
}) => {
  const [opacity, setOpacity] = React.useState(1);

  return (
    <DSProvider>
      <div style={STYLES.container}>
        <div style={STYLES.iconContainer}>
          <Icon name="mapsLayers" size="medium" title="Opacity control" />
        </div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={opacity}
          style={STYLES.slider}
          onInput={(e) => {
            const val = parseFloat(e.currentTarget.value);
            setOpacity(val);
            warpedMapLayer.setOpacity(val);
          }}
        />
      </div>
    </DSProvider>
  );
};

/**
 * A custom MapLibre control to change the opacity of an AllMaps WarpedMapLayer.
 */
export class OpacityControl implements IControl {
  private _map: Map | undefined;
  private _container: HTMLDivElement | undefined;
  private _warpedMapLayer: WarpedMapLayer | undefined;
  private _root: Root | undefined;

  constructor(warpedMapLayer: WarpedMapLayer) {
    this._warpedMapLayer = warpedMapLayer;
  }

  onAdd(map: Map) {
    this._map = map;
    this._container = document.createElement("div");
    this._container.className = "maplibregl-ctrl maplibregl-ctrl-group";

    this._root = createRoot(this._container);
    this._root.render(
      <OpacityControlComponent warpedMapLayer={this._warpedMapLayer} />
    );

    return this._container;
  }

  onRemove() {
    this._root?.unmount();
    this._container?.parentNode?.removeChild(this._container);
    this._map = undefined;
  }
}
