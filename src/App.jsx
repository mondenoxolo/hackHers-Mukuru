import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import GenericCountryPage from './components/GenericCountryPage';
import LandingPage from './components/LandingPage';
import Zimbabwe from './components/Zimbabwe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/zimbabwe" element={<Zimbabwe />} />
        <Route path="/lesotho" element={<GenericCountryPage />} />
        <Route path="/botswana" element={<GenericCountryPage />} />
        <Route path="/mozambique" element={<GenericCountryPage />} />

      </Routes>
    </Router>
  );
}

export default App;