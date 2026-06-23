"use client";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Map, NavigationControl, FullscreenControl, LngLat } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { WarpedMapLayer } from "@allmaps/maplibre";
import { generateId } from "@allmaps/id";
import { useCanvasContext } from "../../../context/CanvasProvider";
import { Heading, Text, Link } from "@nypl/design-system-react-components";
import { ItemModel } from "@/src/models/item";
import {
  OpacityControl,
  OpacityControlComponent,
  WarpedMapLayerType,
} from "./OpacityControl";

interface ItemProps {
  item: ItemModel;
}

const AllMapsViewer = ({ item }: ItemProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [opacityControlContainer, setOpacityControlContainer] =
    useState<HTMLDivElement | null>(null);
  const warpedMapLayerRef = useRef<WarpedMapLayerType | null>(null);
  const { currentCanvasIndex, setCurrentCanvasIndex } = useCanvasContext();

  const capturesWithMapData = item.captures.filter(
    (capture) => capture.hasAllMapsData
  );
  const canvasIndexToCaptureMap = Object.fromEntries(
    capturesWithMapData.map((capture) => [capture.orderInSequence - 1, capture])
  );

  let mapCenter = new LngLat(-73.931016, 40.79532); // Default center coordinates

  useEffect(() => {
    let map: Map | undefined;
    let resizeObserver: ResizeObserver | undefined;

    const initializeMap = async () => {
      if (!mapContainer.current) return;

      console.log(
        "map center before map initialization: ",
        JSON.stringify(mapCenter)
      );
      map = new Map({
        container: mapContainer.current,
        style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
        center: mapCenter,
        zoom: 10.7,
        maxPitch: 0,
        attributionControl: false,
        canvasContextAttributes: {
          preserveDrawingBuffer: true,
        },
      });

      map.addControl(new NavigationControl(), "top-right");
      map.addControl(new FullscreenControl(), "top-right");

      // if current canvas index isn't in the map, it doesn't have Allmaps data,
      // so we need to set it to the first canvas index that does have Allmaps data
      // and redirect the page accordingly
      let captureToDisplay = canvasIndexToCaptureMap[currentCanvasIndex];
      if (!canvasIndexToCaptureMap[currentCanvasIndex]) {
        const firstEntry = Object.entries(canvasIndexToCaptureMap)[0];
        setCurrentCanvasIndex(Number(firstEntry[0]));
        captureToDisplay = firstEntry[1];
      }

      const imageId = captureToDisplay?.imageId;
      console.log("using this imageId for the allmaps viewer: ", imageId);

      const iiifUrl = imageId
        ? `https://iiif.nypl.org/iiif/2/${imageId}`
        : null;

      // generateId is async and returns a Promise
      const hashedIiifImageId = await generateId(iiifUrl);
      const annotationUrl = `https://annotations.allmaps.org/images/${hashedIiifImageId}`;
      const warpedMapLayer = new WarpedMapLayer();
      warpedMapLayerRef.current = warpedMapLayer;

      const opacityControl = new OpacityControl();
      map.addControl(opacityControl, "top-right");
      setOpacityControlContainer(opacityControl.getElement() || null);

      map.on("load", async () => {
        if (!map) return;
        map.addLayer(warpedMapLayer);

        try {
          // Wait for the annotation to be loaded so we can get its bounds
          await warpedMapLayer.addGeoreferenceAnnotationByUrl(annotationUrl);
          const bounds = warpedMapLayer.getBounds();

          if (bounds) {
            map.fitBounds(bounds, {
              padding: 50, // Add some space around the map
              animate: true,
              duration: 1000,
            });
            mapCenter = map.getCenter(); // Do this so that each time the map is re-rendered, it will be centered on the last center point
            console.log(
              "map center after fitBounds: ",
              JSON.stringify(mapCenter)
            );
          }
        } catch (error) {
          console.error("Error loading AllMaps annotation:", error);
        }
      });

      resizeObserver = new ResizeObserver(() => {
        map?.resize();
      });
      resizeObserver.observe(mapContainer.current);
    };

    initializeMap();

    return () => {
      resizeObserver?.disconnect();
      map?.remove();
      setOpacityControlContainer(null);
      warpedMapLayerRef.current = null;
    };
  }, [item.uuid, currentCanvasIndex]);

  return (
    <div
      ref={mapContainer}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {opacityControlContainer &&
        warpedMapLayerRef.current &&
        createPortal(
          <OpacityControlComponent
            warpedMapLayer={warpedMapLayerRef.current}
          />,
          opacityControlContainer
        )}
    </div>
  );
};

export default AllMapsViewer;
