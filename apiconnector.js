import fetch from 'node-fetch';
import promptSync from 'prompt-sync';

const prompt = promptSync();

async function getPosts(countryInput) {
    switch (countryInput.toLowerCase()) {
        case 'malawi':
            malawi();
            break;
        case 'zambia':
            zambia();
            break;
        case 'zimbabwe':
             zimbabwe();
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

// Other functions unchanged...

// Run the script
const countryInput = prompt("What country are you in? Malawi, Zimbabwe, Zambia: " );
getPosts(countryInput);
