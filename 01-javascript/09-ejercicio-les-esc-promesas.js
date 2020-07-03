const  fs = require('fs');

function promesaLectura(path) {
    const lecturaPromesa = new Promise(
        (resolve,reject) => {
            fs.readFile(path,
                'utf-8',
                (error, contenidoLeido) => {
                if(error){
                    console.log("Error leyendo archivo", error);
                } else{
                    console.log("Mensaje: ",contenidoLeido);
                }
            }
            )
        }
    )
    return lecturaPromesa;
}
function promesaEscritura(path, contenidoNuevo) {
    const escrituraPromesa = new Promise(
        (resolve, reject) => {
            fs.writeFile(
               path,
               contenidoNuevo + '\n' + contenidoLeido,
               'utf-8',
                (error) => {
                   if(error){
                       console.error("Error leyendo archivo", error);
                   }else{
                       console.log("Operacion terminada con exito");
                   }
                }
            )
        }
    )
}
promesaLectura('./06-ejemplo.txt')
    .then(
        (contenidoLeido) => {

        }
    )
