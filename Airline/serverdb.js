const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyparser = require('body-parser');

// express app
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json())

//listen for request
app.listen(3000, () =>{
  console.log('Running on port 3000')
});

app.get('/', (req, res) => {
    
    // res.send('<p> home page <p>');
    res.sendFile("./views/index.html",{root:__dirname});

} );

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ola-2000@gmail.com",
    database: "airlinedb"
  });
  
  con.connect(function(err) {
    if (err){
      console.log(err)
    }else{
      console.log("Connected to database!");
    };
    
  });

        // Load user record
app.post('/loadrec', (req, res) => {
  const {username} = req.body;
  
  const loadrec = `Select * From userdata Where Username = '${username}' ORDER BY sno desc`
  con.query(loadrec, (err, data) => {
    if(err){
      return res.send(err)
    }else if(data){
      // console.log(data)
      res.send(data)
    }
  });
});

        // Validating user
app.post('/login', (req, res) => {
  const {username, password} = req.body;
  console.log(username, password)
  const enterName = `Select * From userdata Where Username = '${username}' AND Password = '${password}'`
  con.query(enterName, (err, data) => {
      if(err){
        return res.send(err)
      }else if(data){
        res.send(data)
      }else{
        return res.send('err')
      }
  });
});

      // Register a user into the database
app.post('/add-user', (req, res) => {
  const {fullname, username, phone, startdate, enddate, ftype, reason, city, country, destination, haddress} = req.body;
  // console.log(firstname)
  const enterName = 
  `INSERT INTO userdata(Username, Depdate, Retdate, FlightType, Reason, Fullname, City, Country, Destination,HomeAddress, Phone)
   VALUES('${username}', '${startdate}', "${enddate}", "${ftype}", '${reason}', "${fullname}", "${city}", "${country}", "${destination}", "${haddress}", "${phone}")`
  con.query(enterName, err => {
      if(err){
          return res.send(err)
      }else{
          res.send('Added successfully!!!')
      }
  });
})

// app.get('/register-user', (req, res) => {
//     var all1 = req.query;
//     var namex = all1.name;
//     var passwordx = all1.password;

//   var sql = "INSERT INTO userdata(Username,Password) VALUES ?" 
//   var Values = [
//     [`${namex}`, `${passwordx}`]

//   ];
//   con.query(sql,[Values], function (err, result) {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//   });
//   res.send(12)
// });