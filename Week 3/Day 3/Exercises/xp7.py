# Exercise 7 : Faker Module

from faker import Faker
# import random

fake = Faker()
users = []

def add_user():
    name = fake.name()
    address = fake.address()
    # language_code = random.choice(['en'], ['fr'], ['he'])  
    user = {
        'name': name,
        'address': address,
        # 'language_code': language_code
    }
    users.append(user)

for _ in range(600):
    add_user()

for user in users:
    print(user)