from options import Options1
from options import Options2

class volunteering():
    def get_user_menu_choice():
        while True:
            print("Welcome to Chessed Work")
            print("Main Menu:")
            print("Please eneter which city you are located in:")
            print("1. Miami")
            print("2. Orlando")
            choice = input("Enter your choice (1/2): ").strip()

            if choice == '1':
                return "Where would you like you volunteer?"
            elif choice == '2':
                return "Where would you like you volunteer?"
            
            else:
                print("Invalid choice! Please enter which city you are located in, 1 or 2.")

