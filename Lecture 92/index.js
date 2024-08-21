const express = require('express')
const app = express()
app.set('view engine', 'ejs');
const port = 3000

app.get('/', (req, res) => {
    //   res.send('Hello World!')
    let siteName = "Adidas";
    let searchText = "Search!"
    let navItems = ['NavItem 1', 'NavItem 2', 'NavItem 3']
    // res.sendFile('templates/index.html', { root: __dirname })
    res.render("index" , {sitename: siteName, searchtext: searchText, navitems: navItems})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})