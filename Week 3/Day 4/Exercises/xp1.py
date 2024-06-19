file_location = "file.txt"
import random
from typing import List
# import random
# from typing import List

# 3
# with open(file_location) as file:
#         words = []
#         get_words = file.read()
#         print(get_words)

from typing import List

def get_words_from_file(file_path: str) -> List[str]:
    words = []
    try:
        with open(file_path, 'r') as file:
            for line in file:
                line_words = line.split()
                words.extend(line_words)
    except IOError as e:
        print(f"Error reading the file: {e}")
    
    return words


def get_random_sentence(length: int, words: List[str]) -> str:
    random_words = random.sample(words, length)
    random_sentence = ' '.join(random_words)
    return random_sentence.lower()

def main():
    print("Welcome to the Random Sentence Generator!")
    print("This program generates a random sentence based on your input length.")
    print("The generated sentences do not have to make sense.\n")
    
    # try:
    length = int(input("Enter the desired length of the sentence (between 2 and 20): "))
    if length < 2 or length > 20:
            # raise ValueError("Length must be between 2 and 20.")
        
        # Load words from file
            file_location = "file.txt"  # Update with your actual file path
            words_list = get_words_from_file(file_location)
        
        # Generate and print random sentence
    random_sentence = get_random_sentence(length, words_list)
    print(f"\nRandom Sentence: {random_sentence}")
    
    # except ValueError as ve:
    #     print(f"Error: {ve}. Please enter a valid integer between 2 and 20.")
    # except Exception as e:
    #     print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()



