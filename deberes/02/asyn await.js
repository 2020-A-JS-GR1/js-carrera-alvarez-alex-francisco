const fs = require('fs');

function promesaLeerArchivo(path) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenido) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(contenido);
                    }
                }
            );
        }
    );
}

function promesaEscribirArchivo(path, contenido, contenidoNuevo) {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                contenido + '\n' + contenidoNuevo,
                'utf-8',
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve();
                    }
                }
            );
        }
    );
}

async function leerEscribir(path, contenidoNuevo) {
    try {
        const archivoOriginal = await promesaLeerArchivo(path);
        await promesaEscribirArchivo(path, archivoOriginal, contenidoNuevo);
        const nuevoArchivo = await promesaLeerArchivo(path);
        console.log('CONTENIDO:\n', nuevoArchivo);
    } catch (error) {
        console.error('Error: ', error);
    }
}

leerEscribir('./ejemplo.txt', 'esto es un nuevo contenido');