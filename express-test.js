const express = require("express");

const colors = require('colors');

const server = express();

server.get('/', function (req, res){
    res.send('<h1>Hola mundo</h1>')
})

server.listen(3000, ()=>{
    console.log('Server on port 3000'.rainbow);
});