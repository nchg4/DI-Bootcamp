# import random

class Options1:
    def get_user_choice_miami(self):
        while True:
            user_choice = input("Enter your choice (Medical Struggles/Youth Group/Special Needs): ").strip().lower()
            if user_choice in ['Medical Struggles', 'Youth', 'Special Needs']:
                return user_choice
            else:
                print("That is not a valid choice!")
    def get_contact_info(self):
        choices = ['Medical Struggles', 'Youth Group', 'Special Needs']
        if choices == 'Medical Struggles':
            return ' '
        elif choices == 'Youth Group':
            return ' '
        elif choices == 'Special Needs':
            return ' '
        else:
            print("Invalid choice!")
        


class Options2:
    def get_user_choice_Orlando(self):
        while True:
            user_choice = input("Enter your choice (Community Center/Special Needs/Employment Help/Youth Group): ").strip().lower()
            if user_choice in ['Community Center', 'Special Needs', 'Employment Help', 'Youth Group']:
                return user_choice
            else:
                print("Invalid choice!")
    def get_contact_info(self):
        choices = ['Community Center', 'Special Needs', 'Employment Help', 'Youth Group']
        if choices == 'Community Center':
            return ' '
        elif choices == 'Special Needs':
            return ' '
        elif choices == 'Employment Help':
            return ' '
        elif choices == 'Youth Group':
            return ' '
        else:
            print("Invalid choice!")