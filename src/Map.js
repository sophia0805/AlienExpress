import './Map.css';
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import logo from './img/cow.png';
import { useNavigate } from 'react-router-dom';

let markerPlaced = false;

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
      markerPlaced = true;
    },
  });

  return (
    <>
      {markers.map((position, idx) => (
        <Marker key={idx} position={position}>
          <Popup><b>Crop location(30.42, 120.48)</b></Popup>
        </Marker>
      ))}
    </>
  );
}

function CropPreference() {
  const [text, setText] = useState('What crops are you growing?');

  const handleClick = () => {
    if (text === "What crops are you growing?") {
      setText('');
    }
  };

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText); 
  };

  return (
    <div className="preferences flex">
      <textarea
        className="input cursor"
        value={text}
        onClick={handleClick}
        onChange={handleChange}
      />
      {text.toLowerCase() === "corn" && (
        <table className="table padding">
          <thead>
            <tr>
              <th>Crop</th>
              <th>Ideal soil moisture</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Corn</td>
              <td>0.6-0.8</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

function SoilData() {
  return (
    <>
    {markerPlaced && (
        <table className="table padding">
            <thead>
                <tr>
                    <th>Current Soil Moisture</th>
                    <th>Ph</th>
                    <th>Temperature</th>
                </tr>
            </thead>
        <tbody>
            <tr>
                <td>0.2</td>
                <td>8.6</td>
                <td>66-76F</td>
            </tr>
        </tbody>
        </table>
    )}
    </>
  );
}

function Map() {
  const navigate = useNavigate();
  const [markers, setMarkers] = useState([]);
  const [userLocation, setUserLocation] = useState([33.91, -118.41]);

  const goToListing = () => navigate('/listing');
  const goHome = () => navigate('/home');

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
      <div className="top elementContainer">
        <p className="instruction h1">Step 2: Set your preferences</p>
      </div>
      <div className="columnContainer">
        <div className="leftColumn">
          <div className="mapContainer">
            <MapContainer center={userLocation} zoom={13} id="map">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={userLocation}>
                <Popup>
                  <b>Your location (33.91, -118.41)</b>
                </Popup>
              </Marker>
              <AddMarker markers={markers} setMarkers={setMarkers} />
            </MapContainer>
          </div>
        </div>
        <div className="right-column">
        <SoilData />
        <CropPreference /> {}
        </div>
      </div>
    </>
  );
}

export default Map;
