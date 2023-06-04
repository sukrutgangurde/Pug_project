const express = require("express");
const path = require("path");
const port =80;
const app = express();

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))//For serving static files
app.use(express.urlencoded())

//PUG specific stuff
app.set('view engine', 'pug')//SET TEMPLATE ENGINE AS A PUG
app.set('views', path.join(__dirname,"views"))//SET THE VIEW DIRECTORY

// ENDPOINTS
app.get('/contact', (req, res)=>{
    const params = {}
    res.status(200).render('contact.pug', params);
})
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})



// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
