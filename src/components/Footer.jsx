import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  const navigate = useNavigate();

  const goToLandingPage = () => {
    navigate('/country');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Your Company Name</p>
        <button className="navigate-button" onClick={goToLandingPage}>
          find you mukuru
        </button>
      </div>
    </footer>
  );
};

export default Footer;
