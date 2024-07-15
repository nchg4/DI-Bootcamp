# 🌟 Exercise 1: Cats
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
        

# Instantiate three Cat objects using the code provided above.
cat1 = Cat("cat1", 9)
cat2 = Cat("cat2", 17)
cat3 = Cat ("cat3", 12)

# Outside of the class, create a function that finds the oldest cat and returns the cat.
# Create a list
cats = [cat1, cat2, cat3]
oldest_cat = cats[0]

for cat in cats:
    if cat.age > oldest_cat.age:
        oldest_cat = cat

# Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.
print(f"The old cat is {oldest_cat.name} and is {oldest_cat.age} years old")
