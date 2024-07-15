import random

class Game:
    def get_user_item(self):
        while True:
            user_choice = input("Enter your choice (rock/paper/scissors): ").strip().lower()
            if user_choice in ['rock', 'paper', 'scissors']:
                return user_choice
            else:
                print("Invalid choice! Please enter either rock, paper, or scissors.")

    def get_computer_item(self):
        choices = ['rock', 'paper', 'scissors']
        return random.choice(choices)

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return 'draw'
        elif (user_item == 'rock' and computer_item == 'scissors') or \
             (user_item == 'paper' and computer_item == 'rock') or \
             (user_item == 'scissors' and computer_item == 'paper'):
            return 'win'
        else:
            return 'loss'

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()

        result = self.get_game_result(user_item, computer_item)

        user_item_capitalized = user_item.capitalize()
        computer_item_capitalized = computer_item.capitalize()

        print(f"You selected {user_item_capitalized}. The computer selected {computer_item_capitalized}.")

        if result == 'win':
            print("You win!")
        elif result == 'loss':
            print("You lose!")
        else:
            print("It's a draw!")

        return result











