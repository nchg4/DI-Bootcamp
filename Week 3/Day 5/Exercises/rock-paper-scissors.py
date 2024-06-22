from game import Game

def get_user_menu_choice():
    while True:
        print("Main Menu:")
        print("1. Play a new game")
        print("2. Show scores")
        print("3. Quit")
        choice = input("Enter your choice (1/2/3): ").strip()

        if choice == '1':
            return 'play'
        elif choice == '2':
            return 'scores'
        elif choice == '3':
            return 'quit'
        else:
            print("Invalid choice! Please enter 1, 2, or 3.")

def print_results(results):
    print("\nGame Results:")
    print(f"Win: {results['win']}")
    print(f"Loss: {results['loss']}")
    print(f"Draw: {results['draw']}")
    print("\nThank you for playing!")

def main():
    results = {'win': 0, 'loss': 0, 'draw': 0}

    while True:
        choice = get_user_menu_choice()

        if choice == 'play':
            game = Game()
            result = game.play()

            if result == 'win':
                results['win'] += 1
            elif result == 'loss':
                results['loss'] += 1
            else:
                results['draw'] += 1

        elif choice == 'scores':
            print_results(results)

        elif choice == 'quit':
            print_results(results)
            break

if __name__ == "__main__":
    main()
