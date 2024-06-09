# Ask user for a string
text =(input("Enter a string (10 characters long): "))

# Check the length of the string
if  len (text) < 10:
    print ("String not long enough")
elif len(text) > 10:
    print ("String too long")
else:
    print ("Perfect string")





