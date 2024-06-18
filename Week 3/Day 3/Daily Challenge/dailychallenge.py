class Circle:
    def __init__(self, radius, diameter):
        self.radius = radius
        self.diameter = diameter

    def __str__(self):
        return f"This circle\'s diameter is {self.diameter} and radius is {self.radius}."
        
    def __repr__(self):
        return f"{self.diameter}:int \n {self.radius}:int"
        

circle1 = Circle(5, 10)
print(circle1)
# print(repr(circle1))

