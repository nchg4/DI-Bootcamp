file_location = "file_management/file2.txt"

#Writing here into another file:

with open(file_location, mode='w') as file: # mode 'W' overwrites the file, and overwrites whats in the file
    content = "Hi my name is .... Today is ...."
    file.write(content)

with open(file_location, mode='w') as file: # mode 'W' overwrites the file, and overwrites whats in the file
    content2 = "Hello world"
    file.write(content2)


## If i write together like this:
    
    content1 = "\n Hi blah blah.."
    content3 = "\nHello ..."
    file.write(content1 + content3)
\

with open(file_location, mode="w") as file: # mode 'W' overwrites the file, and overwrites whats in the file]
    file.writelines(content)



## If you want to add content then use the mode add, if "W" is used it will overwrite the file with new content
    
    