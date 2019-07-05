const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const controller = require('./controllers/controller');


const PORT = process.env.PORT || 3000;

//Initialize Express
const app = express();

//Use express.static to serve the public folder as a static directory
app.use(express.static('public'));

//Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({extended:true}));

//Get app to use routes
controller(app);

app.listen(PORT, ()=>{ console.log(`App is listening on port: ${PORT}`)});