# numbers = []

# for i in range (100):
#     numbers.append(i)

#     print(numbers)


numbers = [i for i in range(101)]
# [Element_to_store(i) for element in collection/range]
numbers2 = [1,2,3,4,5]

numbers3 = [number * 2 for number in numbers2]

print(numbers3)

#Exercise 
letetrs_lower = ['a', 'b', 'c', 'd']
print(letetrs_lower)
letetrs_upper = [char.upper() for char in letetrs_lower]
print(letetrs_upper)

#Result; letters_upper = [A, B, C, D]