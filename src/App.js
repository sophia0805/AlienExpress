// App.js
import { Routes, Route } from 'react-router-dom';
import Map from './Map';
import Preferences from './Preferences';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Preferences />} />
      <Route path="/Preferences" element={<Preferences />} />
      <Route path="/map" element={<Map />} />
    </Routes>
  );
}

export default App;