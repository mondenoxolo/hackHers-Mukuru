import fetch from 'node-fetch';

const fetch = require('node-fetch'); // Uncomment this line if you are running in Node.js environment.

async function getPosts(countryInput) {
    switch (countryInput.toLowerCase()) {
        case 'malawi':
            await malawi();
            break;
        case 'zambia':
            await zambia();
            break;
        case 'zimbabwe':
            await zimbabwe();
            break;
        default:
            console.log("Invalid country error");
    }
}

async function malawi() {
    const mwUrl = 'https://api-ubt.mukuru.com/taurus/v1/resources/pay-out-partners/8419/locations?page_size=1000';
    try {
        const response = await fetch(mwUrl);
        if (response.ok) {
            console.log("MALAWI RESPONSE");
            const posts = await response.json();
            const malawiCities = [...new Set(posts.items.map(item => item.address.city))];
            console.log(malawiCities);

            const cityChosenByUser = prompt("Choose a city in your country: ");

            const addressesAndCoordinates = posts.items
                .filter(item => item.address.city === cityChosenByUser)
                .map(item => ({
                    streetAddress: item.address.streetAddress,
                    coordinates: item.coordinates
                }));

            if (addressesAndCoordinates.length > 0) {
                addressesAndCoordinates.forEach(address => console.log(address));
            }
        } else {
            console.log("Error occurred MALAWI", response.status);
        }
    } catch (error) {
        console.log("Error", error);
    }
}

async function zimbabwe() {
    const zwUrl = 'https://api-ubt.mukuru.com/taurus/v1/resources/pay-out-partners/7854/locations?page_size=1000';
    try {
        const response = await fetch(zwUrl);
        if (response.ok) {
            console.log("RESPONSE FOR Zimbabwe");
            const posts = await response.json();
            const zimbabweCities = [...new Set(posts.items.map(item => item.address.city))];
            console.log(zimbabweCities);

            const cityChosenByUser = prompt("Choose a city in your country: ");

            const addressesAndCoordinates = posts.items
                .filter(item => item.address.city === cityChosenByUser)
                .map(item => ({
                    streetAddress: item.address.streetAddress,
                    coordinates: item.coordinates
                }));

            if (addressesAndCoordinates.length > 0) {
                addressesAndCoordinates.forEach(address => console.log(address));
            }
        } else {
            console.log("Error occurred", response.status);
        }
    } catch (error) {
        console.log("Error", error);
    }
}

async function zambia() {
    const zmUrl = 'https://api-ubt.mukuru.com/taurus/v1/resources/pay-out-partners/26607/locations?page_size=1000';
    try {
        const response = await fetch(zmUrl);
        if (response.ok) {
            console.log("RESPONSE FOR Zambia");
            const posts = await response.json();
            const zambiaCities = [...new Set(posts.items.map(item => item.address.city))];
            console.log(zambiaCities);

            const cityChosenByUser = prompt("Choose a city in your country: ");

            const addressesAndCoordinates = posts.items
                .filter(item => item.address.city === cityChosenByUser)
                .map(item => ({
                    streetAddress: item.address.streetAddress,
                    coordinates: item.coordinates
                }));

            if (addressesAndCoordinates.length > 0) {
                addressesAndCoordinates.forEach(address => console.log(address));
            }
        } else {
            console.log("Error occurred", response.status);
        }
    } catch (error) {
        console.log("Error", error);
    }
}

// Run the script
const countryInput = prompt("What country are you in? Malawi, Zimbabwe, Zambia");
getPosts(countryInput);
