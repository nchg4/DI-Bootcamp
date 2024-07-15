# 🌟 Exercise 3: String Module

import string
import random

characters = string.ascii_uppercase + string.ascii_lowercase

random_string = ''.join(random.choice(characters) for _ in range(5))

# Print or use the random string
print(f"Random String:", {random_string})
