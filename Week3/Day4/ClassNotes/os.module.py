import os

dir_path = os.path.dirname(os.path.realpath(__file__)) #finds the current directory path in any os
# dir_path = '/Users/noamglick/Desktop/DI-Bootcamp/Week 3/Day 4/Class Notes\\the_stranger.txt'


text_name = '\\the_stranger.txt'

with open(dir_path + text_name , mode = 'r') as file:
    txt = file.read()

# print(txt)

##### DECORATOR: @CLASSMETHOD
class Text:
    def __init__(self, txt_str:str)->object:
        self.txt_str = txt_str

    @classmethod  #classmethod
    def from_file(cls, file_name):
        with open(file_name, mode = 'r') as file:
            text_file = file.read()
            return cls(text_file)
            # return Text(text_file) : we are returning an object of Text
        
    def to_upper(self): #regular method justo to exemplify the difference
        return self.txt_str.upper()

    


text1 = Text('Hello world')
print(text1.txt_str)
print(text1.to_upper())

text2 = Text.from_file('the_stranger.txt')
print(text2.txt_str[:50])
