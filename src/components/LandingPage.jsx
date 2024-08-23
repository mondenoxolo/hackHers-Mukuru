<<<<<<< Updated upstream
import { useState } from 'react';
import CountryDropDown from './CountryDropDown';
import './LandingPage.css';

function LandingPage() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'who', 'commitment', 'group'];
            let current = '';

            for (let section of sections) {
                const element = document.getElementById(section);
                if (element.getBoundingClientRect().top <= 100) {
                    current = section;
                }
            }

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    const contentSections = [
        {
            id: 'about',
            title: 'About Us',
            content: 'Learn more about Mukuru, a leading next-generation financial services platform for Africa"s emerging consumers. We are inspired by our customers, enabling financial inclusion through technology solutions and a range of financial services products to meet their everyday needs.'
        },
        {
            id: 'who',
            title: 'Who is Mukuru',
            content: 'Just like you, we dream of a future that is filled with possibility; where the impossible becomes possible and the obstacles in our path cannot stand in the way of achieving great things. That"s why we created Mukuru – a digital platform that empowers you to take control of your future by putting financial freedom in your hands. Powered by advanced technology, Mukuru provides access to convenient, secure, reliable, and affordable financial solutions. Whether you"re sending money home, providing your family with peace of mind or need some help in overcoming a challenge, Mukuru"s products and services are designed to make it easier for you to do what you need to do, when you need it done.'
        },
        {
            id: 'commitment',
            title: 'Our Commitment to Inclusivity',
            content: 'At Mukuru, we are steadfast in our commitment to advancing economic empowerment and inclusivity. As a B-BBEE compliant contributor in South Africa, we remain committed to creating meaningful and sustainable transformation across all our entities. We believe that empowering our diverse workforce through skills enablement, fostering a culture of inclusivity, promoting supplier diversity, supporting socio-economic development, and providing relevant education to our consumers, will help us in our vision to contribute to a prosperous African continent.'
        }
    ];

    return (
        <div className="landing-page">
            <header className="navbar">
                <div className="logo">
                    <img src="https://www.mukuru.com/wp-content/uploads/2023/07/Mukuru-Logo-Pack-Black.jpg" alt="Mukuru Logo" />
                </div>
                <nav>
                    <ul>
                        {['home', 'about', 'who', 'commitment', 'group'].map((section) => (
                            <li key={section}>
                                <a 
                                    href={`#${section}`} 
                                    onClick={() => scrollToSection(section)}
                                    className={activeSection === section ? 'active' : ''}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <section id="home" className="hero">
                <div className="hero-content">
                    <h1>Welcome to Mukuru</h1>
                    <p>Empowering Africa's Financial Future</p>
                </div>
            </section>

            <div className="content-map">
                {contentSections.map((section) => (
                    <section key={section.id} id={section.id} className="content-section">
                        <h2>{section.title}</h2>
                        <p>{section.content}</p>
                    </section>
                ))}
            </div>
            <div className='dropdown'>
                 <CountryDropDown/>
            </div>

            <section id="group" className="mukuru-group">
                <h2>The Mukuru Group</h2>
                <div className="stats">
                    {[
                        { icon: '👤', text: '14 million + customers served' },
                        { icon: '↔️', text: 'Over 100 million transactions' },
                        { icon: '📍', text: '320 000 pay-in and payout locations' },
                        { icon: 'ℹ️', text: '150 Info Centres across South Africa' },
                        { icon: '🏪', text: '1000+ Orange Booths across Africa' }
                    ].map((stat, index) => (
                        <div key={index} className="stat-item">
                            <div className="icon">{stat.icon}</div>
                            <p>{stat.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
=======
// import { useState } from 'react';

// function LandingPage() {
//     return (
//         <>
//             <div style={{
//                 backgroundImage: `url('https://www.mukuru.com/wp-content/uploads/2022/05/Send-money-to-Eswatini-Mukuru.jpg')`,
//                 backgroundPosition: 'center',
//                 backgroundSize: 'cover',
//                 backgroundRepeat: 'no-repeat',
//                 width: '100vw',
//                 height: '70vh',
//                 position: 'relative',
//             }}>
//             </div>
//         </>
//     );
// }

// export default LandingPage;
>>>>>>> Stashed changes
