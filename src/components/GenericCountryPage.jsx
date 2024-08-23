import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function GenericCountryPage() {
    const { country } = useParams();

    const styles = {
        pageContainer: {
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
        },
        contentContainer: {
            flex: 1,
            backgroundImage: 'url("https://t3.ftcdn.net/jpg/05/80/55/06/360_F_580550600_UR82VXGI0SeM33oPmsEWTFzGwlBfHKtB.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        messageBox: {
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            maxWidth: '80%',
        },
        title: {
            fontSize: '2.5rem',
            color: '#333',
            marginBottom: '1rem',
        },
        message: {
            fontSize: '1.2rem',
            color: '#666',
            marginBottom: '0.5rem',
        },
        icon: {
            fontSize: '4rem',
            marginBottom: '1rem',
        },
    };

    return (
        <div style={styles.pageContainer}>
            <Navbar />
            <div style={styles.contentContainer}>
                <div style={styles.messageBox}>
                    <div style={styles.icon}>🚧</div>
                    <h1 style={styles.title}>{country}</h1>
                    <p style={styles.message}>We're sorry, but information for {country} is still in progress.</p>
                    <p style={styles.message}>Please check back later for updates on our services in this country.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default GenericCountryPage;