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
user=input("Your favorite fruit(s) (seperate fruits with only a single space):")
values = user.split()
print (values)
fav_fruit = input("Enter your favorite fruit:")
if fav_fruit in values:
    print("You chose one of your favorite fruits! Enjoy!")
else: 
    print("You chose a new fruit. I hope you enjoy!")

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
def calculate_ticket_price(age):
    if age < 3:
        return 0
    elif 3 <= age <= 12:
        return 10
    else:
        return 15
num_people = int(input("How many people are in your family? "))
total_cost = 0
for i in range(num_people):
    age = int(input("Enter the age of person {}: ".format(i+1)))
    ticket_price = calculate_ticket_price(age)
    total_cost += ticket_price
print("Total cost of all the family's tickets: ${}".format(total_cost))
teenagers = ["Eitan", "Noam", "Eden", "Ariela"]
nonpermitted_teenagers = []
for name in teenagers:
    age = int(input("Enter the age of {}: ".format(name)))
    if 16 <= age <= 21:
        nonpermitted_teenagers.append(name)
print("No entry:", nonpermitted_teenagers)

#Sandwich orders; Exercise 10:
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich",
"Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
    print(sandwich_orders)
finished_sandwiches = []
sandwich = sandwich_orders.pop
finished_sandwiches.append("Your Tun sandwich is ready")
finished_sandwiches.append("Your Avocado sandwich is ready")
finished_sandwiches.append("Your Egg sandwich is ready")
finished_sandwiches.append("Your Chicken sandwich is ready")
print(finished_sandwiches)