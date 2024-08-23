import {useState} from 'react';

const countries = [
   "Zimbabwe","Namibia", "Zambia"
    // Add more countries as needed
  ];
function CountryDropDown(){

    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('Select a country');

    const toggleDropdown = () => setIsOpen(!isOpen);
    const selectCountry = (country) => {
        setSelectedCountry(country);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
            {selectedCountry}
        </button>
        {isOpen && (
            <div className="dropdown-menu">
            {countries.map((country) => (
                <div
                key={country}
                className="dropdown-item"
                onClick={() => selectCountry(country)}
                >
                {country}
                </div>
            ))}
            </div>
        )}
        </div>
    );

}
export default CountryDropDown;