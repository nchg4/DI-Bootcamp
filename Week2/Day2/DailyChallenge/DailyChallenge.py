def print_multiples(number, length):
    multiples = []
    for i in range(1, length + 1):
        multiples.append(number * i)
    return multiples

# Ask the user for input
number = int(input("Enter the number: "))
length = int(input("Enter the length: "))

# Print the list of multiples
print("List of multiples of", number, "with length", length, ":")
print(print_multiples(number, length))


def remove_duplicates(input_str):
    result = ""
    for i in range(len(input_str)):
        if i == len(input_str) - 1 or input_str[i] != input_str[i + 1]:
            result += input_str[i]
    return result
user_input=input("Enter a word with duplicated letters: ")
result_str=remove_duplicates(user_input)
print("String with consecutive duplicate letters removed:", result_str)
user_input=input("Enter a string: ")
result_str=remove_duplicates(user_input)
print("String with consecutive duplicate letters removed:", result_str)
user_input=input("Enter a string: ")
result_str=remove_duplicates(user_input)
print("String with consecutive duplicate letters removed:", result_str)
