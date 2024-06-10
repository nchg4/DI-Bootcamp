#Hello World x 4; Exercise 1:
for _ in range (4):
    print("Hello World")

#Math; Exercise 2:
print(99**3 * 8)

# #Exercise 3
# (5 < 3) #False
# (3 == 3) #True
# (3 == "3") #False
# # ("3" > 3)  #Error
# ("Hello" == 'hello') #False

#My computer; Exercise 4:
computer = "MacBook Air"
info = "I have a {}" .format(computer)
print(info)

#My info.; Exercise 5:
name = "Noam"
age = 22
shoe_size = 43
value = "I grew up in Miami. I am an Israeli, French and US citizen"
info = "Hello my name is %s I am %d years old, %s. I am size %d shoes" % (name, age, value, shoe_size)
print(info)

#A,B; Exercise 6:
a = 3000
b = 10000
if a > b:
    print("Approved")
if b > a:
    print("False")
if a <= b:
    print("Error")

 #Even/Odd; Exercise 7:
number = int(input("Enter any number:"))
if number % 2 == 0:
    print("number is even.")
else:
    print("number is odd.")

#What is your name; Exercise 8:
user_name =(input("Your Name:"))
my_name = "Noam"
if user_name == my_name:
    print("We have the same name!!")
else:
    print("Not my name but...Welcome!")

#Height; Exercise 9:
height_cm = float(input("What is your height in centimeters?: "))
if height_cm > 145:
    print("You are tall enough to ride!")
else:
    print("Sorry, you need to grow some more to ride.")