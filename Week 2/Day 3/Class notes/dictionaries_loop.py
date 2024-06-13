dict1 = {"Name": "Noam", "Residence": "Tel Aviv"}
dict2 = {"Name": "Eitan", "Residence": "Miami Beach"}
dict3 = {"Name": "Yaelle", "Residence": "Jerusalem"}

# Looping through the keys
for key in dict1:
    print(key)

# Looping through the values 
for value in dict1.values():
print(value)

# Looping through the keys and values
for key, value in dict1.items():
    print(key, value)

    dictionaries = [dict1, dict2, dict3]

    for dictionary in dictionaries:
        print(f"Hello {dictionary["Name"]}!")
