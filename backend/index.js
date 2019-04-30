var express = require('express');
var mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "hello",
  password: "root",
  database: "react-app"
});
db.connect(function (err) {
  if (err) throw err;
  console.log('Database connected');
});

var app = express();

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/search', function (req, res) {
  let data = [];
  const query = 'SELECT * FROM for_searching';

  db.query(query, function(err, result) {
    if (err) {
      res.send('error');
      console.log('error')
    }

    data = JSON.stringify(result);
    res.send(data);
  })
});

app.get('/search/:text', function (req, res) {
  let data = [];
  const query = `SELECT * FROM for_searching WHERE title LIKE '%${req.params.text}%'`;
  console.log(query);
  
  db.query(query, function (err, result) {
    if (err) {
      res.send('error');
      console.log('error');
    }

    data = JSON.stringify(result);
    res.send(data);
  })
})

app.listen(3012);
