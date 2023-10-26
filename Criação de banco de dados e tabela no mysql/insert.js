var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "phpmyadmin",
  password: "Coloque a senha",
  database: "Coloque o nome da database"
});
//Esse côdigo serve para adicionar alguma coisa a sua tabela

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO Nome da tabela (name, address) VALUES ('Sony pictures', 'Culver City')"; 
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});