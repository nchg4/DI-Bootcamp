# 🌟 Exercise 2 : Dogs
class Dog():
    def __init__(self, name, age, weight) -> None:
        self.name = name
        self.age = age
        self.weight = weight
    
    def bark(self):
        return f"{self.name} is barking"
    
    def run_speed(self):
        return  self.weight / self.age * 10
    
    def fight(self, other_Dog):
        self.speed = self.run_speed() * other_Dog.weight
        other_speed = other_Dog.run_speed() * other_Dog.weight


        if self.speed > other_speed:
            return f"{self.name} you won!"
        elif other_speed > self.speed:
            return f"{other_Dog.name} you won!"
        else:
            return "It's a tie!"


dog1 = Dog("Dog1", 6, 12)
dog2 = Dog("Dog2", 4, 9)
dog3 = Dog("Dog3", 9, 26)


print(dog1.bark())  # make dogs bark
print(dog2.bark()) 
print(dog3.bark()) 

print(dog2.run_speed())  # see how fast the dog  will run usuing the above method
print(dog1.run_speed())
print(dog3.run_speed())

print(dog3.fight(dog1))  # make the dogs fight
print(dog1.fight(dog2))
print(dog2.fight(dog3))

