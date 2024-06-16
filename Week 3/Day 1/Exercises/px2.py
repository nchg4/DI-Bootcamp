# 🌟 Exercise 2 : Dogs
# Create a class called Dog.
class Dogs: 
# In this class, create an __init__ method that takes two parameters : name and height. 
# This function instantiates two attributes, which values are the parameters.
    def __init__(self, name: str, height: float) -> None:
         self.name = name
         self.height = height
# dog = Dogs("Max", 48)

# Create a method called bark that prints the following string “<dog_name> goes woof!”.
def bark(self) -> None:
        print(f"{self.name} goes woof!")

# Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
def jump(self) -> None:
        jump_height = self.height * 2
        print(f"{self.name} {jump_height} cm hight!")

# Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
# Print the details of his dog (ie. name and height) and call the methods bark and jump.
def main():
        davids_dog = Dogs(name="Rex", height=50)

# print(f"Dogs name is {davids_dog.name} and he is {davids_dog.height} cm tall")
# Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# Print the details of her dog (ie. name and height) and call the methods bark and jump.
# Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.
        present_dog(davids_dog)

        sarahs_dog = Dogs("teacup", 20)
    
        present_dog(sarahs_dog)

    if davids_dog.height > sarahs_dog.height
        print(f"{davids_dog.name} is bigger than {sarahs_dog.name}")