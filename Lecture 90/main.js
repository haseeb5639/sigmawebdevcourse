const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const blog = require('./routes/blog')

app.use(express.static("public"));
app.use('/blog' , blog);

//Middleware 1 - Logger for our application
app.use((req, res, next) => {
  console.log(req.headers);
  req.harry = "I am harry";
  // Get the raw timestamp
  const timestamp = Date.now();
  // Convert to a Date object
  const date = new Date(timestamp);
  // Format the date and time
  const formattedDate = date.toLocaleString(); // This gives the date and time in a readable format based on your locale
  fs.appendFileSync("logs.txt", `${formattedDate} is a ${req.method}\n`)
  console.log(`${formattedDate} is a ${req.method}`);
  next()
})

//Middleware 2
app.use((req, res, next) => {
  console.log('LOGGED 2')
  next()
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello About!' + req.harry)
})
app.get('/contact', (req, res) => {
  res.send('Hello Contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})