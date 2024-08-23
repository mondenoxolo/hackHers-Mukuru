import requests


def get_posts(country_input):

    if country_input == "malawi":
        malawi()

    elif country_input == "zambia":
        zambia()

    elif country_input == "zimbabwe":
        zimbabwe()

    else:
        print("Invalid country error")

def malawi():

    mw_url = 'https://api-ubt.mukuru.com/taurus/v1/resources/pay-out-partners/8419/locations?page_size=1000'
    mw_response = requests.get(mw_url)
    try:
        if mw_response.status_code == 200:
            print("MALAWI RESPONSE")
            posts = mw_response.json()
            #print(posts)

            malawi_cities = [item['address']['city'] for item in posts['items']]
            malawi_cities = list(dict.fromkeys(malawi_cities))
            print(malawi_cities)

            city_chosen_by_user = input("choose a city in your country: ")
            
            addresses_and_coordinates = [
                {
                    'streetAddress': item['address']['streetAddress'],
                    'coordinates' :item['coordinates'] 
                    }
                for item in posts['items']
                #item['address']['streetAddress'] for item in posts['items']
                if item['address']['city']== city_chosen_by_user]
            
            #print(addresses_and_coordinates)

            if addresses_and_coordinates:
                #print(f"address in {city_chosen_by_user}")
                for address in addresses_and_coordinates:
                    print(address)

            return posts
        else:
            print("Error occured MALAWI", mw_response.status_code)
            return None

    except requests.exceptions.RequestException as e:
        print("Error", e)
        return None


def zimbabwe():
    zw_url = 'https://api-ubt.mukuru.com/taurus/v1/resources/pay-out-partners/7854/locations?page_size=1000'

    zw_response = requests.get(zw_url)
    try:
        if zw_response.status_code == 200:
            print("RESPONSE FOR Zimbabwe")
            posts = zw_response.json()
            
            zimbabwe_cities = [item['address']['city'] for item in posts['items']]
            zimbabwe_cities = list(dict.fromkeys(zimbabwe_cities))
            print(zimbabwe_cities)

            city_chosen_by_user = input("choose a city in your country: ")
            
            addresses_and_coordinates = [
                {
                    'streetAddress': item['address']['streetAddress'],
                    'coordinates' :item['coordinates'] 
                    }
                for item in posts['items']
                #item['address']['streetAddress'] for item in posts['items']
                if item['address']['city']== city_chosen_by_user]
            
            print(addresses_and_coordinates)

            if addresses_and_coordinates:
                print(f"address in {city_chosen_by_user}")
                for address in addresses_and_coordinates:
                    print(address)

            return posts
        else:
            print("Error occured", zw_response.status_code)
            return None

    except requests.exceptions.RequestException as e:
        print("Error", e)
        return None

def zambia():
    zm_url = 'https://api-ubt.mukuru.com/taurus/v1/resources/pay-out-partners/26607/locations?page_size=1000'
    zm_response = requests.get(zm_url)
   
    try:
        if zm_response.status_code == 200:
            print("RESPONSE FOR Zambia")
            posts = zm_response.json()
            
            zambia_cities = [item['address']['city'] for item in posts['items']]
            zambia_cities = list(dict.fromkeys(zambia_cities))
            print(zambia_cities)

            city_chosen_by_user = input("choose a city in your country: ")
            
            addresses_and_coordinates = [
                {
                    'streetAddress': item['address']['streetAddress'],
                    'coordinates' :item['coordinates'] 
                    }
                for item in posts['items']
                #item['address']['streetAddress'] for item in posts['items']
                if item['address']['city']== city_chosen_by_user]
            
            print(addresses_and_coordinates)

            if addresses_and_coordinates:
                print(f"address in {city_chosen_by_user}")
                for address in addresses_and_coordinates:
                    print(address)

            return posts

    except requests.exceptions.RequestException as e:
        print("Error", e)
        return None

        

if __name__ == '__main__':
    country_input = input("What country are you in? Malawi, Zimbabwe, Zambia   ")
    get_posts(country_input)