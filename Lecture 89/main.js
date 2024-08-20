const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000

app.use(express.static("public"));
app.use('/blog' , blog)
app.use('/shop' , shop)

app.get('/', (req, res) => {
  console.log("This is a Get Request");
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  console.log("This is a Post Request");
  res.send('Hello World from Post Request!')
})

app.put('/', (req, res) => {
  console.log("This is a Put Request");
  res.send('Hello World from Put Request!')
})

app.delete('/', (req, res) => {
  console.log("This is a Delete Request");
  res.send('Hello World from Delete Request!')
})

app.get('/index', (req, res) => {
  console.log("This is a index Get Request");
  res.sendFile("templates/index.html", { root: __dirname })
})

app.get('/api', (req, res) => {
  console.log("This is a json Get Request");
  res.json({ a: 1, b: 2, c: 3, d: 4 });
})

app.get('/download', (req, res) => {
  console.log("This is a json Get Request");
  res.download("templates/index.html", { root: __dirname });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})