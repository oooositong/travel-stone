import React from 'react';
import { Viewer, Entity, GeoJsonDataSource } from 'resium';
import { Cartesian3, createWorldTerrain } from 'cesium';
import worldGeoJson from '../assets/geojson/countries-medium.geojson';

const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);
const pointGraphics = { pixelSize: 10 };
const terrainProvider = createWorldTerrain();

const HelloWorld = () => (
    <Viewer full terrainProvider={terrainProvider}>
        <Entity 
            position={position} 
            point={pointGraphics} 
            name="Tokyo"
            description="Hello World"
        />

        <GeoJsonDataSource data={worldGeoJson}/>
    </Viewer>
);

export default HelloWorld;