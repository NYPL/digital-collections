import { IControl, Map } from "maplibre-gl";
import { WarpedMapLayer } from "@allmaps/maplibre";
import React from "react";
import { Icon } from "@nypl/design-system-react-components";

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

export const OpacityControlComponent = ({
  warpedMapLayer,
}: {
  warpedMapLayer: WarpedMapLayer;
}) => {
  const [opacity, setOpacity] = React.useState(1);

  return (
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
  );
};

/**
 * A custom MapLibre control to change the opacity of an AllMaps WarpedMapLayer.
 */
export class OpacityControl implements IControl {
  private _container: HTMLDivElement | undefined;

  onAdd() {
    this._container = document.createElement("div");
    this._container.className = "maplibregl-ctrl maplibregl-ctrl-group";
    return this._container;
  }

  onRemove() {
    this._container?.parentNode?.removeChild(this._container);
    this._container = undefined;
  }

  getElement() {
    return this._container;
  }
}
