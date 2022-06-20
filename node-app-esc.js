const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))
app.use(express.static('views'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/routes', express.static(__dirname + 'public/routes'))
app.use('/images', express.static(__dirname + 'public/images'))

console.log(__dirname)
// get / request
app.get('', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/index.html'))
    console.log("here1")
})
//  get /index request
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/index.html'))
    console.log("here2")
})

// get /contact request
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/contact.html'))
    console.log("here3")
})

//  get /about request
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/about.html'))
    console.log("here4")
})
  
// Handling non matching request from the client
app.use((req, res, next) => {
    res.status(404).sendFile(
        path.join(__dirname,'/views/404.html'))
    console.log("404 biatch")
})
  
// Server setup
app.listen(5500, () => {
    console.log(`Server is listening in localhost:5500`);
})