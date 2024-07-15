# @classmethod - a method which isnt bound to an object but is bound to the class itse
# @
class Person:
    number_of_people: int = 0 # class of attributes

    def __init__(self, name: str, age: int) -> None:
            self.name = name
            self.age = age


    @classmethod
    def greet_people(cls) -> None:
         print(f"hello {cls.number_of_people}")

    def main():
        print(Person.number_of_people)
        person1 = Person("Noam", 22)


        # print(Person.number_of_people)

    if __name__ == "__main__":
        main() 


## if you want to create a new object you cannot use another init;
# so you use a class method
## 
    #ex:
        @classmethod
        def init_from_name(cls, name: str) -> None:
             new_object = Person(name, None)
             return new_object