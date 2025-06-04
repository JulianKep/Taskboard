import sqlite3 from "sqlite3";
import express from "express";
import path from "path";

import chat from "./openaiService.js";

const db = new sqlite3.Database("data2.db");

const app = express();
const PORT = 8080;

//this starts the server ans listens on port 8080
//it takes a port and function as argument, the function is executed if the connection is succesful
app.listen(PORT, () => console.log(`itas alive on ${PORT}`));

//specify which files to serve as static files
//this stuff gets put in every app.post and app.get
app.use(express.static(path.join("public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/tasks", (req, res) => {
  //? is a sql placeholder. in the getall function it will be replaced by [x]
  const sql = `SELECT * FROM tasklist WHERE done = ?`;
  db.all(sql, [0], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    res.status(200).send({
      rows,
    });
  });
});

app.post("/complete", (req, res) => {
  const { id } = req.body;
  db.run("UPDATE tasklist SET done = 1 WHERE id = ?", [id], function (err) {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false });
    } else {
      res.json({ success: true });
    }
  });
});

app.post("/delete", (req, res) => {
  const { id } = req.body;
  db.run("DELETE FROM tasklist WHERE id = ?", [id], function (err) {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false });
    } else {
      res.json({ success: true });
    }
  });
});

app.post("/submit", function (req, res) {
  const task = req.body.task;
  const category = req.body.category;
  db.run(
    "INSERT INTO tasklist (task, category) VALUES (?, ?);",
    [task, category],
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ success: false });
      } else {
        res.json({ success: true });
      }
    }
  );
});

app.post("/update", function (req, res) {
  const column = req.body.column;
  const value = req.body.value;

  db.run("INSERT INTO tasklist (?) VALUES (?);", [column, value], (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false });
    } else {
      res.json({ success: true });
    }
  });
});

//STUPID VERSION:
app.get("/num", (req, res) => {
  db.all(`SELECT * FROM tasklist WHERE done = ?`, [1], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    const count = rows.length;
    res.status(200).send({ num: count });
  });
});
