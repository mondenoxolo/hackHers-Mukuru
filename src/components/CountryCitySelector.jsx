import React, { useState } from 'react';

const CountryCitySelector = () => {
  const [country, setCountry] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [addresses, setAddresses] = useState([]);

  const countryUrls = {
    malawi: 'https://api-ubt.mukuru.com/taurus/v1/resources/pay-out-partners/8419/locations?page_size=1000',
    zambia: 'https://api-ubt.mukuru.com/taurus/v1/resources/pay-out-partners/26607/locations?page_size=1000',
    zimbabwe: 'https://api-ubt.mukuru.com/taurus/v1/resources/pay-out-partners/7854/locations?page_size=1000'
  };

  const handleCountryChange = async (e) => {
    const selectedCountry = e.target.value.toLowerCase();
    setCountry(selectedCountry);
    setSelectedCity(''); // Reset city selection
    setAddresses([]); // Reset addresses

    if (countryUrls[selectedCountry]) {
      const response = await fetch(countryUrls[selectedCountry]);
      if (response.ok) {
        const posts = await response.json();
        const countryCities = [...new Set(posts.items.map(item => item.address.city))];
        setCities(countryCities);
      } else {
        console.error(`Error fetching data for ${selectedCountry}`);
      }
    }
  };

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);

    // Fetch the data again for the selected country
    const countryUrl = countryUrls[country];
    fetch(countryUrl)
      .then(response => response.json())
      .then(data => {
        const filteredAddresses = data.items
          .filter(item => item.address.city === city)
          .map(item => ({
            streetAddress: item.address.streetAddress,
            coordinates: item.coordinates
          }));

        setAddresses(filteredAddresses);
      })
      .catch(error => console.error('Error fetching city addresses:', error));
  };

  return (
    <div>
      <h1>Select a Country</h1>
      <select value={country} onChange={handleCountryChange}>
        <option value="">-- Select a Country --</option>
        <option value="malawi">Malawi</option>
        <option value="zambia">Zambia</option>
        <option value="zimbabwe">Zimbabwe</option>
      </select>

      {cities.length > 0 && (
        <>
          <h2>Select a City</h2>
          <select value={selectedCity} onChange={handleCityChange}>
            <option value="">-- Select a City --</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        </>
      )}

      {addresses.length > 0 && (
        <>
          <h2>Addresses and Coordinates in {selectedCity}</h2>
          <ul>
            {addresses.map((address, index) => (
              <li key={index}>
                <strong>Address:</strong> {address.streetAddress}<br />
                <strong>Coordinates:</strong> {JSON.stringify(address.coordinates)}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CountryCitySelector;
