import math
import turtle

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
            self.diameter = 2 * radius
        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            raise ValueError("Please specify either radius or diameter")
        
    def __str__(self):
        return f"Circle with radius: {self.radius} and diameter: {self.diameter}"
    def __repr__(self):
        return f"Circle(radius={self.radius}, diameter={self.diameter})"
    def area(self):
        return math.pi * (self.radius ** 2)  
    def __add__(self, other):
        return Circle(radius=self.radius + other.radius)  
    def __lt__(self, other):
        return self.radius < other.radius
    def __eq__(self, other):
        return self.radius == other.radius
    def draw(self):
        turtle.circle(self.radius)

circle1 = Circle(radius=5)
circle2 = Circle(diameter=20)

print(circle1)  
print(circle2)  
print("Area of circle1:", circle1.area()) 


circle3 = circle1 + circle2

print(circle3) 
print("Is circle1 smaller than circle2?", circle1 < circle2)  
print("Are circle1 and circle2 equal?", circle1 == circle2)  


circles = [circle1, circle2, circle3]
sorted_circles = sorted(circles, key=lambda x: x.radius)

print("Sorted circles:", sorted_circles)  

turtle.speed(1)
for circle in sorted_circles:
    circle.draw()
turtle.done()
