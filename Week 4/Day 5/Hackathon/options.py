# import random

class Options1:
    def get_user_choice_miami(self):
        while True:
            user_choice = input("Enter your choice (hospital/youth/etc): ").strip().lower()
            if user_choice in ['hospital', 'youth', 'etc']:
                return user_choice
            else:
                print("Invalid choice!")
    def get_contact_info(self):
        choices = ['hospital', 'youth', 'etc']
        if choices == 'hospital':
            return ' '
        elif choices == 'youth':
            return ' '
        elif choices == 'etc':
            return ' '
        else:
            print("Invalid choice!")
        
        
class Options2:
    def get_user_choice_Orlando(self):
        while True:
            user_choice = input("Enter your choice (Youth/shelter/etc): ").strip().lower()
            if user_choice in ['Youth', 'shelter', 'etc']:
                return user_choice
            else:
                print("Invalid choice!")
    def get_contact_info(self):
        choices = ['Youth', 'shelter', 'etc']
        if choices == 'Youth':
            return ' '
        elif choices == 'shelter':
            return ' '
        elif choices == 'etc':
            return ' '
        else:
            print("Invalid choice!")
