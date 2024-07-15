# *args
def emails_list(*username):
    emails_list = []
    for user in username:
        user_email = user + '@companyname.com'
        emails_list.append(user_email)

    return emails_list

print(emails_list('noam', 'naomie', 'paola', 'lola'))

# the * lets me add more than 1, 
# sometimes we dont know how many functions a user will put
# wo a * you can only pass one 
# EX:
# def emails_list(username):
#     emails_list = []
#     for user in username:
#         user_email = user + '@companyname.com'
#         emails_list.append(user_email)

#     return emails_list
# print(emails_list('noam', 'naomie', 'paola', 'lola'))
# ^ if uncommented, terminal will show an error

#**kwargs

def user_info(**details):
    return details

print(user_info(name = 'noam', email =  'n@gmail.com', age = 22, address = 'Tel Aviv', nickname = 'Nounou'))

#if i want to add, i j add to print, i dont need to do anything else^

# The same can be done wo kwargs
# But a dif./+longer process
def user_info2(name, email, age, address, nickname): #<<<< add another detail; "nickname"
    details = {}
    details['name'] = name
    details['email'] = email
    details['age'] = age
    details['address'] = address
    #adding a new detail
    details['nickname'] = nickname
    return details

print(user_info2(name = 'noam', email =  'n@gmail.com', age = 22, address = 'Tel Aviv', nickname = 'Nounou'))

# I wan to add nickname...what do i need to do?
# just add to print likr **kwargs?
# No! must add a new detail
