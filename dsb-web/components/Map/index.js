import styles from '../../styles/components/Map.module.css';
import { TileLayer, MapContainer, Marker, Popup, useMapEvents, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

const BoatIcon = L.icon({
    iconUrl: './boat.jpeg',
    iconSize: [30, 30], // size of the icon
});

export default function Map(props) {

    const {
        positions
    } = useContext(GlobalContext)

    return (
        <div className={styles.container} id="map-id" style={{ height: props.containerHeight }}>
            <MapContainer
                center={[-22.9231845, -43.0955149]}
                zoom={15}
                style={{ width: '100%', height: props.mapHeight }}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                { 
                positions?.length > 0 &&
                    positions?.map((b, i) => {
                        return (
                            <Marker position={b.position} key={i} icon={BoatIcon}>
                                <Popup>
                                    {b.name} <br /> Última atualização: {b?.time}
                                </Popup>
                            </Marker>
                        )
                    })
                }
            </MapContainer>
        </div>
    )
}