# Exercise 5 : Amount Of Time Left Until January 1st
from datetime import date
today_date = date.today()
print(f" Today is: {today_date},") 

def time_until_january_1st():
    # Get todays date
    today_date = date.today()

# define jan 1
    next_year = today_date.year + 1
    jan_1st_2025 = date(next_year, 1, 1)

# calc today till jan 1
    time_until = jan_1st_2025 - today_date
    days = time_until.days


    return days


days_until_jan_1st = time_until_january_1st()
print(f"And there is: {days_until_jan_1st} left until January 1st 2025.")

    




