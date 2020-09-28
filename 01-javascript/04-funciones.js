function soloNumeros(a,b,c) {
    return a - b + c;
}
soloNumeros('v', true,[1,2,3]);

// Funciones Nombradas

function funcionNombrada() {
}
const funcionNombradaDos = function () {  //funciones ANONIMAS
};

var funcionNombradaTres = function () {   //funciones SIN NOMBRE
};

let funcionNombradaCuatro = function opcional () {   //funciones ANONIMAS
};

// Funciones Flecha Gorda

const funcionNombradaCinco = () => {

};  //FAT ARROW FUNCTION

const funcionNombradaSeis = (x) => {
return x+1
};  //FAT ARROW FUNCTION

const funcionNombradaSiete = (x) =>  x+1 ;  //FAT ARROW FUNCTION
                                            //Una sola linea
                                            //Omito Return
                                            //Omito llaves

const funcionNombradaOcho = x =>  x+1 ;     //TENGO SOLO UN PARAMETRO
                                            //Omito los parentesis

const funcionNombradaNueve = (x,y,z) =>  x + y + z;     //TENGO SOLO UN PARAMETRO
                                            //Omito los parentesis
//Sumar uno o varios numeros

function sumarNumeros(numeroInicial, //numero
                      ...otrosNumeros) {  //parametros infinitos []

    return numeroInicial + otrosNumeros.reduce((a,v) => a + v, 0 );

}

sumarNumeros(1,2,3,4,5,6,7,8,9,10);

