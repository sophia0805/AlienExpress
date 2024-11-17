import './Map.css';
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import logo from './img/cow.png';
import { useNavigate } from 'react-router-dom';

let lat, long;

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
          <Popup>Your crop location</Popup>
        </Marker>
      ))}
    </>
  );
}

function Map() {
  const navigate = useNavigate();
  const [markers, setMarkers] = useState([]);
  const [userLocation, setUserLocation] = useState([33.91, -118.41]);

  const goToMap = () => {
    navigate('/map');
  };

  const goToListing = () => {
    navigate('/listing');
  };

  const goHome = () => {
    navigate('/home');
  };

  return (
    <>
      <nav className="navbar">
        <a href="#" className="logo-container" onClick={goHome}>
          <img className="cow" src={logo} alt="logo" />
          <span className="logo-text text">AlienExpress</span>
        </a>
        <div className="nav-links">
          <a href="index.html" className="text cursor">Desktop App</a>
          <a className="text cursor">Location Selection</a>
          <a onClick={goToListing} className="text cursor">Resource Shop</a>
        </div>
      </nav>
      <div className="mapContainer">
        <MapContainer center={userLocation} zoom={13} id="map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[33.91, -118.41]}>
            <Popup>
              Your location
            </Popup>
          </Marker>
          <AddMarker markers={markers} setMarkers={setMarkers} />
        </MapContainer>
      </div>
    </>
  );
}

export default Map;
