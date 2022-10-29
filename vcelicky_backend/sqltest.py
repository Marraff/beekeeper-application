import pyodbc
server = 'sql-dxcbeehive-prod.database.windows.net'
database = 'sqldb-dxcbeehive-prod'
username = 'dxcbeehiveprod'
password = '{7TSDuO*%55q1}'   
driver= '{ODBC Driver 17 for SQL Server}'

with pyodbc.connect('DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password) as conn:
    with conn.cursor() as cursor:
        cursor.execute("SELECT role, auth FROM users")
        row = cursor.fetchone()
        while row:
            print (str(row[0]) + " " + str(row[1]))
            row = cursor.fetchone()