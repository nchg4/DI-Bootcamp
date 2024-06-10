#List or Array

#Can store any type of values 
#A sequence that be indexed (like with strins)
#They are mutable

a_list = ['a', 120, ['b', 12]]

print(len(a_list))

print(a_list[0])
print(a_list[-1])

inner_list = a_list[-1]

print(inner_list)
print(inner_list [0], inner_list[-1])

numbers = [1, 2, 3, 4, 5, 6, 7 ,8] # Important: store same type of values inside the list

# sum = 0 
# for number in numbers:
#     sum += number

# print(sum)

numbers_sum = sum(numbers)
print(numbers_sum)


#slicing expample

print(numbers [0:5])


# Mutable - They can change and be updated 

letters = ['a','b','x','d','e']

#updating in-place - update the list directly 
letters[2] = 'c'

print(letters)

# letters[0] = 'N'
# letters[1] = '0'
# letters[2] = 'a'
# letters[3] = 'm'
# letters[4] = 'G'
# print(letters)


#adding - append method
letters.append('L')
print(letters)

#removing letters
letters.remove('L')
print(letters)


#Insert - Insert value at a specific index
letters_b = ['a', 'c']
letters_b.insert(1, "b")
print(letters)


#List concatination
numbers_a = [1, 2, 3]
numbers_b = [4, 5, 6]

