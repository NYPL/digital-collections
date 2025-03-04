import React from "react";
import PageLayout from "@/src/components/pageLayout/pageLayout";
import MapViewerWithGeoJSON from "@/src/components/allMaps/mapWithGeoJSON";

type SpaceTimeProps = {
  params: { slug: string };
};

export default async function SpaceTimePage({ params }: SpaceTimeProps) {
  const slugsToJSON = {
    addresses: "addresses.geojson",
    "emigrant-city": "emigrant-city.geojson",
    emigrant: "emigrant-city.geojson",
    "maps-by-decade-grouped": "maps-by-decade.grouped.json",
    "nyc-streets": "nyc-streets.geojson",
    streets: "nyc-streets.geojson",
    oldnyc: "oldnyc.geojson",
    "old-nyc": "oldnyc.geojson",
    "building-inspector": "building-inspector.geojson",
    inspector: "building-inspector.geojson",
    "enumeration-districts": "enumeration-districts.geojson",
    enumeration: "enumeration-districts.geojson",
    "perris-atlas-footprints": "perris-atlas-footprints.geojson",
    footprints: "perris-atlas-footprints.geojson",
    "city-directories": "city-directories.geojson",
    directories: "city-directories.geojson",
    "maps-by-decade": "maps-by-decade.all.json",
    decade: "maps-by-decade.all.json",
    "nyc-churches": "nyc-churches.geojson",
    churches: "nyc-churches.geojson",
    "nyc-wards": "nyc-wards.geojson",
    wards: "nyc-wards.geojson",
    surveyor: "surveyor.geojson",
  };

  const jsonFileName = slugsToJSON[params.slug];
  const geoJSON = {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            id: "105822-1",
            name: "266 East 14th Street",
            type: "st:Address",
            validSince: 1857,
            validUntil: 1857,
            data: {
              number: "266",
              sheetId: 203,
              layerId: 859,
              mapId: 7164,
              borough: "Manhattan",
              houseNumberId: "building-inspector/105822-1",
              streetId: "nyc-streets/859-east-14th-street",
            },
          },
          geometry: {
            type: "Point",
            coordinates: [-73.97903184592727, 40.729714086400264],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "87114-1",
            name: "62 James Street",
            type: "st:Address",
            validSince: 1857,
            validUntil: 1857,
            data: {
              number: "62",
              sheetId: 177,
              layerId: 859,
              mapId: 7138,
              borough: "Manhattan",
              houseNumberId: "building-inspector/87114-1",
              streetId: "nyc-streets/859-james-street",
            },
          },
          geometry: {
            type: "Point",
            coordinates: [-73.99848863482467, 40.711431155534],
          },
        },
      ],
    },
    // data: { addresses },
  };
  return (
    <PageLayout
      activePage="item"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "All Maps", url: "/maps" },
        {
          text: `Space Time Data`,
          url: `/maps/spacetime`,
        },
      ]}
    >
      <MapViewerWithGeoJSON slug={params.slug} data={geoJSON} />
    </PageLayout>
  );
}
