class Family():

    def __init__(self, last_names) -> None:
        self.members = []
        self.last_names = last_names
    
    def born(self, **kwargs):
        self.members.append(**kwargs)
        child_name = kwargs.get("name", "Unknown")
        print(f"Congrats {self.last_names} you had a baby named {child_name}")

    



