# Inheritance
# Parent class - Child class - Grandparent class 


    
class Animal:
    def __init__(self, name: str, family: str, legs: int) -> None:
        self.name = name
        self.family = family
        self.legs = legs

    def make_sound(self):
        return f"{self.name} is making a sound"
    
class Alien:
    def __init__(self, name, planet):
        self.name = name
        self.planet = planet

    def fly(self):
        return f"{self.name} is flying"

    def sleep(self):
        return f"{self.name} is sleeping"
    

class AlienDog(Dog, Alien):
    def __init__(self, name, family, legs, trained: bool, planet):
        Dog.__init__(name, family, legs, trained)
        Alien.__init__(name, planet)

alienDog1 = AlienDog("fluffly", "Canadea", 4, True, "Saturn")

print(alienDog1.__dict__)





















# dif. btwn using super and usuing only init
# its the same 
# super is more modern 


# Inheretence from more than one parent..
