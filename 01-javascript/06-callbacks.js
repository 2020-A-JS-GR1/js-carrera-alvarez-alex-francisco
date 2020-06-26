const fs = require('fs');

console.log('Primero'); //SINCRONO

fs.readFile( //ASINCRONA
    './06-ejemplo.txt',
    'utf-8',
    (error, contenido)=> {  //CALLBACK (readFile)
        console.log('Segundo');
        if(error){
            console.error('Hubo error', error);
        }else {
            console.log(contenido);
        }

    }
)
const suma = 5 + 3; //SINCRONO
console.log('Suma',suma); //SINCRONO
console.log('Final'); //SINCRONO