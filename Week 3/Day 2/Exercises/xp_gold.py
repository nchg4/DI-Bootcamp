class BankAccount:
    def __init__ (self, username, password, balance =0):
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = False

    def authenticate(self, username, password):
        if username == self.username and password == self.password:
            self.authenticated = True
        else: 
            self.authenticated = False

    def deposit(self, amount):
        self.amount = amount

        if self.authenticated == False:
            raise PermissionError("Incorrect username or password, please try again.")

        if amount <= 0:
            raise ValueError("Not Successful, please try again with a positive number.")
        self.balance += amount
        
    def withdraw(self, amount):
        self.amount = amount

        if self.authenticated == False:
            raise PermissionError("Incorrect username or password, please try again.")

        if amount <= 0:
            raise ValueError("Not Successful, please try again with a positive number.")
        
        if self.balance <= amount:
            raise ValueError("Insufficient funds")
        self.balance - amount 
    
class MinimumBalanceAccount (BankAccount):
    def __init__ (self, minimum_balance = 0 ):
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Not Successful, please try again with a positive number.")
        
        if self.balance - amount <= self.minimum_balance:
            raise ValueError("Insufficient funds")
        super().withdraw(amount)

#_______________________________________________________Example user from AI:_______________________________________________________#

# Create a BankAccount instance
account = BankAccount(username="user123", password="password")

# Authenticate with correct username and password
try:
    account.authenticate("user123", "password")
    print("Authentication successful")
except ValueError as e:
    print("Authentication failed:", e)

# Try to deposit without authentication
try:
    account.deposit(100)
except PermissionError as e:
    print("Deposit failed:", e)  # Output: Deposit failed: Authentication required to perform this action.

# Deposit after successful authentication
account.authenticate("user123", "password")
account.deposit(100)
print("Balance after deposit:", account.balance)  # Output: Balance after deposit: 100

# Try to withdraw without authentication
try:
    account.withdraw(50)
except PermissionError as e:
    print("Withdrawal failed:", e)  # Output: Withdrawal failed: Authentication required to perform this action.

# Withdraw after successful authentication
account.authenticate("user123", "password")
account.withdraw(50)
print("Balance after withdrawal:", account.balance)  # Output: Balance after withdrawal: 50

# Try to withdraw more than balance
try:
    account.withdraw(100)
except ValueError as e:
    print("Withdrawal failed:", e)  # Output: Withdrawal failed: Insufficient balance