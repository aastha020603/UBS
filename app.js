const express = require('express');
const path = require("path");
const app = express();
const port = 80;

// app.use(express.static('static',options))
// Express specific stuff
app.use('/static', express.static('static'))// For serving static files
app.use(express.urlencoded())

// Pug specific stuff
app.set('view engine','pug')// set the template engine as pug
app.set('views',path.join(__dirname, 'views'))// Set the views directory

// ENDPOINTS
app.get('/',(req,res)=>{
    const params= {}
    res.status(200).render('home.pug',params);
})
app.get('/Contact',(req,res)=>{
    const params= {}
    res.status(200).render('Contact.pug',params);
})

// start the server 
app.listen(port, ()=>{
    console.log(`The application started sucessfully on port ${port}`);
});

