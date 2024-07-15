a_string = "A string"

##Single indexing
print(a_string[0])

print(len (a_string))
#how many letters^

length_a_string = len (a_string)

print(a_string [length_a_string -1])

print(a_string [-1]) #last element 

letter_s = a_string[2]

print(a_string[2])

print(letter_s)

#Slicing 
b_string = "Holla There"

#[start:end(excluded)]
#0:5(value inside index 5 wont be included)

word_holla = b_string[0:5]
print(word_holla)

#also can:
word_holla = b_string[:5]
print(word_holla)

word_there = b_string [-5:]
print(word_there)



#example 1 usuing an alter variable out_out string
user_input = input("Provide a 10 character long input:")

if (len(user_input) < 10):
    print("Stream not long enough")
elif (len(user_input) > 10):
        print("Stream too long enough")
else:
      print("perfect string")
      first_character = user_input[0]
      last_character = user_input[-1]

# print("First char: {first_character}")
# print("Last char: {last_character}")

    # range (0, 9)[from 0-9] -> 0, 1, 2, 3...
                            
output_string  = ""
for i in range(0, len (user_input)):
         output_string  += user_input[i] 


#example 2: string slicing
for i in range(0, len (user_input[:i])):
       print(user_input[:i])



    

