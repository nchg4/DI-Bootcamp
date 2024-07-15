# Convert Lists Into Dictionaries; Exercise 1:
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30] 
dict = {keys: values for keys, values in zip(keys, values)}
print(dict)

# Cinemax #2; Exercise 2:
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
major_color = {
    "France": "Blue", 'Spain': 'red', 'US': 'pink' 'green'}
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": major_color}

brand["number_stores"]=2
print("Zaras clients include 'types_of_clothes")
brand["country creation"] = "Spain"
print(brand)
if 'international_compeditors' in brand:
    brand['international_competitors'].append("Desigual")

del brand["creation_date"]

print(brand["international_competitors"][-1])

print('Major clothing store in the US:', brand["major_color"]["US"])

print('Number of key-value paris:', len(brand))

print("Keys of the dictionary:", list(brand.keys()))

more_about_zara = {
    'creation_date': 1975,
    'number_stores': 10000}

brand.update(more_about_zara)

print("Numer of stores updatep:", brand["number_stores"])

# Exercise 4 : Disney Characters
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

#1
users_A = {}

for index, name in enumerate(users):
    users_A[name] = index

    print(users_A)

# 2
    users_B = {}

for index, name in enumerate(users):
    users_B[index] = name

print(users_B)

# 3
users_C = (sorted(users_A.items()))

print(users_C)

