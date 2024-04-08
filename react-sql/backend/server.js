const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const port = 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const connectToDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "react_zoo",
});

//POST
app.post("/zoo", (req, res) => {
  const sqlQuery = `INSERT INTO animals(name, type, weight, isInZoo) VALUES(?, ?, ?, ?)`;
  connectToDB.query(
    sqlQuery,
    [req.body.name, req.body.type, req.body.weight, req.body.isInZoo],
    function (err, result) {
      if (err) throw err;
      res.json({ message: "ok" });
    }
  );
});

//GET
app.get("/zoo", (req, res) => {
  const sqlQuery = `SELECT id, name, type, weight, isInZoo FROM animals`;

  connectToDB.query(sqlQuery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

//DELETE
app.delete("/zoo/:id", (req, res) => {
  const sqlQuery = `DELETE from animals WHERE id=?`;

  connectToDB.query(sqlQuery, [req.params.id], function (err, result) {
    if (err) throw err;
    res.json({ message: "Deleted" });
  });
});

//UPDATE
app.put("/zoo/:id", (req, res) => {
  const sqlQuery = `UPDATE animals SET name=?, type=?, weight=?, isInZoo=? WHERE id=?`;

  connectToDB.query(
    sqlQuery,
    [
      req.body.name,
      req.body.type,
      req.body.weight,
      req.body.isInZoo,
      req.params.id,
    ],
    function (err, result) {
      if (err) throw err;
      res.json(result);
    }
  );
});

app.listen(port, () => {
  console.log(`listening port ${port}`);
});
