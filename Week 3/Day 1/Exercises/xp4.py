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
    def get_animals(self):
        print(f"Animals in {self.name}:")
        for animal in self.animals:
            print(animal)

#Create a method called sell_animal that takes one parameter animal_sold. 
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} has been sold.")
        else:
            print(f"{animal_sold} is not in the zoo.")

#This method removes the animal from the list and of course the animal needs to exist in the list.
    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        grouped_animals = {}
        for animal in sorted_animals:
            first_letter = animal[0]
            if first_letter not in grouped_animals:
                grouped_animals[first_letter] = [animal]
            else:
                grouped_animals[first_letter].append(animal)
        return grouped_animals
    
#Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
    def get_groups(self):
        grouped_animals = self.sort_animals()
        print("Animals grouped by first letter:")
        for key in sorted(grouped_animals.keys()):
            print(f"{key}: {grouped_animals[key]}")

#Create a method called get_groups that prints the animal/animals inside each group.
   

#8