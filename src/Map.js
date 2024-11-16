import './Map.css';
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function AddMarker({ markers, setMarkers }) {
    useMapEvents({
      click(e) {
        const newMarker = e.latlng;
        setMarkers([...markers, newMarker]);
      },
    });

  return (
    <>
      {markers.map((position, idx) => (
        <Marker key={idx} position={position}>
          <Popup>wassup</Popup>
        </Marker>
      ))}
    </>
  );
}

function Map() {
  const [markers, setMarkers] = useState([]);

  return (
    <div className="content">
      <MapContainer center={[51.505, -0.09]} zoom={13} id="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <AddMarker markers={markers} setMarkers={setMarkers} />
      </MapContainer>
    </div>
  );
}

export default Map;
