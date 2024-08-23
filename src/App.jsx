import { useState } from 'react';
import './App.css';
// import CountryDropDown from './components/CountryDropDown';
import LandingPage from './components/LandingPage';
// import LandingPage from './components/LandingPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LandingPage /> 
    </>
  );
}

export default App;

