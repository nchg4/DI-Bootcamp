Miami_Organizations = (
    ('Chai Lifeline', '269 Stirling Road', 'Miami', '1-305-956-9990', 'Economic/Medical Struggles'),
    ('Friendship Circle', '9700 S Dixie Hwy Suite 100', 'Miami', '1-305-234-5654', 'Special Needs'),
    ('Cteen', '8700 SW 112th Street', 'Miami', '1-305-234-5654', 'Youth Group'),
    ('Bnei Akiva', '3291 Stirling Road', 'Miami', '1-305-400-1864', 'Youth Group'),
    ('NCSY', '7200 W. Camino Rd', 'Miami', '1-786-543-6851', 'Youth Group')
)

Orlando_Organizations = (
    ('Jewish Community Center', '851 N Maitand Avenue', 'Orlando', '1-407-956-1230', 'Community Center'),
    ('Friendship Circle', '9700 S Dixie Hwy Suite 100', 'Orlando', '1-407-234-5541', 'Special Needs'),
    ('Cteen', '852 S. Maitland', 'Orlando', '1-305-234-5654', 'Youth Group'),
    ('OPTIONS!', '2100 Lee Road, Suite C', 'Orlando', '1-305-400-1864', 'Employment and Empowerment Help'),
    ('Friends of Israel Scouts- Tsofim', '7200 W. Camino Rd', 'Orlando', '1-786-543-6851', 'Youth Group')
)

class Volunteering:
    @staticmethod
    def get_user_menu_choice():
        while True:
            print("Welcome to Chessed Finder!")
            print("Main Menu:")
            print("Please enter which city you are located in:")
            print("1. Miami")
            print("2. Orlando")
            choice = input("Enter your choice (1/2): ").strip()

            if choice == '1':
                return Miami_Organizations
            elif choice == '2':
                return Orlando_Organizations
            else:
                print("Invalid choice! Please enter 1 or 2.")

    @staticmethod
    def collect_user_info():
        print("Contact Information:")
        first_name = input("First Name: ")
        last_name = input("Last Name: ")
        age = input("Age: ")
        email = input("E-mail: ")  # Consider adding validation for email format
        phone = input("Phone Number: ")
        print("Thank you for choosing Chessed Finder! Someone will contact you shortly about your request.")

    @staticmethod
    def run():
        while True:
            user_organizations = Volunteering.get_user_menu_choice()

            if isinstance(user_organizations, tuple):
                focus_group_counts = {}
                for organization in user_organizations:
                    print(f"Organization: {organization[0]}")
                    print(f"Address: {organization[1]}, {organization[2]}")
                    print(f"Phone: {organization[3]}")
                    print(f"Focus: {organization[4]}")
                    print()

                    # Count the number of organizations for each focus group
                    if organization[4] in focus_group_counts:
                        focus_group_counts[organization[4]] += 1
                    else:
                        focus_group_counts[organization[4]] = 1

                user_choice = input("What type of volunteer opportunity are you interested in? ").strip().title()
                related_organizations = [org for org in user_organizations if org[4] == user_choice]

                if related_organizations:
                    print(f"There are {len(related_organizations)} volunteer opportunities available.")
                    user_response = input("Would you like to get their contact info? (yes/no): ").strip().lower()

                    if user_response == 'yes':
                        Volunteering.collect_user_info()
                        break  # End the program
                    elif user_response == 'no':
                        choice = input("Leave your email to receive updates from Chessed Finder (or type 'No' to skip): ").strip().lower()
                        if choice == 'no':
                            print("Thank you for choosing Chessed Finder!")
                        else:
                            print("Thank you for choosing Chessed Finder!")
                            break  
                    else:
                        print("Invalid response. Please enter 'yes' or 'no'.")
                else:
                    print("Sorry, we don't have any volunteer opportunities matching your choice.")
            else:
                print("Invalid choice! Please enter 1 or 2.")

# Run the program
Volunteering.run()
