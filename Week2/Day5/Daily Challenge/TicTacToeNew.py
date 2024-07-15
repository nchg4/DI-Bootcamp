moves = {0: " ", 1: " ", 2: " ", 3: " ", 4: " ", 5: " ", 6: " ", 7: " ", 8: " "}


def print_board(moves):

    board = f"""
    | {moves[0]} | {moves[1]} | {moves[2]} |
    |---|---|---|
    | {moves[3]} | {moves[4]} | {moves[5]} |
    |---|---|---|
    | {moves[6]} | {moves[7]} | {moves[8]} |
    """

    print(board)


print_board(moves)








