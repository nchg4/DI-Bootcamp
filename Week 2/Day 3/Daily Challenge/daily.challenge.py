# 1
word = input("Enter a word: ")

index_dict = {}

for i, char in enumerate(word):
    if char not in index_dict:
        index_dict[char] = []
    index_dict[char].append(i)

print(index_dict)

# Im submitting this now and will go over number 2 in class tomorrow with Yossi because I ran into a few problems with it