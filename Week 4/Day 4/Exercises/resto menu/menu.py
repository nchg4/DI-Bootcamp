import psycopg2

DBNAME = "resto"
USER = "postgres"  # postgres
PASSWORD = "postgres"  # <YOUR POSTGRES PASSWORD>
HOST = "localhost"
PORT = "5432"



class menuitem:
    def __init__(self, item_name, item_price):
        self.item_name = item_name
        self.item_price = item_price
    
    def save(self):
        connection = psycopg2.connect(
    dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT
)
        cursor=connection.cursor
        cursor.execute("INSERT INTO Menu_items(tem_id, item_name, item_price) Value(1, Burger, 35), (2, Veggi Burger, 37), (3, Beef Stew, "" )")
        connection.commit()
        connection.close()
