# Manual approach - Manually opening and closing files
file_location = "file_management/file.txt"
file = open(file_location)

# """ "DO SOMETHING HERE""""

file.close()

#MOST COMMON WAY TO OPEN A FILE IN PY
## Context maneger approch; automatically closes the file for you after 
with open(file_location) as file:
    pass
    # """ "DO SOMETHING HERE""""

#File is closed after performing the operations inside the context manager 
