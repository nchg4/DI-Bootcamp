# 🌟 Exercise 3 : Dogs Domesticated

from xp2 import Dog


import random  # For generating random tricks

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False  # New attribute for PetDog
    
    def train(self):
        print(super().bark())  # Utilize bark method from Dog
        self.trained = True
    

    def play(self, * dog_names):
        dog_names_str = ", ".join(dog.name for dog in dog_names)
        print(f"{dog_names_str} all play together")


    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} is not trained yet!")
