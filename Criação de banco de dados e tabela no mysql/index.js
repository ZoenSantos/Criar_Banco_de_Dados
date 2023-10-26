var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "phpmyadmin",
    password: "Coloque a sua senha aqui",
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE coloque o nome do banco de dados aqui", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });