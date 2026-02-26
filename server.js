// server.js
const express = require('express');

const app = express();
const PORT = 3000;

// HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Server Listen to this PORT
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

let mysql = require('mysql');

let con = mysql.createConnection({
  host: "localhost",
  port: '3306',
  user: "root",
  password: "$i11yGoofyC@t$"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});