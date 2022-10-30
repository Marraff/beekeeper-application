import email
import logging
import azure.functions as func
import pyodbc
import os
from dotenv import load_dotenv, find_dotenv
import bcrypt 
import re

load_dotenv(find_dotenv())
regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'

def main(req: func.HttpRequest) -> func.HttpResponse:

   
    SERVER = os.environ["SERVER_AZURE"]
    DATABASE = os.environ["DATABASE_AZURE"]
    USERNAME = os.environ["USER_AZURE"]
    PASSWORD = os.environ["PASSWORD_AZURE"]  
    DRIVER= '{ODBC Driver 17 for SQL Server}'

    req_body = req.get_json()
    name = req_body['name']
    email = req_body['email']

    if not (re.fullmatch(regex, email)):
        print("Invalid Email")
        return func.HttpResponse(
             "Invalid email.",
             status_code=400
        )
 

    password = req_body['password']
    password = password.encode('utf-8')
    role = req_body['role']

    auth = bcrypt.hashpw(password, bcrypt.gensalt())

    with pyodbc.connect('DRIVER='+DRIVER+';SERVER=tcp:'+SERVER+';PORT=1433;DATABASE='+DATABASE+';UID='+USERNAME+';PWD='+ PASSWORD) as conn:
        with conn.cursor() as cursor:
            cursor.execute("INSERT INTO users (name, email, auth, role) VALUES (?,?,?,?)", (name,email,auth,role))
            
    return func.HttpResponse(
             "Beekeeper added to database.",
             status_code=200
        )
