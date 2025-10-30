import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Route from "./Route.jsx";


const CENTER = [17.491659, 78.391983];

function RecenterMap({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, map.getZoom(), { animate: true });
    }
  }, [position, map]);

  return null;
}

function MapView({ route, currentIdx }) {
  const positions = route.map(pt => [pt.lat, pt.lon]);
  const vehicleIcon = L.divIcon({
        className: 'text-2xl',
        html: '<span class="text-red-600">🚗</span>',
        iconSize: [36, 36]
    });

  const busIcon = new L.Icon({
    iconUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiM0MjYwZjAiLz4KICA8cGF0aCBkPSJNMTAuNSA0NEgxM1Y0MEg1MFY0MEg1M0wxMCA0NFoiIGZpbGw9IiNmZmYiLz4KICA8Y2lyY2xlIGN4PSIxNiIgY3k9IjUyIiByPSI2IiBmaWxsPSIjZmZmIi8+CiAgPGNpcmNsZSBjeD0iNDgiIGN5PSI1MiIgcj0iNiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4=",
    iconSize: [32, 32],  // resize as needed
    iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -32]
    });

  const center_postion = positions[currentIdx] || CENTER;
  return (
    <MapContainer center={center_postion} zoom={15} style={{ height: "80vh", width: "80%" }}>      
      <TileLayer
        attribution='&copy; <a href="[http://osm.org/copyright](http://osm.org/copyright)">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />      
      {route.length > 0 && (
        <>
          <Route positions={positions} currentIdx={currentIdx} />
          <Marker position={positions[currentIdx] || CENTER} icon={busIcon} ></Marker>
          <RecenterMap position={center_postion} />
        </>        
      )}      
    </MapContainer>

  );
}

export default MapView;
