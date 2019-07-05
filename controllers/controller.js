const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');


module.exports = app => {
    app.get('/api', (req,res)=>{
        let data = {
            name:'test',
            age:1
        }
        res.json(data);
    });
    app.get('/', (req,res)=>{
        let data = {
            name:'test',
            age:1
        }
        res.render('index', data);
    });
};