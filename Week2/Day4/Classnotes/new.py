def say_hello(username, language = 'EN'):
    if language == 'EN':
        print(f'Hello, {username}')
    elif language == 'PT':
        print(f'Oi, {username}')
    elif language == 'RU':
        print(f'Privet, {username}')
    elif language == 'FR':
        print(f'Bonjour, {username}')
    elif language == 'HE':
        print(f'Shalom, {username}')
    else:
        print('Sorry there is language {language}')

    say_hello('EN', 'Noam')
    say_hello('PT', 'Juliana')
    say_hello('RU','Olga')
    say_hello('FR', 'Pierre')
    say_hello('HE', 'Adam')