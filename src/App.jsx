import { useState } from 'react';
import './App.css';

import LandingPage from './components/LandingPage';
// import Malawi from './components/Malawi';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LandingPage /> 
      </>

  );
}

export default App;

