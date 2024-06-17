# print("Hello World")) # =syntax error

# age = int(input("what\'s your age?"))
# print(age + 10)

# try:
#     age = int(input("what\'s your age?"))
#     print(age + 10)

# except:
#     print("invalid age")
#     age = int(input("what\'s your age?"))
#     print(age + 10)




my_list = [2,3,1,2, "four", 42,1,5,3, "imanumber"]

sum(my_list)

total = 0
for num in my_list:
    if isinstance(num, int):
     sum += num
    else:
       continue
    # print(total)
    # print(sum (my_list))

total = 0
for num in my_list:
    try: 
      total += num
    except: 
       continue
    else:
       print(num)
    finally:
       print("Happens even if there is no except")


print(total)