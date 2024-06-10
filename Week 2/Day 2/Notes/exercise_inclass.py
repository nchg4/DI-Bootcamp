#In class exercise 1
list1 = [5, 10, 15, 20, 25, 50, 20]

list1[3] = 200

print(list1)

for i, value in enumerate(list1):
    print(i, value)


#Find the location
list1 = [5, 10, 15, 20, 25, 50, 20]

location_20 = list1.index(20)

list1[location_20] *= 10

print(location_20)
print(list1)



#In class exercise 2
a_tuple = (10, 20, 30, 40)
print(a_tuple[0])
print(a_tuple[1])
print(a_tuple[2])
print(a_tuple[3])

#other way
a, b , c ,d = a_tuple
print(a)
print(b)
print(c)
print(d)



