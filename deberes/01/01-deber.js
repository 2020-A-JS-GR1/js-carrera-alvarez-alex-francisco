const arregloEstudiantes = [
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

console.log('arreglo', arregloEstudiantes);
SumarDecimas();

// Por cada vocal dentro de la palabra del estudiante 0.1 decimas
// Por cada consonante dentro de la palabra del estudiante 0.05 decimas
function SumarDecimas() {

    const arregloNuevoPromedio = arregloEstudiantes
        .map(
            (valorActual) => {
                const nuevoElemento = {
                    id: valorActual.id,
                    nombre: valorActual.nombre,
                    nota: valorActual.nota,
                }
                return nuevoElemento;
            }
        );
   // console.log('NuevasNotas:',arregloNuevoPromedio);

    arregloNuevoPromedio.
    forEach(value => )

}



//Filtren cuales personas pasaron