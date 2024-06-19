# Python file I/O exercise 
file_location = "file_class.txt"

# Read the file line by line
with open(file_location) as file:
    content = file.read() 
    print(content)
   

# Read only the 5th line of the file
    contents = ""
with open(file_location) as file:
    content = file.read() 

    content_list = content.split("\n")

    print(content_list[4])

# Read only the 5 first characters of the file
    with open(file_location) as file:
        chars = file.read(5)
        print("First 5 chars:", chars)

# Find out how many occurences of the names "Darth", "Luke" and "Lea" are in the file
    #usuing counter class ##Good tool to have 
        #look into collections
from collections import Counter
character_counter = Counter(content_list)
print(character_counter)

# Append your first name at the end of the file
with open(file_location, mode= "a") as file:
        file.write("\nNoam")

# Append "SkyWalker" next to each first name "Luke"
for i, character in enumerate(content_list): # (0, "Darth"), (1, "Luke")
    if character == "Luke":
         content_list[i] += "Skywalker"

add_skywalker_str = "\n".join(content_list)

print(add_skywalker_str)

with open(file_location, mode = "w") as file:
     file.write(add_skywalker_str)