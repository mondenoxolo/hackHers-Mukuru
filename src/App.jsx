import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Zimbabwe from './components/Zimbabwe';
import GenericCountryPage from './components/GenericCountryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/zimbabwe" element={<Zimbabwe />} />
        <Route path="/lesotho" element={<GenericCountryPage />} />


      </Routes>
    </Router>
  );
}

export default App;