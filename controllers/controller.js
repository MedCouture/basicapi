const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');


module.exports = app => {
    
    app.get('/api', function(req,res){
        let Obj = function(name,age){
            this.name = name;
            this.age = age;
        }
        let object = new Obj('Osman',31)
        res.json(object)
        
    })
    app.get('/', function(req,res){
        let data = {
            name:'Osman',
            age:31
        }
        res.render('index', data);
    });
};