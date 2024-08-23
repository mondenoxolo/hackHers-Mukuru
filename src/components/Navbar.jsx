import React from 'react';
import './Navbar.css';

function Navbar({ activeSection, scrollToSection }) {
  return (
    <header className="navbar">
      <div className="logo">
        <img
          src="https://www.mukuru.com/wp-content/uploads/2023/07/Mukuru-Logo-Pack-Black.jpg"
          alt="Mukuru Logo"
        />
      </div>
      <nav>
        <ul>
          {["home", "about", "who", "commitment", "group", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
                className={activeSection === section ? "active" : ""}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;