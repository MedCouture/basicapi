const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');


module.exports = app => {
    app.get('/', (req,res)=>{
        let data = {
            name:'test'
        }
        res.json(data);
    });
};