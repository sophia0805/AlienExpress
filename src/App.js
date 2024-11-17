import { Routes, Route } from 'react-router-dom';
import Map from './Map';
import Preferences from './Preferences';
import Home from './Home';
import Listing from './Listing';
import MarsInfo from './MarsInfo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/preferences" element={<Preferences />} />
      <Route path="/map" element={<Map />} />
      <Route path="/home" element={<Home />} />
      <Route path="/listing" element={<Listing />} />
      <Route path="/marsinfo" element={<MarsInfo />} />
    </Routes>
  );
}

export default App;