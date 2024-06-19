file_location = "file_management/file2.txt"

new_content = "\n THIS IS A NEW LINE TO ADD"

with open(file_location, mode='a') as file:
    file.write(new_content)


#THIS JUST ADDS
# Does not erase any previous content
    
