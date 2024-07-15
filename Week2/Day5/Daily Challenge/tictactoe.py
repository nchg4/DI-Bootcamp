import random

print('xoxoxo Tic Tac Toe xoxoxo')
print('-------------------------')

possiblenumbers = [1,2,3,4,5,6,7,8,9]

# Creating a matrix:
gameboard = [[1,2,3], 
             [4,5,6], 
             [7,8,9]]
rows = 3
cols = 3

def printgameboard():
    for x in range(rows):
        print('*************')
        print('|', end= '')
        for y in range(cols):
            print('', gameboard[x][y], end= ' |')
        print()
    print('*************')

printgameboard()

def modifyArray(num, turn):
    num -= 1
    if(num == 0):
        gameboard[0][0] = turn
    elif(num == 1):
        gameboard[0][1] = turn
    elif(num == 2):
        gameboard[0][2] = turn
    elif(num == 3):
        gameboard[1][0] = turn
    elif(num == 4):
        gameboard[1][1] = turn
    elif(num == 5):
        gameboard[1][2] = turn
    elif(num == 6):
        gameboard[2][0] = turn
    elif(num == 7):
        gameboard[2][1] = turn
    elif(num == 8):
        gameboard[2][2] = turn

def checkwhowon(gameboard):
    # x axis
    if(gameboard[0][0] == 'X' and gameboard[0][1] == 'X' and gameboard [0][2] == 'X'):
        print('X has won!')
        return 'X'
    elif(gameboard[0][0] == 'O' and gameboard[0][1] == 'O' and gameboard [0][2] == 'O'):
        print('O has won!')
        return 'O'
    
    #y axis
    elif(gameboard[0][0] == 'X' and gameboard[1][0] == 'X' and gameboard[2][0] == 'X'):
        print('X has won!')
        return 'X'
    elif(gameboard[0][0] == 'O' and gameboard[1][0] == 'O' and gameboard[2][0] == 'O'):
        print('O has won!')
        return 'O'

    #coss
    elif(gameboard [0][0] == 'X' and gameboard[1][1] == 'X' and gameboard [2][2] == 'X'):
        print('X has won!')
        return 'X'
    elif(gameboard [0][0] == 'O' and gameboard[1][1] == 'O' and gameboard [2][2] == 'O'):
        print('O has won!')
        return 'O'


# to end the game
leaveloop = False

# keeping track of if its the computers turn or my turn
turnCounter = 0

while(leaveloop == False):

    if(turnCounter % 2 == 1):
        printgameboard()
        numberpicked = int(input('\nChoose a number 1-9 [no repeats]:'))
        if(numberpicked >= 1 or numberpicked <= 9):
            modifyArray(numberpicked, 'X')
            possiblenumbers.remove(numberpicked)
        else:
            print('Please choose a different number')

    else:
        while(True):
            cpuChoice = random.choice(possiblenumbers)
            print('\nCpu choice:', cpuChoice)
            if(cpuChoice in possiblenumbers):
                modifyArray(cpuChoice, 'O')
                possiblenumbers.remove(cpuChoice)
                turnCounter += 1
                break
