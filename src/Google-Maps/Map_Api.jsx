import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import InfoSection from "./InfoSection";
import "./Map_Api.css";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 20.5937,
  lng: 78.9629,
};
const markers = [
  { id: 1, lat: 15.2993, lng: 74.124 },
  { id: 2, lat: 18.5204, lng: 73.8567 },
  { id: 3, lat: 22.5726, lng: 88.3639 },
  { id: 4, lat: 17.366, lng: 78.476 },
  { id: 5, lat: 12.9716, lng: 77.5946 },
  { id: 6, lat: 13.0827, lng: 80.2707 },
  { id: 7, lat: 28.38, lng: 77.12 },
  { id: 9, lat: 19.076, lng: 72.8777 },
];

function Map() {
  const [Index, setIndex] = useState(null); // Initialize with null
  const handleClick = (markerId) => {
    setIndex(markerId); 
  };
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyDRuLFUpVXsptOgvlPv0JcKXsAQFRqxK0Y">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={4}>
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => handleClick(marker.id)}
            />
          ))}
        </GoogleMap>
      </LoadScript>
      <InfoSection Index={Index}></InfoSection>
    </div>
  );
}

export default Map;
