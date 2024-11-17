import { Routes, Route } from 'react-router-dom';
import Map from './Map';
import Home from './Home';
import Listing from './Listing';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/home" element={<Home />} />
      <Route path="/listing" element={<Listing />} />
    </Routes>
  );
}

export default App;