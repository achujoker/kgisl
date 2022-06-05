const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const moment = require("moment");

const app = express();
const port = 8000;
app.use(bodyParser.json());

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "password",
  database: "appointments",
});

app.get("/getAppointments", (req, res) => {
  let fromTime = moment().hours(0).minutes(1).toDate();
  let toTime = moment().hours(23).minutes(59).toDate();
  let query = `SELECT * FROM appointments WHERE slotDate ${fromTime} BETWEEN ${toTime}`;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(query, (err, data) => {
      if (!err) {
        res.send(data.json());
      } else {
        console.log("err", err);
      }
    });
  });
});

app.get("/addSlots", (req, res) => {
  let slotTime = req.params.slottime;
  let patientName = Math.random().toString(36).substring(7);
  let contactName = Math.random();

  let query = `INSERT INTO appointments (slotTime,patitentName,contactName) VALUES(${slotTime}, ${patientName},${contactName})`;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(query, (err, data) => {
      if (!err) {
        res.send(data.json());
      } else {
        console.log("err", err);
      }
    });
  });
});

app.listen(port, () => console.log("server started"));
