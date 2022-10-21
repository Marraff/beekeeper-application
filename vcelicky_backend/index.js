const mysql = require('mysql');
const fs = require('fs');
const { Connection, Request } = require("tedious");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const https = require("https");

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