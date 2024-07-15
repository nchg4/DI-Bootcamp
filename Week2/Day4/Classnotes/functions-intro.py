# Syntax 
def say_hello():
    
    say_hello()

# Arguments
def say_hello(name):
    print(f'Hello, {name}')

say_hello('Noam')

# name  = "Max"
say_hello("Max")
say_hello("a")
say_hello("b")


# def say_hello(username:str, language = 'EN')->None:
#     '''print a greeting depending on the username'''
#     if language == 'EN':
#         print(f'Hello, {username}')
#     elif language == 'PT':
#         print(f'Oi, {username}')
#     elif language == 'RU':
#         print(f'Privet, {username}')
#     elif language == 'FR':
#         print(f'Bonjour, {username}')
#     elif language == 'HE':
#         print(f'Shalom, {username}')
#     else:
#         print('Sorry there is language {language}')

#     say_hello('EN', 'Noam')
#     say_hello('PT', 'Juliana')
#     say_hello('RU','Olga')
#     say_hello('FR', 'Pierre')
#     say_hello('HE', 'Adam')
# print(say_hello())

# def user_info(username = 'none', email = 'yahoo', age = '22', password = '1223'):
#     print('user info:', username, email, age, password)

#     user_info(password=555)

count = 1

def calculation(a,b):
    # global count
    #global is not popular in py, used in games
    result = a+b
    # count = 5
    return result

calculation(5,2)
print(count)


def sum_total():
    calc1 = calculation(5,3)
    calc2 = calculation(10,4)
    result_adding = calc1 + calc2
    result_subtraction = calc1 - calc2
    return result_adding, result_subtraction

print( sum_total())
add, sub = sum_total()
print(add)
print(sub)
