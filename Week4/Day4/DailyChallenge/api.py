import requests
from typing import Any
# 1. try to understand the structure 

# send HTTP request
url = "https://restcountries.com/v3.1/all"

# recieve HTTP respond
# GET - a request used for getting info. from an api
# Post - a request used for performing an action in the API

response= requests.get(url)

print(response.status_code)
# 2xx/200 - GOOD
# 3xx - Redirect 
# 4xx - BAD(Something went wrong)
# 5xx - BAD(Something went wrong)

data = response.json()

def get_data(url: str) -> Any:
    response = request.get(url)

# print(data)

#what type of data is this
# print(type(data))

# print(data[0].keys())

# 'name', 'capital', 'flag', 'subregion', 'population'

# print(data[0]["name"])
# Now we have all the info of one place and we need to select exactly what we want:
# print(data[0]["name"]["common"])
def extract_country_info(country_full_info: dict) -> dict:

    common_name = data[0]["name"]["common"]

    capital = data[0]["capital"][0]

    flag = data[0]["flag"] # 🇼🇫

    subregion = data[0]["subregion"] # Polynesia

    population = data[0]["population"] # 11750
    # print(data[0]["population"])

    return {
        "name": common_name,
        "capital": capital,
        "flag": flag,
        "subregion": subregion,
        "population": population,
    }

def extract_countries(data: list[dict], number_of_countries: int) -> list[dict]:
    countries_info_list = []
    for i in range(10):
        country_info = extract_country_info(data[i])
        countries_info_list.append(country_info)

        return countries_info_list

    # for country_info in countries_info_list:
    #     print(country_info)

url = "https://restcountries.com/v3.1/all"
data = get_data(url)
countries_info = extract_countries(data, 0)
print(countries_info)



# row = data[20]
# print(extract_country_info(row))




# print(data[10]["name"]["common"])
# print(data[100]["name"]["common"] #-- J AN EX

