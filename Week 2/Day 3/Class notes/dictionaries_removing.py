personal_information_chen = {
    "Name": "Chen",
    "Residence": "Paris",
    "Age": 22,
}

# 1
personal_information_chen.pop("Residence")
print(personal_information_chen)

# Can remove and also store info. at the same time; return a value
residence = personal_information_chen.pop("Residence")
print(personal_information_chen)
print(residence)

# 2
del personal_information_chen['Age']
print(personal_information_chen)