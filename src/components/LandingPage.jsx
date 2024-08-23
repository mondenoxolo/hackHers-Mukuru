import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function LandingPage() {
  const [activeSection, setActiveSection] = useState("home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const countries = [
    { name: "Zimbabwe", flag: "🇿🇼", path: "/zimbabwe" },
    { name: "South Africa", flag: "🇿🇦", path: "/south-africa" },
    { name: "Malawi", flag: "🇲🇼", path: "/malawi" },
    { name: "Zambia", flag: "🇿🇲", path: "/zambia" },
    { name: "Botswana", flag: "🇧🇼", path: "/botswana" },
    { name: "Mozambique", flag: "🇲🇿", path: "/mozambique" },
    { name: "Lesotho", flag: "🇱🇸", path: "/lesotho" },
    { name: "Eswatini", flag: "🇸🇿", path: "/eswatini" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      setScrollProgress((currentScroll / totalScroll) * 100);

      const sections = ["home", "about", "who", "commitment", "group", "contact"];
      let current = "";

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 100) {
          current = section;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCountrySelect = (countryPath) => {
    navigate(countryPath);
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message submitted:", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
    alert("Message sent successfully!");
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const contentSections = [
    {
      id: "about",
      title: "About Us",
      content: "Learn more about Mukuru, a leading next-generation financial services platform for Africa's emerging consumers. We are inspired by our customers, enabling financial inclusion through technology solutions and a range of financial services products to meet their everyday needs.",
    },
    {
      id: "who",
      title: "Who is Mukuru",
      content: "Just like you, we dream of a future that is filled with possibility; where the impossible becomes possible and the obstacles in our path cannot stand in the way of achieving great things. That's why we created Mukuru – a digital platform that empowers you to take control of your future by putting financial freedom in your hands.",
    },
    {
      id: "commitment",
      title: "Our Commitment to Inclusivity",
      content: "At Mukuru, we are steadfast in our commitment to advancing economic empowerment and inclusivity. As a B-BBEE compliant contributor in South Africa, we remain committed to creating meaningful and sustainable transformation across all our entities.",
    },
  ];

  return (
    <div className={`landing-page ${isDropdownOpen ? 'dropdown-open' : ''}`}>
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome to Mukuru * HackHers</h1>
          <p>Empowering Africa's Financial Future</p>
          <div className="country-dropdown" ref={dropdownRef}>
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              Select Country ▼
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu-wrapper">
                <input
                  type="text"
                  placeholder="Search countries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="country-search"
                />
                <ul className="dropdown-menu">
                  {filteredCountries.map((country) => (
                    <li key={country.name}>
                      <a
                        href="#"
                        className="country-link"
                        onClick={(e) => {
                          e.preventDefault();
                          handleCountrySelect(country.path);
                        }}>
                        <span className="flag">{country.flag}</span>
                        {country.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      <div className="content-map">
        {contentSections.map((section) => (
          <section key={section.id} id={section.id} className="content-section">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}
      </div>

      <section id="group" className="mukuru-group">
        <h2>The Mukuru Group</h2>
        <div className="stats">
          {[
            { icon: "👤", text: "14 million + customers served" },
            { icon: "↔️", text: "Over 100 million transactions" },
            { icon: "📍", text: "320,000 pay-in and payout locations" },
            { icon: "ℹ️", text: "150 Info Centres across South Africa" },
            { icon: "🏪", text: "1000+ Orange Booths across Africa" },
          ].map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="icon">{stat.icon}</div>
              <p>{stat.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p><strong>Email:</strong> online@mukuru.com</p>
          <p><strong>Call:</strong> +44 20 7183 0052</p>
          <p><strong>WhatsApp:</strong> +44 20 7183 0052</p>
          <p><strong>Office Hours:</strong></p>
          <p>Mon – Sat: 08:00 – 19:00</p>
          <p>Sun: 08:00 – 12:00</p>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <h3>Send us a message</h3>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default LandingPage;