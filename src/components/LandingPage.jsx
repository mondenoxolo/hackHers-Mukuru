import { useState } from 'react';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="landing-page">
            <header className="navbar">
                <div className="logo">
                    <img src="https://www.mukuru.com/wp-content/uploads/2023/07/Mukuru-Logo-Pack-Black.jpg" alt="Mukuru Logo" />
                </div>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#receive">Receive Money</a></li>
                    </ul>
                </nav>
            </header>

            <div style={{
                backgroundImage: `url('https://www.mukuru.com/wp-content/uploads/2022/05/Send-money-to-Eswatini-Mukuru.jpg')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh',
                position: 'relative',
            }}>
                <div className="content-overlay">
                    <section id="home" className="hero">
                        <h1>About Us</h1>
                        <p>
                            Learn more about Mukuru, a leading next-generation financial services platform for Africa's emerging consumers. 
                            We are inspired by our customers, enabling financial inclusion through technology solutions and a range of 
                            financial services products to meet their everyday needs.
                        </p>
                    </section>

                    <section id="about" className="who-is-mukuru">
                        <h2>Who is Mukuru</h2>
                        <p>
                            Just like you, we dream of a future that is filled with possibility; where the impossible becomes possible 
                            and the obstacles in our path cannot stand in the way of achieving great things.
                        </p>
                        <p>
                            That's why we created Mukuru – a digital platform that empowers you to take control of your future by 
                            putting financial freedom in your hands.
                        </p>
                        <p>
                            Powered by advanced technology, Mukuru provides access to convenient, secure, reliable, and affordable 
                            financial solutions.
                        </p>
                        <p>
                            Whether you're sending money home, providing your family with peace of mind or need some help in overcoming 
                            a challenge, Mukuru's products and services are designed to make it easier for you to do what you need to do, 
                            when you need it done.
                        </p>
                    </section>

                    <section id="receive" className="commitment">
                        <h2>Our Commitment to Inclusivity</h2>
                        <p>
                            At Mukuru, we are steadfast in our commitment to advancing economic empowerment and inclusivity. As a B-BBEE 
                            compliant contributor in South Africa, we remain committed to creating meaningful and sustainable transformation 
                            across all our entities. We believe that empowering our diverse workforce through skills enablement, fostering 
                            a culture of inclusivity, promoting supplier diversity, supporting socio-economic development, and providing 
                            relevant education to our consumers, will help us in our vision to contribute to a prosperous African continent.
                        </p>
                    </section>

                    <section className="mukuru-group">
                        <h2>The Mukuru Group</h2>
                        <div className="stats">
                            <div className="stat-item">
                                <div className="icon">👤</div>
                                <p>14 million + customers served</p>
                            </div>
                            <div className="stat-item">
                                <div className="icon">↔️</div>
                                <p>Over 100 million transactions</p>
                            </div>
                            <div className="stat-item">
                                <div className="icon">📍</div>
                                <p>320 000 pay-in and payout locations</p>
                            </div>
                            <div className="stat-item">
                                <div className="icon">ℹ️</div>
                                <p>150 Info Centres across South Africa</p>
                            </div>
                            <div className="stat-item">
                                <div className="icon">🏪</div>
                                <p>1000+ Orange Booths across Africa</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;