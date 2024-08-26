import express from "express"
const app = express()
const port = 3000

import mongoose from "mongoose"
mongoose.connect('mongodb://localhost:27017/company')

app.use(express.static('public'));

import { Employee } from './models/employee.js';

app.get('/', (req, res) => {
  insertRandomData();
  res.send(getRandomInt(1, 5).toString())
})

// Handle the POST request to insert random data
app.post('/insert-random-data', (req, res) => {
  insertRandomData();
  res.json({ message: "Data inserted successfully" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function insertRandomData() {
  let name = ["Haseeb", "Hamza", "Mukk", "Zimam", "Pappu"];
  let salary = [250000, 340000, 120000, 322000, 150];
  let language = ["Javascript", "C#", "Python", "React", "Next JS"];
  let city = ["Newyork", "Torronto", "Paris", "London", "Gaggo Mandi"];
  let isManager = [true, false, true, false, true];


  const employee = new Employee({
    name: name[getRandomInt(0, 4)],
    salary: salary[getRandomInt(0, 4)],
    language: language[getRandomInt(0, 4)],
    city: city[getRandomInt(0, 4)],
    isManager: isManager[getRandomInt(0, 4)]
  });
  employee.save();
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}