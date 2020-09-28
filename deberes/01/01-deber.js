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

    const vocales = ["a", "e", "i", "o", "u"];

    const arrayMap = arregloEstudiantes.map(
        (valorAcumulado) => {
            const alumno = Object.assign({},valorAcumulado);
            for (let letter of valorAcumulado.nombre) {
                if (vocales.find(vowel => vowel === letter)) {
                    alumno.nota = Number.parseFloat(alumno.nota + 0.1).toPrecision(3) ;
                }else {
                    alumno.nota = Number.parseFloat(alumno.nota + 0.05).toPrecision(3) ;
                }
            }
            return alumno;
        }
    ).filter(student => student.nota >= 14.0 );

    console.log("Array de estudiantes aprobados: ", arrayMap);
}



//Filtren cuales personas pasaron