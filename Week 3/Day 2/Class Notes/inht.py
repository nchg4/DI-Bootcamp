# Inheritance

class Parent:
    # the aprent class doesnt inherennt anything
    def speak(self):
        return "parent speaking"
    
class Child(Parent):
    def speak(self):
        return "Child is speaking"
    #     pass

# obj1 = Child()
# print(obj1.speak())
# child class inherents everything from parent, so it will  print everything 
# that is in parent code

# class = Grandchild(Child):
#     pass

# obj1 = Grandchild()
# print(obj1.speak)

# super will go to the highest power