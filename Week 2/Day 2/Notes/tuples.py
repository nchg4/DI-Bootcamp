# Tuples - like lists BUT
# They are not Mutable - they cannt be changed 
# Read only - ideal for storing sensitive data

a_tuple = ("Noam", 22, "Tel Aviv", "Israel", "053322")

first_element = a_tuple[0]
last_element = a_tuple[-1]

for element in a_tuple:
    print(element)

    print(22 in a_tuple) 



    b_tuple = (1, 2, 3, 4)
    print(b_tuple)
    b_tuple = list(b_tuple)
    b_tuple.append(5)
    print(b_tuple)
