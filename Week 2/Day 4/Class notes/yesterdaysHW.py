word = 'dodo'

dictionary = {}
#langth = 0

for index in enumerate(word):
    print(index)

for index, letter in enumerate(word):
    print(index, letter)
    
for index, letter in enumerate(word):
    if letter in dictionary:
        dictionary[letter].append(index)
    else:
        dictionary[letter] = [index]
    # int has no value so make sure index is in a []
        print(dictionary)




# Sorting in alphebeitical order...
letters = ["a", "z", "q", "d", "h"]

# letters.sorted(reverse=True)
# this will ^ be backwards ABC; reg, .sorted will sort it in Alphabetical order
# print(letters)

sorted_letters = sorted(letters)
print(sorted_letters)
# print(letter)

# sort()
# sorted()