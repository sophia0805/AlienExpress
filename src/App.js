// App.js
import { Routes, Route } from 'react-router-dom';
import Map from './Map';
import Preferences from './Preferences';
import Home from './Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Preferences" element={<Preferences />} />
      <Route path="/map" element={<Map />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;