#Ask the user for a number btwn 1 and 100\
user_number = input("Please provide a number beween 1 and 100:")

user_number = int(user_number)

if 1 < user_number < 100:
    if (user_number % 15) == 0:
        print("FizzBuzz")
    elif (user_number % 3) == 0:
        print("Fizz")
    elif (user_number % 5) == 0:
        print("Buzz")
else:
    print("Number is not in the correct range.")

    