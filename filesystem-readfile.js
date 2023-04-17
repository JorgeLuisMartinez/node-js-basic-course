const fs = require('fs')

fs.readFile('./texto.txt', function(error, data){
    if(error){
        console.log(error);
    }
    console.log(data.toString());
})

