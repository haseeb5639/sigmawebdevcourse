const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.send('Hello World2!')
})

app.get('/about', (req, res) => {
    res.send('About Us!')
})

app.get('/contact', (req, res) => {
    res.send('Contact Me!')
})

app.get('/blog', (req, res) => {
    res.send('Blog!')
})

app.get('/blog/:slug', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(`Blog About ${req.params.slug}`);
})

// app.get('/blog/intro-to-js', (req, res) => {
//     res.send('Hello intro to js')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//     res.send('Hello intro to Python')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})