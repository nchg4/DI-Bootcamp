personal_information_chen = {
    "Name": "Chen",
    "Residence": "Paris",
    "Age": 22,
}
personal_information_eitan = {
    "Name": "Eitan",
    "Residence": "Miami",
    "Age": 27,
    "Phone_number": "3053342526",
}

name = personal_information_chen ["Name"]
print(name)

phone_number_chen =  personal_information_chen.get("Phone_number","3053342526")
print(phone_number_chen)

phone_number_eitan =  personal_information_eitan.get("Phone_number","3053342526")
print(phone_number_eitan)

