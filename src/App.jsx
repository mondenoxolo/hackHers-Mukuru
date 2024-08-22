import { useState } from 'react';
import './App.css';
// import LandingPage from './components/LandingPage';
import Zambia from './components/Zambia';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Zambia/>
    </>
  );
}

export default App;

