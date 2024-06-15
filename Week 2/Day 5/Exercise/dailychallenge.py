# 1
def sort_words(input_string):
    words = input_string.split(',')

    sorted_words = sorted(words)

    result = ','.join(sorted_words)

    return result

if __name__ == "__main__":
    input_string = input("Enter a comma separated sequence of words: ")
    sorted_string = sort_words(input_string)
    print("Sorted words:", sorted_string)


