print("Hello World!\n" * 4 + "I love python!\n" * 4)

# Ask the user to input a month (1 to 12).
# Display the season of the month received :
# Spring runs from March (3) to May (5)
# Summer runs from June (6) to August (8)
# Autumn runs from September (9) to November (11)
# Winter runs from December (12) to February (2)

# Ask the user to type a month
month = int(input("Enter a month (1 to 12): "))

# Seasons
if month in [3, 4, 5]:
    season = "Spring"
elif month in [6, 7, 8]:
    season = "Summer"
elif month in [9, 10, 11]:
    season = "Autumn"
elif month in [12, 1, 2]:
    season = "Winter"
else:
    season = "Invalid"

# Display the season
if season != "Invalid":
    print("The season for month %d is %s." % (month, season))
else:
    print("Invalid month entered. Please enter a month between 1 and 12.")
