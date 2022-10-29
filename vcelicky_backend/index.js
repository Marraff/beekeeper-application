const mysql = require('mysql');
const fs = require('fs');
const { Connection, Request } = require("tedious");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const https = require("https");




var config =
{
    host: process.env.SERVER_AZURE,
    user: process.env.USER_AZURE,
    password: process.env.PASSWORD_AZURE,
    database: process.env.DATABASE_AZURE,
    //port: process.env.PORT_AZURE,
    //ssl: {ca: fs.readFileSync(process.env.SERURITY_CERTIFICATE)}
};

const conn = new mysql.createConnection(config);

conn.connect(
    function (err) { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:");
        throw err;
    }
    else
    {
       console.log("Connection established.");
          // queryDatabase();
    }
});

function queryDatabase(){
    conn.query('DROP TABLE IF EXISTS inventory;', function (err, results, fields) { 
        if (err) throw err; 
        console.log('Dropped inventory table if existed.');
    })
    conn.query('CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);', 
        function (err, results, fields) {
            if (err) throw err;
    console.log('Created inventory table.');
    })
    conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['banana', 150], 
            function (err, results, fields) {
                if (err) throw err;
        else console.log('Inserted ' + results.affectedRows + ' row(s).');
        })
    conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['orange', 154], 
            function (err, results, fields) {
                if (err) throw err;
        console.log('Inserted ' + results.affectedRows + ' row(s).');
        })
    conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['apple', 100], 
    function (err, results, fields) {
                if (err) throw err;
        console.log('Inserted ' + results.affectedRows + ' row(s).');
        })
    conn.end(function (err) { 
    if (err) throw err;
    else  console.log('Done.') 
    });
};






























/*
const app = express();
app.use(cors());
app.use(express.json())


// Create connection to database
const config = {
  authentication: {
    options: {
      userName: process.env.USER_AZURE, 
      password: process.env.PASSWORD_AZURE 
    },
    type: "default"
  },
  server: process.env.SERVER_AZURE,
  options: {
    database: process.env.DATABASE_AZURE,
    encrypt: true
  }
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
   console.log("connected successfully");
  }
  //connection.close();
});

connection.connect();

app.post('https://sql-dxcbeehive-prod.database.windows.net/register', (req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    console.log(name,email,password)
   
});

app.post('/register', (req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    console.log(name,email,password)
   
});
*/
/*
var httpsServer = https.createServer(app);
httpsServer.listen(3001, ()=> {
    console.log("Server running on port: 3001 ")
});

module.exports = httpsServer;
*/

/*
var config =
{
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
};

const conn = new mysql.createConnection(config);

conn.connect(
    function (err) { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:");
        throw err;
    }
    else
    {
       console.log("Connection established.");
           queryDatabase();
    }
});
*/