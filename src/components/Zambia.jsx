import { useState } from 'react';
import './Zam.css';

function Zambia() {
    return (
        <>
            <div className="background-container">
                <div className="content">
                    <div className="icon-header-container">
                        <div className="icon-container">
                            <img src="src/pictures/Zambia/cash_icon.png" alt="Cash Icon" />
                        </div>
                        <h1>Zambia</h1>
                    </div>
                    <p>Receiving money in Zambia has never been easier. <br /> For fast and affordable money transfers, choose Mukuru.</p>
                    <div className="image-list-container">
                        <ul className="image-list">
                            <li><img src="/src/pictures/Zambia/mukuru.png" alt="mukuru" /></li>
                            <li><img src="/src/pictures/Zambia/Zoona.png" alt="Zoona" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Zambia;