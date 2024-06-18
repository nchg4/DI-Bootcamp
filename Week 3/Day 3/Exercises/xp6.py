# Exercise 6 : Birthday And Minutes
from datetime import datetime

def How_long_have_you_lived_so_far(birthdate):

    current_time = datetime.now()
    time_lived = current_time - birthdate
    
    minutes_lived = int(time_lived.total_seconds() / 60)
    
    message = f"You have lived {minutes_lived} minutes so far."
    return message

birthdate = datetime(2024, 6, 18, 15, 30)  
message = How_long_have_you_lived_so_far(birthdate)
print(message)
