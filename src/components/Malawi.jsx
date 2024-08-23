import { useState } from 'react';
import './Malawi.css';

function Malawi() {
    return (
        <>
            <div className="background-container">
                <div className="content">
                    <div className="icon-header-container">
                        <div className="icon-container">
                            <img src="src/pictures/Malawi/cash_icon.png" alt="Cash Icon" />
                        </div>
                        <h1>Malawi</h1>
                    </div>
                    <p>Receiving money in Malawi has never been easier. <br /> For fast and affordable money transfers, choose Mukuru.</p>
                    <div className="image-list-container">
                        <ul className="image-list">
                            <li><img src="src/pictures/Malawi/co.png" alt="CO" /></li>
                            <li><img src="src/pictures/Malawi/Fanca.png" alt="Fanca" /></li>
                            <li><img src="src/pictures/Malawi/mpamba.png" alt="Mpamba" /></li>
                            <li><img src="src/pictures/Malawi/mukuru.png" alt="Mukuru" /></li>
                            <li><img src="src/pictures/Malawi/nbd.png" alt="NBD" /></li>
                            <li><img src="src/pictures/Malawi/pep.png" alt="PEP" /></li>
                            <li><img src="src/pictures/Malawi/post.jpeg" alt="Post" /></li>
                            <li><img src="src/pictures/Malawi/tns.png" alt="TNS" /></li>
                            <li><img src="src/pictures/Malawi/airtel.jpeg" alt="Airtel" /></li>
                            <li><img src="src/pictures/Malawi/FDH bank.png" alt="FDH Bank" /></li>
                            <li><img src="src/pictures/Malawi/images.png" alt="images.png" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Malawi;
