#My Favorite Numbers; Exercise 1:
a_set = {3, 7, 9, 17, 27, 33}
a_set.add(2)
a_set.add(19)
print(a_set)
a_set.remove(33)
print(a_set)

b_set = {2, 9, 0, 7, 22, 17, 33}
print(a_set.difference(b_set)) 
print(b_set.difference(a_set)) 
print(a_set.intersection(b_set)) 
print(a_set.union(b_set)) 

#Tuple; Exercise 2:
# Tuples are not Mutable there fore must be converted to a list 
b_tuple = (200, 782, 1212, 1818)
print(b_tuple)
b_tuple = list(b_tuple)
b_tuple.append(5722)
print(b_tuple)

#List; Exercise 3:
basket = ["Banana", "Apple", "Oranges", "Blueberries"]
print(basket)
basket.remove ('Banana')
basket.remove ('Blueberries')
basket.append ("kiwi")
basket.insert (0, "Apple")
print(basket) 
apple_count = basket.count("Apple")
print(apple_count)

#Float; Exercise 4:
# A float is a decilam number and an integer is a whole number 
numbers_a = [1,1.5,2,2.5,3,3.5,4,4.5,5]
print(numbers_a)

#For loop; Exercise 5:
for i in range(1, 21):
    print(i)
    print(float(i))

#While loop; Exercise 6:
my_name = "Noam"
user_name = ""
while user_name != my_name:
    user_name = input("Please enter your name: ")
    if user_name != my_name:
        print("That's not my name. Please try again.")

print("Welcome, {}!".format(my_name))

#Favorite fruits; Exercise 7:
favorite_fruit = input

#Who ordered a pizza?; Exercise 8:
toppings = []
base_price = 10
topping_price = 2.5
while True:
    topping = input("Please enter a topping to add to your pizza (enter 'quit' to finish): ")
    if topping.lower() == 'quit':
        break
    toppings.append(topping)
    print("Adding {} to your pizza.".format(topping))
total_price = base_price + len(toppings) * topping_price
print("\nToppings on your pizza:")
for topping in toppings:
    print("- " + topping)
print("\nTotal price of your pizza: ${:.2f}".format(total_price))

#Cinemax; Exercise 9:
ages = (3, 12)

total = 0
for age in ages:
    if age > 18:
        total += 15
    elif 8<age<18:
        total += 10

print(total) 