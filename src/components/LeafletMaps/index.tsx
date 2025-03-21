"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Konfigurasi custom icon
const customIcon = new L.Icon({
  iconUrl: "/assets/leaflet/icons/marker.svg", // Arahkan ke file di `public/`
  iconSize: [30, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Map = () => {
  return (
    <MapContainer
      center={[-6.25652, 106.72318]}
      zoom={13}
      style={{
        height: "350px",
        width: "100%",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
        zIndex: "10",
      }}
      dragging={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[-6.25652, 106.72318]} icon={customIcon}>
        <Popup>Ini Lokasi Saya!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
