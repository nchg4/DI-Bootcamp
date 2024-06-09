# Ask user for a string
text =input("Enter a string (10 characters long): ")

# Check the length of the string
if len(text) < 10:
    print ("String not long enough")
elif len(text) > 10:
    print ("String too long")
else:
    print ("Perfect string")

# Print the first and last characters of the string
print ("First character:"), text[0]
print ("Last character:"), text[-1]

# Print the string character by character using a for loop
print ("Printing string character by character:")
for char in text:
    print ("char")

