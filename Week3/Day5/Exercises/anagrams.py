from anagram_checker import AnagramChecker

def display_menu():
    print("Anagram Checker")
    print("1. Enter a word")
    print("2. Exit")
    choice = input("Enter your choice: ")
    return choice

def get_input_word():
    while True:
        word = input("Enter a word: ").strip()
        if ' ' in word:
            print("Error: Only one word allowed.")
        elif not word.isalpha():
            print("Error: Only alphabetic characters please.")
        else:
            return word

def main():
    word_list_file = 'word_list_file.txt'  
    anagram_checker = AnagramChecker(word_list_file)

    while True:
        choice = display_menu()
        
        if choice == '1':
            word = get_input_word()
            
            if anagram_checker.is_valid_word(word):
                anagrams = anagram_checker.get_anagrams(word)
                if anagrams:
                    print(f"Anagrams of '{word}':")
                    for anagram in anagrams:
                        print(anagram)
                else:
                    print(f"No anagrams found for '{word}'.")
            else:
                print(f"'{word}' is not valid.")
        
        elif choice == '2':
            print("Exiting")
        
        else:
            print("Invalid choice. Please enter 1 or 2.")

if __name__ == "__main__":
    main()