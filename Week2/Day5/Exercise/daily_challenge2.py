def longest_word(sentence):
    words = sentence.split()  # Split sentence into words
    
    longest_word = ""
    max_length = 0
    
    for word in words:
        word_length = len(word)
        
        if word_length > max_length:
            max_length = word_length
            longest_word = word
    
    return longest_word

print(longest_word("Pneumonoultramicroscopicsilicovolcanoconiosis is the longest word in the english language.")) 
print(longest_word("Thyroparathyroidectomized is a long word."))  
print(longest_word("Supercalifragilisticexpialidocious is a very long word."))  


