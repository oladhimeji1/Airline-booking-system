const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyparser = require('body-parser');

// express app
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json())



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

        // Load a user record
app.post('/loadrec', (req, res) => {
  const {username} = req.body;
  
  const loadrec = `Select * From userdata Where Username = '${username}' ORDER BY Sno desc`
  con.query(loadrec, (err, data) => {
    if(err){
      return res.send(err)
      console.log(err)
    }else if(data){
      // console.log(data)
      res.send(data)
    }
  });
});

        // Load all user record
app.get('/loadall', (req, res) => {
  
  const loadrec = `Select * From userdata ORDER BY Sno DESC`
  con.query(loadrec, (err, data) => {
    if(err){
      return res.send(err)
      console.log(err)
    }else if(data){
      // console.log(data)
      res.send(data)
    }
  });
});

        // Load all Requests
app.get('/requests', (req, res) => {
  
  const loadrec = `Select Sno, Username, xFrom, xTo, FlightTime, Flight_no, Status From userdata ORDER BY Sno DESC`
  con.query(loadrec, (err, data) => {
    if(err){
      return res.send(err)
      console.log(err)
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
  const enterName = `Select * From login Where Username = '${username}' AND Password = '${password}'`
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

      // Book a Flight, sending the info to the database
app.post('/add-user', (req, res) => {
  const {username, from, to, departure, traveltype, travellers, arrival, time} = req.body;
 const enterName = 
  `INSERT INTO userdata(Username, xFrom, xTo, Depdate, Retdate, FlightTime, FlightType, NoOfFlight) 
  VALUES('${username}', '${from}', '${to}', '${departure}', '${arrival}', '${time}', '${traveltype}', '${travellers}')`;
  con.query(enterName, err => {
      if(err){
          return res.send(err)
          console.log(err)
      }else{
          res.send('Flight booked successfully!')
      }
  });
});


// Username Password Fullname UserType


      // Registering a user
app.post('/reg-user', (req, res) => {
  const {fullname, username, psw} = req.body;
  
  const enterName = 
  `INSERT INTO login(Username, Password, Fullname)
    VALUES('${username}', '${psw}', '${fullname}')`
  con.query(enterName, err => {
      if(err){
          return res.send(err)
      }else{
          res.send('Added successfully!!!')
      }
  });
})

      // Approve Ticket
app.post('/approve', (req, res) => {
  const {Sno} = req.body;
  
  const enterName = 
  `UPDATE userdata SET Status = 'Approved' WHERE Sno = '${Sno}'`
  con.query(enterName, err => {
      if(err){
          return res.send(err)
      }else{
          res.send('Approved successfully!')
      }
  });
})

      // Decline Ticket
app.post('/decline', (req, res) => {
  const {Sno} = req.body;
  
  const enterName = 
  `UPDATE userdata SET Status = 'Declined' WHERE Sno = '${Sno}'`
  con.query(enterName, err => {
      if(err){
          return res.send(err)
      }else{
          res.send('Declined successfully!')
      }
  });
})

//  Username, PassportId, Fullname, Means_of_id, Depdate, Retdate, FlightDate, FlightTime,
// Phone, HomeAddress, City, Country, Destination, FlightType, Flight_no, Status, NoOfFlight


//listen for request
app.listen(3000, () =>{
  console.log('Running on port 3000')
});

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