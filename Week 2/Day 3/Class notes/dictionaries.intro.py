# Dicttionary in python - Key-Value based Data Collection 
# Lists are index based Data Collections --Main dif.

# Keys are always unique 

# We use dictionaries when we have categories for data that we want to collect into a single place.


a_dictionary = {
   "Sun": "A celestial body with specific characteristics...",
   "Moon": "A celestial body located near Earth..."
}

user_choice = "Sun"

print(a_dictionary[user_choice])


personal_information_yossi = {
    "Name": "Yossi",
    "Residence": "Tel Aviv",
    "Age": 33,
}

personal_information_hen = {
    "Name": "Hen",
    "Residence": "Paris",
    "Age": 22,
}

personal_information_ron = {
    "Name": "Ron",
    "Residence": "Efrat",
    "Age": 27,
}
#Making a list
people = {
    "Ron":     personal_information_ron, 
    "Hen":     personal_information_hen, 
     "Yossi":  personal_information_yossi
}

print(people["Yossi"]["Residence"])

# Also can put everyone in one dictionary
people = {
{ "Name": "Yossi",
    "Residence": "Tel Aviv",
    "Age": 33,},

{ "Name": "Hen",
    "Residence": "Paris",
    "Age": 22,},

{ "Name": "Ron",
    "Residence": "Efrat",
    "Age": 27, },

}