// components/Map.js
"use client";
// components/Map.js
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
const markerIcon = "/images/icons/marker-icon.png"; // Path to your custom marker image

const Map = ({ items }) => {
  const center = [5.2981948, -2.0005115];
  const zoom = 20; // Adjust zoom level as needed

  // Create a custom icon
  const defaultIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Anchor point of the icon
    popupAnchor: [0, -32], // Popup anchor point
  });

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Marker
          key={item.id}
          position={[item.lat, item.lng]}
          icon={defaultIcon}
        >
          <Popup>
            <h3 className="font-bold text-lg">{item.name}</h3>
            <p>{item.description}</p>
            <p className="text-red-500">Location Found:</p>
            <p className="text-blue-600 -mt-2">{item.location}</p>
            <a href="wa.link/3a6gw9">
              <p className="text-white text-base bg-green-700 px-3 py-3 text-center w-28 rounded-md">
                Chat Poster
              </p>
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
