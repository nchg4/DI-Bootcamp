
def upper_list(string):
    return string.upper()

fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]


map_obj = map(upper_list, fruit)

print(map_obj)
# Convert to a list
print(list(map_obj))

# Filter
def starts_with_A(string):
    return string[0] == 'A'

fruits2 = ["Apple", "Banana", "Pear", "Apricot", "Orange"]

filtered = list(filter(starts_with_A, fruits2))
print(filtered)

# def sum_numbers(a,b):
#     return a+b

# my_list = [1,3,5,7]
# reduced_list = reduce(sum_numbers, my_list)
# print(reduced_list)


#Lambda
lambda s:s.upper()

map_obj = map(lambda s:s.upper(), fruit)

print(list(map_obj))