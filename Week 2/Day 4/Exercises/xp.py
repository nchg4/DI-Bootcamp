# 🌟 Exercise 1 : What Are You Learning ?
def display_message():
    print('In this course I am learning HTML, CSS, JS, Python, and more!')

display_message()

# 🌟 Exercise 2: What’s Your Favorite Book ?
def favorite_book(title):
    print(f"One of my favorite books is {title}")

favorite_book("Night, Elie Wisel")

# 🌟 Exercise 3 : Some Geography
def describe_city(city, country = "Unknown"):
    print(f"{city} is in {country}")

describe_city("Jerusalem", "Israel")
describe_city("Paris", "France")
describe_city("Rome", "Italy")
describe_city("Miami", "Fl, USA")
describe_city("Tel Aviv", "Israel")

# 🌟 Exercise 4 : Random
import random
def compare_numbers(guess):
 
    if guess < 0 or guess > 100:
        print("Please enter a number between 1 and 1000:")
        return
    random_number = random.randint(1, 100)
    print("Systems Number:", random_number)

    if guess == random_number:
        print("You Won!")
        print("You guessed:", guess)
    else:
        print(":/ try again...")
        print("You guessed:", guess)

guess = int(input("Enter a number between 1 and 100: "))
compare_numbers(guess)

# while True:
#     guess = int(input("Enter a number between 1 and 100: "))
#     if compare_numbers(guess):
#         break


# 🌟 Exercise 5 : Let’s Create Some Personalized Shirts !
def make_shirt(size = "large", text = "I love Python"):
    print(f'The T-Shirt is a {size} and it says {text} on it')
    
make_shirt()
make_shirt(size = 'medium')
make_shirt(size = 'small', text = 'Hello World!')

# 🌟 Exercise 6 : Magicians … 
magician_names =['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(magicians):
     for magician in magicians:
        print(magician)

def make_great(magicians):
    for i in range(len(magicians)):
        magicians[i] += ', the great'

make_great(magician_names)
show_magicians(magician_names)

# 🌟 Exercise 7 : Temperature Advice
import random

def get_random_temp ():
    return random.randint(-10, 40)

def main():
    temperature = get_random_temp()
    print(f'The temperature outside right now is {temperature} degrees Celsius')

    if temperature < 0:
        print('Brrr, thats freezing! Wear some extra layers today')
    elif temperature  >= 0 and temperature <= 16:
        print('Still cold, wear extra layers!')
    elif temperature >= 16 and temperature <= 24:
        print('Getting warmer but still chilly. Take a sweater with you today')
    elif temperature >= 24 and temperature <= 32:
        print('Its warm now. Enjoy!')
    elif temperature >= 32 and temperature <= 40:
        print('Bring some water with you, its pretty hot today')

main()

import random

def get_random_temp(seasons):
    if seasons == 'Winter':
        return random.randint(-10, 16)
    elif seasons == 'Spring':
        return random.randint(16, 24)
    elif seasons == 'Fall':
        return random.randint(24, 32)
    elif seasons == 'Summer':
        return random.randint(32, 40)
    # else:
    #     print('Invalid')
    #     return None
        
def main():
    seasons = input('Enter a season:')

    temperature = get_random_temp(seasons)
    if temperature is not any:
        print(f'The temp. in {seasons} is {temperature}')
        if temperature < 0:
            print('Brrr, thats freezing! Wear some extra layers today')
        elif temperature <= 16:
            print('Getting warmer but still chilly. Take a sweater with you today')
        elif temperature <= 23:
            print('Its warm now. Enjoy!')
        elif temperature <= 32:
            print('Bring some water with you, its pretty hot today')

main()

# 🌟 Exercise 8 : Star Wars Quiz
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]
    
def quiz_starwars(questions):
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []

    for question_data in questions:
        question = question_data["question"]
        correct_answer = question_data["answer"]
        user_answer = input(question + " ")

        if user_answer.lower() == correct_answer.lower():
            print("Correct!")
            correct_answers += 1
        else:
            print("Incorrect!")
            incorrect_answers += 1
            wrong_answers.append((question, correct_answer, user_answer))

    return correct_answers, incorrect_answers, wrong_answers

def display_results(correct_answers, incorrect_answers, wrong_answers):
    print("\nQuiz Results:")
    print("Correct Answers:", correct_answers)
    print("Incorrect Answers:", incorrect_answers)
    
    if incorrect_answers > 0:
        print("\nIncorrect Answers Details:")
        for question, correct_answer, user_answer in wrong_answers:
            print(f"Question: {question}")
            print(f"Correct Answer: {correct_answer}")
            print(f"Your Answer: {user_answer}\n")

# Main function
def main():
    correct, incorrect, wrong = quiz_starwars(data)
    display_results(correct, incorrect, wrong)

if __name__ == "__main__":
    main()











