file_location = "file_management/file.txt"

# 1. Reading the file all at once:
with open(file_location) as file:
    content = file.read() #reads all of the files content into a single string
    print(content)

with open(file_location) as file:
    content = file.readlines() # reads all of the files content into string lines in a list: #returns us a list of strings
    print(content)

# 2. Manual navigation with cursor
    
with open(file_location) as file:
    current_cursor_location = file.tell()
    print(current_cursor_location)


    file.seek(6)
    current_cursor_location = file.tell()
    print(current_cursor_location)
    print(file.read())

cursor_location = 0

with open(file_location) as file:
    file.read()
    cursor_location = file.tell()

print(cursor_location)

#now we know that 156 is the end, but we want to see only new info..
#how? 

cursor_location = 156

with open(file_location) as file:
    
    file.seek(cursor_location)
    print(file.seek)
    
    file.seek(0)

print(cursor_location)
