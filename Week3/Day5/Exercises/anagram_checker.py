class AnagramChecker:
    def __init__(self, word_list_file):
        self.words = set()
        with open(word_list_file, 'r') as word_list_file:
            for line in word_list_file:
                self.words.add(line.strip(" ").lower())

    def is_valid_word(self, word):
        return word in self.words

    def get_anagrams(self, word):
        word = word
        anagrams = []
        for word in self.words:
            if self.is_anagram(word, word):
                anagrams.append(word)
        return anagrams

    def is_anagram(self, word1, word2):
        if len(word1) != len(word2):
            return False
        return sorted(word1) == sorted(word2)