import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Pastikan untuk menambahkan CSS Leaflet
import "leaflet/dist/leaflet.css";

const LeafletMap = () => {
    const position = [51.505, -0.09]; // Koordinat lokasi (misalnya London)

    return (
        <div className="w-full h-96">
            <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>This is our office location.</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default LeafletMap;
