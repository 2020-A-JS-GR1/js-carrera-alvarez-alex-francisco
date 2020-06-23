const arreglo = [
    {
        id:1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id:2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id:3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id:4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id:5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id:6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id:7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id:8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id:9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id:10,
        nombre: 'Ramiro',
        nota: 12
    }
];


//FIND

// devolver una expresion -> TRUTY FALSY

const respuestaFind = arreglo
.find(
    function (valorActual,indiceActual, arregloCompleto) {
        console.log('valorActual', valorActual);
        console.log('indiceActual', indiceActual);
        console.log('arregloCompleto', arregloCompleto);
        return valorActual.nombre === "Cristian";
    }
);
console.log('respuestaFind', respuestaFind); //undefined


//FINDINDEX

// devolver una expresion -> TRUTY FALSY

const respuestaIndex = arreglo
    .findIndex(
        function (valorActual,indiceActual, arregloCompleto) {
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            return valorActual.nombre === "Cristian";
        }
    );
console.log('respuestaIndex',respuestaIndex);

//FOREACH


const respuestaForEach = arreglo
    .forEach(
        function (valorActual,indiceActual, arregloCompleto) {
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            return valorActual.nombre === "Cristian";
        }
    );
console.log('respuestaForEach',respuestaForEach);

//MAP
//devolver nuevo elemento

const respuestaMap = arreglo
    .map(
        (valorActual,indiceActual, arregloCompleto) => {
            const nuevoElemento = {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota + 1,
            }
            return nuevoElemento;
        }
    );
console.log('respuestaMap',respuestaMap);
console.log('arreglo', arreglo);

const respuestaMapNuevo = arreglo
    .map(

        //funcion Anonima -> NO TIENE NOMBRE
        //funcion flecha GORDA
        (valorActual) => {
            return valorActual.nota;
        }
    );
console.log('respuestaMapNuevo',respuestaMapNuevo);
console.log('arreglo', arreglo);

//FILTER
//devolver expresion TRUTY FALSY

const respuestaFilter = arreglo
    .filter(
        (valorActual,indiceActual, arregloCompleto) => {
                return valorActual.nota >= 16;
            }
    );
console.log('respuestaFilter',respuestaFilter);
console.log('arreglo', arreglo);

//Hay notas menores a 9? SI o NO
// SOME devuelve un booleano
//OR

const respuestaSome = arreglo
    .some(
        (valorActual,indiceActual, arregloCompleto) => {
            return valorActual.nota < 9;
        }
);

console.log("respuestaSome", respuestaSome);

//every
//Devuelve un booleano
//Todas las notas son mayores a 14
//AND

const respuestaEvery = arreglo
    .every(
        (valorActual,indiceActual, arregloCompleto) => {
            return valorActual.nota > 14;
        }
    );

console.log("respuestaEvery", respuestaEvery);


