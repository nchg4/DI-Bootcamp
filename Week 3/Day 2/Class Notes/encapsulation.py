# Encapsulation

class ATMaccount:

    available_acc_numm= 555

    def __init__(self, holder) -> None:
        self.holder = holder
        self.__account_number = ATMaccount.available_acc_numm
        self._balance = 50
        ATMaccount.available_acc_numm += 1


my_account = ATMaccount("Noam Glick")
print(my_account.__dict__)

other_account = ATMaccount("John Doe")
print(other_account.__dict__)


print(my_account._balance)
print(my_account.__account_number)
print(my_account.__account_number)