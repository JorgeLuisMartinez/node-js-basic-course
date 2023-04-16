const { log } = require('console');
const fs = require('fs')

fs.writeFile('./texto.txt', 'linea uno', function(error){
    if(error) {
        console.log(error);
    }
    console.log('archivo creado');
} );

console.log('ultima linea de codigo')

