# Exercise 4 : Family
class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members
    
    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations! {kwargs['name']} was born into the {self.last_name} family.")
    
    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False
    
    def family_presentation(self):
        print(f"Family {self.last_name}:")
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Child: {member['is_child']}")

members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]
my_family = Family("Smith", members)

my_family.family_presentation()
print("Is Michael over 18?", my_family.is_18("Michael"))
print("Is Sarah over 18?", my_family.is_18("Sarah"))
print()

my_family.born(name='Baby Jack', age=0, gender='Male', is_child=True)

my_family.family_presentation()


# Exercise 5 : TheIncredibles Family
class TheIncredibles(Family):
    def __init__(self, last_name, members):
        super().__init__(last_name, members)
    
    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{member['name']} can use their power: {member['power']}.")
                else:
                    raise Exception(f"{member['name']} is not over 18 years old and cannot use their power.")
    
    def incredible_presentation(self):
        print(f"*Here is our powerful family {self.last_name}*")
        super().family_presentation()

incredibles_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
]
incredibles_family = TheIncredibles("Incredibles", incredibles_members)

incredibles_family.incredible_presentation()
print()

incredibles_family.born(name='Baby Jack', age=0, gender='Male', is_child=True, power='Unknown Power', incredible_name='Baby Jack')

incredibles_family.incredible_presentation()

    



