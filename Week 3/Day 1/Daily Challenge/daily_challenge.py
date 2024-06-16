# Daily Challenge

class Farm:
    def __init__(self, farm_name):
        self.farm_name = farm_name
        self.animals = {}

    def add_animal(self, animal_type, count=1):
        if animal_type in self.animals:
            self.animals[animal_type] += count
        else:
            self.animals[animal_type] = count

    def get_info(self):
        info = (f"{self.farm_name}'s farm\n\n")
        for animal, count in self.animals.items():
            info += (f"{animal} : {count}\n")
        info += "\nE-I-E-I-O!"
        return info

macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())

# Expanding the farm

# def get_animal_types():

animal_types = macdonald.get_animal_types()
print("Animal types on the farm:", animal_types)

print(macdonald.get_info())

