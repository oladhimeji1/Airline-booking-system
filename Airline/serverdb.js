const express = require('express');

const mysql = require('mysql');
// express app
const app = express();


//listen for request
app.listen(3000);

app.get('/', (req, res) => {
    
    // res.send('<p> home page <p>');
    res.sendFile("./views/index.html",{root:__dirname});

} );

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "afo@@1234M#4",
    database: "airlinedb"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.get('/register-controller', (req, res) => {
    var all1 = req.query;
    var namex = all1.name;
    var passwordx = all1.password;

  var sql = "INSERT INTO userdata  (Username,Password) VALUES ?" 
  var Values = [
    [`${namex}`, `${passwordx}`]

  ];
  con.query(sql,[Values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
  
});