# Dunder; a duner or magic method is anything that has __...__
## Built into python methods:
class Table:
    def __init__(self, color: str, price: int) -> None:
        self.color = color
        self.price = price

    def __str__(self) -> str:
        object_str = f"{self.color} Table, price - {self.price}"
        return object_str
    
    def __lt__(self, other_table: "Table") -> bool:
        return self.price < other_table.price

    def __gt__(self, other_table: "Table") -> bool:
        return self.price > other_table.price

if __name__ == "__main__":
    table1 = Table("Brown", 100)
    print(table1)

    table1_str = str(table1)
    print(table1_str)

    table2 = Table("Yellow", 50)

    print(table1 < table2)

    table3 = Table("Black", 125)
    table4 = Table("Yellow", 80)

    tables = [table2, table4, table3, table1]
    #           50       80      125     100



