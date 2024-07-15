import random
class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value
        
    def __repr__(self):
        return f"{self.value} of {self.suit}"
    
class Deck:
    def __init__(self):
        self.cards = []
        self.generate_deck()
        
    def generate_deck(self):
        suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        
        for suit in suits:
            for value in values:
                self.cards.append(Card(suit, value))
                
    def shuffle(self):
        random.shuffle(self.cards)
        
    def deal(self):
        if len(self.cards) == 0:
            return None  
        
        return self.cards.pop()  
    
    def __repr__(self):
        return f"Deck of {len(self.cards)} cards"
    
# Make a deck of cards
deck = Deck()
print(deck)

# Shuffle the deck
deck.shuffle()

# Deal a card
card = deck.deal()
print(f"Dealt card: {card}")

print(deck)



