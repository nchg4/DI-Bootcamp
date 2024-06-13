# Convert Lists Into Dictionaries; Exercise 1:
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30] 
dict = {keys: values for keys, values in zip(keys, values)}
print(dict)

#  Cinemax #2; Exercise 2:
family = {"Rick": 43, 'Beth': 13, 'Morty': 5, 'Summer': 8}

ticket = {
    'under_3': 0,
    '3_to_12': 10,
    'over_12': 15
}
total_cost = 0
for name, age in family.items():
    if age < 3:
        cost = ticket['under_3']
    elif 3 <= age <= 12:
        cost = ticket['3_to_12']
    else:
        cost = ticket['over_12']
    print(f"{name} pays {cost} dollars")
    total_cost += cost
print(f"Total cost for the family: {total_cost}")

# Zara; Exercise 3:
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {"France": ["blue"], "Spain": ["red"], "US": ["pink", "green"]},
}
brand["number_stores"]=2
#4
brand["country creation"] = "Spain"
print(brand)
# if "international_competitors" in brand:

# print(brand)
