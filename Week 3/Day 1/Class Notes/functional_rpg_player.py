player = "Noam"

player_strenth = 50
player_health = 100

player2 = "Ben"

player_strenth2 = 75
player_health2 = 80

def create_player(name: str, strength: int, health: int) ->

def attack(player: str, player_strenth: int) -> None:
    # if its a string, write "str" if its a number "int(integer)" or float (a decimal number); want to make sure the syste returns to you an int. when its s full number; int | float
    # Want it to return? Add; "->"


    print(f"Player {player} performns an attack with strength {player_strenth}")
    return 1


def defend(player, player_health, enemy_attack):
    player_health -= enemy_attack * 0.1 #Multiplying to reduce the strength if enemy attacks
    print(f"Player {player} defends. Player's new health is now: {player_health}")



attack(player, player_strenth)
defend(player, player_health, 20)    
