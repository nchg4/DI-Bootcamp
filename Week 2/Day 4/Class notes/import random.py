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

def take_quiz(questions):
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
    correct, incorrect, wrong = take_quiz(data)
    display_results(correct, incorrect, wrong)

if __name__ == "__main__":
    main()
