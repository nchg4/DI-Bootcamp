# Challenge num. 2:

def items_you_can_afford(items_purchase, wallet):
    # Convert the wallet amount from string to an int
    wallet_amount = int(wallet.replace('$', '').replace('', ''))
    
    # Initialize a list to store affordable items
    affordable_items = []
    
    
    for item, price_str in items_purchase.items():
        # Convert price from str -> int
        price = int(price_str.replace('$', '').replace(',', ''))
        # Check if wallet amount has enogh to purchase  item
        if price <= wallet_amount:
            affordable_items.append(item)
    
    # Sort  list of the affordable items alphabetically
    affordable_items.sort()
    
    if affordable_items:
        return affordable_items
    else:
        return "Nothing"



items_purchase1 = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}
wallet1 = "$300"

print(items_you_can_afford(items_purchase1, wallet1))  

items_purchase2 = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2"
}
wallet2 = "$100"

print(items_you_can_afford(items_purchase2, wallet2))  
items_purchase3 = {
  "Phone": "$999",
  "Speakers": "$300",
  "Laptop": "$5,000",
  "PC": "$1200"
}
wallet3 = "$1"

print(items_you_can_afford(items_purchase3, wallet3))  
