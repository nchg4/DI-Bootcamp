import psycopg2
import os
from dotenv import dotenv_values
from dotenv import load_dotenv

load_dotenv()

DBNAME =  os.getenv("DBNAME")
USER =  os.getenv("USER")
PASSWORD =  os.getenv("PASSWORD")
HOST =  os.getenv("HOST")
PORT = os.getenv("PORT")


country_info = {
    "name": "Wallis and Futana",
    "capital": "Mata-Uta",
    "flag": "",
    "subregion": "",
    "population": 11750,

    }

table = "countries"

query = f"insert into {table} (name, capital,flag, subregion, population) values(%s, %s, %s, %s, %s)"

connection = psycopg2.connect(
    dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT
)

cursor = connection.cursor()
cursor.execute()
    query,
        (
            country_info["name"]
            country_info["capital"]
            country_info["flag"]
            country_info["subregion"]
            country_info["population"]
        ),