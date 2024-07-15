personal_information_chen = {
    "Name": "Chen",
    "Residence": "Paris",
    "Age": 22,
}
#Adding info 1 way
personal_information_chen["Phone_number"] = "+334329403" #adds a new key value that is not in og ^
print(personal_information_chen)

#Adding info way 2
additional_info_yossi = {"Birthday": "06/22/2002", "Favorite fruit": "Kiwi"}
personal_information_chen.update(additional_info_yossi)
print(personal_information_chen)