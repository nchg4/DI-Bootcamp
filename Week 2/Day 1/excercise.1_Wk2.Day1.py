#Hello world x 4
for _ in range (4):
    print("Hello World")

#Do the equation 
print(99**3)*8

#follow the steps:
# 5 < 3
# 3 == 3
# 3 == "3"
# "3" > 3
# "Hello" == "hello"
print (5 < 3)
print (3 == 3)
print (3 == "3")
print("3" > 3)
print ("Hello" == 'hello')

#My Computer 
computer = "MacBook Air"
info = "I have a {}" .format(computer)
print(info)

#About me
name = "Noam"
age = 22
shoe_size = 43
value = "I grew up in Miami. I am an Israeli, French and US citizen"
info = "Hello my name is %s I am %d years old, %s. I am size %d shoes" % (name, age, value, shoe_size)
print(info)

# Create two variables, a and b.
# Each variable value should be a number.
# If a is bigger then b, have your code print Hello World.
a = 3000
b = 10000
if a > b:
    print("Approved")
if b > a:
    print("False")
if a <= b:
    print("Error")

 # Asking user for a number
number = int(input("Enter any number:"))
# Check the number if its odd or even
if number % 2 == 0:
    print("number is even.")
else:
    print("number is odd.")


# Are you tall enough to ride the ride?
    # Ask the user for their height in cm
height_cm = float(input("What is your height in centimeters?: "))
# Check if the user is tall enough to ride
if height_cm > 145:
    print("You are tall enough to ride!")
else:
    print("Sorry, you need to grow some more to ride.")


# Ask the user what their name is
user_name =(input("Your Name:"))

my_name = "Noam"

# Check if the user's name is the same as mine
if user_name == my_name:
    print("Wow, we have the same name!?")
else:
    print("Welcome!")

    