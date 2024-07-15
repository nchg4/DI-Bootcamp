# 🌟 Exercise 3 : Who’s The Song Producer?

# Defining the class 
class Song:

# Its __init__() method should have two arguments: self and lyrics (a list).
    def __init__(self, lyrics):
        self.lyrics = lyrics
    
# Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)


if __name__ == "__main__":
 # Creating an object of the Song class
    song1 = Song([
        "Theres a lady who's sure",
        "all that glitters is gold",
        "and shes buying a stairway to heaven"
    ])

    # Calling the sing_me_a_song method on the object
    song1.sing_me_a_song()
