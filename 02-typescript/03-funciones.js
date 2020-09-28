function sumaNumeros(numeroInicial) {
    var numerosASumarse = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numerosASumarse[_i - 1] = arguments[_i];
    }
    return numeroInicial;
}
sumaNumeros(1, 2, 3, 4, 5);
function imprimir(mensaje) {
    console.log('Hola' + mensaje);
}
var arregloNumeros = [1, 2, 3];
var arregloNumerosDos = [1, 2, 3];
var arregloNumerosTres = [1, "a", true];
var arregloNumerosCuatro = [1, "a", true];
var arregloNumerosOTexto = ["1", "2"];
