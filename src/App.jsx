import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
// import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/zimbabwe" element={<Zimbabwe />} />
      </Routes>
    </Router>
  );
}

export default App;