file_location = "the_stranger.txt"

class Text:
    file_location = "the_stranger.txt"
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        self.word = word
        words = self.text()

        if word in words:
            return words.count(word)
        else:
            return (f"'{word}' not found")
        
    def most_common_word(self, text):
        self.text = text

        words = self.text()
        if not words:
            return ("Today, is a happy day")
        
        word_count = {}
        for word in words:
            if word in word_count:
                word_count[word] += 1
            else:
                word_count[word] = 1

    def unique_words(self):
        words = self.text()
        return list(words)
    
    def from_file(cls, file_location):
        with open(file_location, 'r', encoding='utf-8') as file:
            text = file.read()
        return cls(text)

# stranger_text = Text.from_file('the_stranger.txt')

# with open(file_location) as file:
#     content = file.read()


# print("Frequency of 'the':", stranger_text.word_frequency('the'))
# print("Most common word:", stranger_text.most_common_word())
# print("Unique words:", stranger_text.unique_words())

