# Challenge num. 1:

word = input("Enter a word: ")

index_dict = {}

for i, char in enumerate(word):
    if char not in index_dict:
        index_dict[char] = []
    index_dict[char].append(i)

print(index_dict)