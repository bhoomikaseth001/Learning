import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="B@0112",
    database="bhoomikadb"
)

mycursor = mydb.cursor()

#mycursor.execute("CREATE DATABASE testdb") 

# mycursor.execute("SHOW DATABASES")

# for db in mycursor:
#     print(db)


# mycursor.execute("CREATE TABLE students (name VARCHAR(255), age INT)")

mycursor.execute("SHOW DATABASES")

for tb in mycursor:
    print(tb)
