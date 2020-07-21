// Mutable e inmutables
// Mutables
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 5;
numeroDos = 8;
numeroUno = false;
numeroDos = true;
// Constantes
const configuracionArchivos = 'PDF';
// configuracionArchivos = 'XML';
// Tipos de variables
const numero = 1; // number
const sueldo = 1.2; // number
const texto = 'Adrian'; // string
const booleano = false; // boolean
const hijos = null; // object
const zapatos = undefined; // undefined
console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof booleano);
console.log(typeof hijos);
console.log(typeof zapatos);
if(1) {
    console.log('Es truty');
} else {
    console.log('Es falsy');
}
if(-1) {
    console.log('Es truty');
} else {
    console.log('Es false')
}
if(null) {
    console.log('Es truty');
} else {
    console.log('Es falsy');
}
if(undefined) {
    console.log('Es truty');
} else {
    console.log('Es falsy');
}

// Orden de importncia
// 1) "const"
// 2) "let"
// 3) X -> "var"

// Objetos Js (JSON) - Arreglos

const alex = {
    nombre: 'Alex', //lave: valor,
    'apellido': 'Carrera',
    edad: 23,
    hijos: null,
    casado: false,
    zapatos: {
        color: 'plomo',
        talla: '40'
    },
    mascotas: [
        'Kirenya',
        'Lunita'
    ],
}; // object

alex.nombre; // 'Alex'
alex.apellido // 'Carrera'
alex["nombre"]; //'Alex'
console.log(alex);
alex.nombre = ""; // alex["nombre"];
console.log(alex);
alex.sueldo;
console.log(alex.sueldo); //undefined
alex.sueldo = 1.2;
console.log(alex.sueldo); //1.2
alex["gastos"] = 0.8;
console.log(alex.gastos); //0.8
alex.nombre = undefined;
delete alex.nombre; //Elimina la llave "nombre"
console.log(Object.keys(alex));
console.log(Object.values(alex));

// Lista de variables por valor en JS

// number
// string
// boolean
// object
// undefined

let edadAlex = 27;
let edadFrancisco = edadAlex;
console.log(edadAlex); //27
console.log(edadFrancisco); //27
edadAlex = edadAlex+1;
console.log(edadAlex); // 28
console.log(edadFrancisco); // 27 //Variables por valor

// Lista de variables por referencia en JS

let rafael = {
    nombre: "Rafael"
};
/*
let lenin = rafael;
console.log(rafael);
console.log(lenin);
lenin.nombre = "Lenin";
console.log(rafael);
console.log(lenin);
delete rafael.nombre;
console.log(rafael);
console.log(lenin);
*/
let lenin = Object.assign({},rafael);
//let lenin = Object.assign({},rafael);
console.log(rafael);
console.log(lenin);
lenin.nombre = "Lenin";
delete rafael.nombre;
console.log(rafael);
console.log(lenin);



/*
const arregloNumeros = []; //object

console.log(alex);
console.log(arregloNumeros);
 */