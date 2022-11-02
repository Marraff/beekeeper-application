import azure.functions as func
import pyodbc
import os
from dotenv import load_dotenv, find_dotenv
import bcrypt 
import re

load_dotenv(find_dotenv())

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:

    SERVER = os.environ["SERVER_AZURE"]
    DATABASE = os.environ["DATABASE_AZURE"]
    USERNAME = os.environ["USER_AZURE"]
    PASSWORD = os.environ["PASSWORD_AZURE"]  
    DRIVER= '{ODBC Driver 17 for SQL Server}'

    req_body = req.get_json()
    
    email = req_body['email']
    password = req_body['password']
    password = password.encode('utf-8')

    #password = bcrypt.hashpw(password, bcrypt.gensalt())
    #print(password)

    with pyodbc.connect('DRIVER='+DRIVER+';SERVER=tcp:'+SERVER+';PORT=1433;DATABASE='+DATABASE+';UID='+USERNAME+';PWD='+ PASSWORD) as conn:
        with conn.cursor() as cursor:
             cursor.execute("SELECT auth FROM users WHERE email = ?", (email))
             row = cursor.fetchone()
             while row:
                print (str(row))
                auth = str(row)
                auth = auth[2:62].encode('utf-8')
                print(auth)
                row = cursor.fetchone()
                
                
               # checking password
                result = bcrypt.checkpw(password, auth)
                print(result)
        
             
    if result == True:
      return func.HttpResponse(
               "User logged in.",     
               status_code=200
         )
    elif result  == False:
        return func.HttpResponse(
               "Failed to log in.",     
               status_code=404
         )