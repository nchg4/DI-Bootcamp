# Exercise 4 : Afternoon At The Zoo

#Create a class called Zoo.
class Zoo:

#In this class create a method __init__ that takes one parameter: zoo_name.
    def __init__(self, zoo_name) -> None:

#It instantiates two attributes: animals (an empty list) and name (name of the zoo).
        self.name = zoo_name
        self.animals = []

#Create a method called add_animal that takes one parameter new_animal.
    def add_animal(self, new_animal) -> None:

#This method adds the new_animal to the animals list as long as it isn’t already in the list. 
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} added to the zoo.")
        else:
            print(f"{new_animal} is already in the zoo.")

# Create a method called get_animals that prints all the animals of the zoo.
    def get_animals():
        print("Lion","Bear","Ape","Tiger")

#Create a method called sell_animal that takes one parameter animal_sold. 
    def sell_animal(animal_sold):
        print(f"{}")

#This method removes the animal from the list and of course the animal needs to exist in the list.
    
    
#Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
    def sort_animals():
        pass

#Create a method called get_groups that prints the animal/animals inside each group.
    def get_groups():
        pass


#8