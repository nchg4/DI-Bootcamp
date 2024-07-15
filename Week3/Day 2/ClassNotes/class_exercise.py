# class Circle:
#     color = "red"

# class NewCircle(Circle):
#     color = "blue"

# nc = NewCircle
# print(nc.color)

class Door:
    def __init__(self, is_opened=False) -> None:
        self.is_opened = is_opened

    def opened_door(self):
        self.is_opened = True
        print("the door is now opened")

    def close_door(self):
        self.is_opened = False
        print("the door is now closed")  

class BlockedDoor(Door):
    # no innit, no new info is being added 

    def opened_door(self):
        raise Exception("a bloced door cant be opened") 

    def opened_door(self):
        raise Exception("a bloced door cant be opened") 

door1 = Door()
door1.close_door
print(door1.is_opened)


door2 = BlockedDoor()
door2.close_door()