import psycopg2


## 1) Create a connection w the database
DBNAME = 'dailychallenge'
USER = 'postgres'
PASSWORD = 'postgres'
HOST = 'localhost'
PORT = '5432'

connection = psycopg2.connect(dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT)


## 2) Create a Query(cursor)
cursor = connection.cursor()


## 3) Run SELECT queries

# table = 'actor'
# query = 'select * from actor;'

# cursor.execute(query)

# rows = (
#     cursor.fetchall()
# )
# print(rows)

# for row in rows:
#     print(row)



## 4) Run update queries

def update_values_single_field(
        table: str, field: str, new_value: str, search_by_field, search_by_valie
):
    query = f"UPDATE {table} SET {field} = %s where {search_by_field} = %s;"
    cursor.execute(query, (new_value, search_by_valie))
    connection.commit()

    update_values_single_field(
    table='property',
    field='name',
    new_value='Miami',
    search_by_feild='id',
    search_by_value='3',
    )



## 5)

# query = "create table sample_text (id serial primary key, name varchar (50));"
# cursor.execute(query)