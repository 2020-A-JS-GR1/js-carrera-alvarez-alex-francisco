// Mutables e Inmutables
// Mutables
var numeroUno = 1;
let numeroDos = 2;

numeroUno = 5;
numeroDos = 8;

numeroUno = false;
numeroDos = true;

//Inmutables

const configuracionArchivos = "PDF";
//configuracionArchivos = "XML";

//Tipos de varibles

const numero = 1;  //number
const sueldo = 1.2; //number
const texto = "Adrian"; //string
const booleanooo = false;   //boolean
const hijos = null; //object
const zapatos = undefined;  //undefined
const apellido = 'Carrera;'

console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof booleanooo);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof apellido);

if(true == true){
    console.log("Es verdadero"); //!
}else{
    console.log("Es Falso");
}

if(true == false){
    console.log("Es verdadero");
}else{
    console.log("Es Falso"); //!
}

if(""){
    console.log("Es verdadero");
}else{
    console.log("Es Falsy"); //!
}
if("Adrian"){
    console.log("Es truty");
}else{
    console.log("Es Falso");
}
if(-1){
    console.log("Es truty"); // Truty
}else{
    console.log("Es Falso");
}
if(0){
    console.log("Es truty");
}else{
    console.log("Es Falso"); // Truty
}
if(1){
    console.log("Es truty"); // Falsy
}else{
    console.log("Es Falso");
}




