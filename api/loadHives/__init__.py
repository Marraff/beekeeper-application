import azure.functions as func
import pyodbc
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

def main(req: func.HttpRequest) -> func.HttpResponse:
    
    SERVER = os.environ["SERVER_AZURE"]
    DATABASE = os.environ["DATABASE_AZURE"]
    USERNAME = os.environ["USER_AZURE"]
    PASSWORD = os.environ["PASSWORD_AZURE"]  
    DRIVER= '{ODBC Driver 17 for SQL Server}'

    result = ''
    
    with pyodbc.connect('DRIVER='+DRIVER+';SERVER=tcp:'+SERVER+';PORT=1433;DATABASE='+DATABASE+';UID='+USERNAME+';PWD='+ PASSWORD) as conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT data,longtitude,latitude,id FROM bee_hives WHERE is_public = ?", ("true"))
            
            rows = cursor.fetchall()
            
            for dt in rows:
                #result.append([x for x in dt])
                result += str(dt)
                print(result)

    #result = result[0]
    #result = result[0]
    #print(result)
 
    return func.HttpResponse(result, status_code=201)
