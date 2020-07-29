const fs = require('fs');
const path = "data.txt";
const inquire = require ('inquirer');

let tiposPokemon = [];
let pokemon = [];

async function mainMenu() {

    let caseOption = 0;
    let archivo = JSON.parse(await leerArchivo());
    tiposPokemon = archivo.Tipos;
    pokemon = archivo.Pokemons;

    do {
        console.log("**********SISTEMA DE REGISTRO PoKéMoN**********");
        console.log("1. Tipos de PoKéMoN");
        console.log("2. PoKéMoN");
        console.log("3. Salir");

        await answer.then(
            async function (opcion) {
                console.log(opcion.opcion);
                caseOption = opcion.opcion;
                switch (caseOption) {
                    case "1":
                        await typePokemonMenu();
                        break;
                    case "2":
                        await pokemonMenu();
                        break;
                    default:
                        console.log("Vuelva a intentarlo");
                }
            }
        )
    }while (caseOption != "3")
}

const answer = ()=>{
    return inquire
        .prompt([{
            type: "input",
            name: "opcion",
            message: "Ingrese una opcion"
        }])
}

async function typePokemonMenu() {
    let caseOption = 0;
    do{
        console.log("**********TIPOS DE PoKéMoN**********");
        console.log("1. Ingresar un nuevo tipo de PoKéMoN");
        console.log("2. Visualizar tipos de PoKéMoN");
        console.log("3. Actualizar tipos de PoKéMoN");
        console.log("4. Eliminar tipos de PoKéMoN");
        console.log("5. Volver");
        
        await answer().then(
            async function (opcion) {
                console.log(opcion.opcion);
                caseOption = opcion.opcion;
                switch (caseOption) {
                    case "1":
                        const tipo = await ingresoTipo();
                        tiposPokemon.push(tipo);
                        await escribirArchivo(JSON.stringify({Tipos: tiposPokemon, Pokemons: pokemon}))
                        console.log("Se ha ingresado el tipo de PoKéMoN");
                        break;
                    case "2":
                        console.table(tiposPokemon);
                        break;
                    case "3":
                        console.table(tiposPokemon);
                        await answer().then(
                            async function (opcion) {
                                let index = opcion.opcion;
                                const tipo = await ingresoTipo();
                                tiposPokemon.splice(index,1,tipo);
                                await escribirArchivo(JSON.stringify([{Tipos: tiposPokemon, Pokemons: pokemon}]));
                            })
                        break;
                    case "4":
                        console.table(tiposPokemon);
                        await answer().then(
                            async function (opcion) {
                                let index = opcion.opcion;
                                console.log(index);
                                tiposPokemon.splice(index,1);
                                await escribirArchivo(JSON.stringify([{Tipos: tiposPokemon, Pokemons: pokemon}]));
                            })
                        break;
                    default:
                        console.log("Vuelva a intentarlo");

                }

            }
        )

    }while (caseOption != "5");
}

async function pokemonMenu() {
    let caseOption = 0;
    do{
        console.log("**********PoKéMoNs**********");
        console.log("1. Ingresar un nuevo PoKéMoN");
        console.log("2. Visualizar PoKéMoNs");
        console.log("3. Actualizar PoKéMoNs");
        console.log("4. Eliminar PoKéMoNs");
        console.log("5. Volver");

        await answer().then(
            async function (opcion) {
                console.log(opcion.opcion);
                caseOption = opcion.opcion;
                switch (caseOption) {
                    case "1":
                        const indpokemon = await ingresoPokemon();
                        pokemon.push(indpokemon);
                        await escribirArchivo(JSON.stringify({Tipos: tiposPokemon, Pokemons: pokemon}))
                        console.log("Se ha ingresado el PoKéMoN");
                        break;
                    case "2":
                        console.table(pokemon);
                        break;
                    case "3":
                        console.table(pokemon);
                        await answer().then(
                            async function (opcion) {
                                let index = opcion.opcion;
                                const indpokemon = await ingresoPokemon();
                                pokemon.splice(index,1,indpokemon);
                                await escribirArchivo(JSON.stringify([{Tipos: tiposPokemon, Pokemons: pokemon}]));
                            })
                        break;
                    case "4":
                        console.table(pokemon);
                        await answer().then(
                            async function (opcion) {
                                let index = opcion.opcion;
                                console.log(index);
                                pokemon.splice(index,1);
                                await escribirArchivo(JSON.stringify([{Tipos: tiposPokemon, Pokemons: pokemon}]));
                            })
                        break;
                    default:
                        console.log("Vuelva a intentarlo");

                }

            }
        )

    }while (caseOption != "5");
}

const ingresoTipo = ()=>{
    return inquire.prompt([{
        type: "input",
        name: ""
    }])
}

