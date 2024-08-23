import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Zimbabwe from './components/Zimbabwe';
import GenericCountryPage from './components/GenericCountryPage';
import Zambia from './components/Zambia';
import Malawi from'./components/Malawi';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/zimbabwe" element={<Zimbabwe />} />
        <Route path="/lesotho" element={<GenericCountryPage />} />
        {/* <Route path="/botswana" element={<GenericCountryPage />} />
        // <Route path="/mozambique" element={<GenericCountryPage />} />
        <Route path="/south-africa" element={<GenericCountryPage />} />
        <Route path="/eswatini" element={<GenericCountryPage />} /> */}
        <Route path="/zambia" element={<Zambia />} />
        <Route path="/malawi" element={<Malawi />} /> 


      </Routes>
    </Router>
  );
}

export default App;