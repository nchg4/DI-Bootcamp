from api import extract_countries, get_data


#Step 1 - etract the data from the api 

url = "https://restcountries.com/v3.1/all"
data = get_data(url)
countries_info = extract_countries(data, 0)
print(countries_info)


# Step 2 - 
