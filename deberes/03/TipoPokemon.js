const fs = require('fs');
const path = "informacionCRUD.txt";
const inquirer = require('inquirer');

let caseOption = true;

const promiseMenuOptions = () => {
    return inquirer
        .prompt({
            type: 'list',
            name: 'option',
            message: 'Seleccione la opcion que desea a continuacion',
            choices: ['Añadir PoKeMoN','Actualizar PoKéMoN', 'Eliminar PoKéMoN', 'Visualizar PoKéMoN', 'Salir']
        });
}

const promiseCrearPokemon = (game) => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'pokemon',
                message: 'Ingrese el nombre del PoKéMoN',
                default: game,
            },
            {
                type: 'list',
                name: 'category',
                message: 'Elija el tipo de PoKéMoN:',
                choices: ['Agua', 'Fuego', 'Trueno', 'Roca', 'Hielo', 'Volador', 'Normal', 'Psiquico', 'Raro']
            },
            {
                type: 'list',
                name: 'completed',
                message: 'El PoKéMoN cuenta con PS disponibles para la batalla?',
                choices: ['Si', 'No']
            },
            {
                type: 'list',
                name: 'recommended',
                message: 'El sexo del PoKéMoN es:?',
                choices: ['Male', 'Female']
            },
            {
                type: 'input',
                name: 'peso',
                message: 'Ingrese el peso del PoKéMoN',
                defualt: '0'
            }
        ]);
}

const promiseSeleccionarTipo = (games) => {
    return inquirer
        .prompt({
            type: 'list',
            name: 'game',
            message: 'Seleccione un PoKéMoN:',
            choices: games,
        });
}

const promiseLeerPokemons = () => {
    return new Promise(
        (res,rej) => {
            fs.readFile(
                path,
                'utf-8',
                (e, content) => {
                    if (e) {
                        rej(e);
                    }else{
                        res(content);
                    }
                }
            );
        }
    );
}

const promiseEscribirArchivo = (data) => {
    return new Promise(
        (res,rej) => {
            fs.writeFile(
                path,
                data,
                'utf-8',
                (e) => {
                    if (e) {
                        rej(e);
                    }else{
                        res();
                    }
                }
            );
        }
    );
}

function actualizarArchivo(list) {
    let actualizarLista = '';
    list.map(
        (val, ind) => {
            if (ind < list.length - 1){
                actualizarLista = actualizarLista + JSON.stringify(val) + '\n';
            }else{
                actualizarLista = actualizarLista + JSON.stringify(val);
            }
        }
    );
    return actualizarLista;
}

const promiseListaPokemons = (list) => {
    let todosTipos = '';
    list.map(
        (val, ind) => {
            if (ind < list.length - 1){
                todosTipos = todosTipos + JSON.stringify(val) + '\n';
            }else{
                todosTipos = todosTipos + JSON.stringify(val);
            }
        }
    );
    return todosTipos;
}

async function mainMenu() {
try {
    while(caseOption){
        const resLeerPokemons = await promiseLeerPokemons();
        let pokemonList = [];

        if(resLeerPokemons !== ''){
            pokemonList = resLeerPokemons.split('\n').map(
                val => {
                    return JSON.parse(val);
                }
            );
        }
        const resOption = await promiseMenuOptions();
        switch (resOption.option) {

            case 'Añadir PoKeMoN':
                const resAñadirPokemon = await promiseCrearPokemon();
                if(resLeerPokemons !== ''){
                    await promiseEscribirArchivo(resLeerPokemons + '\n' + JSON.stringify(resAñadirPokemon));
                }else{
                    await promiseEscribirArchivo(JSON.stringify(resAñadirPokemon));
                }
                console.log('PoKéMoN agregado exitosamente');
                break;

            case 'Actualizar PoKéMoN':
                if (pokemonList.length === 0) {
                    console.log('No existen PoKéMoNs registrados');
                }else{
                    const resActualizarPokemon = await promiseSeleccionarTipo(pokemonList.map(
                        val => {
                            return val.pokemon;
                        }
                    ));
                    pokemonList[pokemonList.findIndex(
                        val =>{
                            return val.pokemon === resActualizarPokemon.pokemon;
                        }
                    )] = await promiseCrearPokemon(resActualizarPokemon.pokemon);
                    await promiseEscribirArchivo(actualizarArchivo(pokemonList));
                }
                console.log('PoKéMoN actualizado');
                break;

            case 'Eliminar PoKéMoN':
                if (pokemonList.length === 0) {
                    console.log('No existen PoKéMoNs registrados');
                }else {
                    const resEliminar = await promiseSeleccionarTipo(pokemonList.map(
                        val => {
                            return val.pokemon;
                        }
                    ));
                    pokemonList.splice(pokemonList.findIndex(
                        val => {
                            return val.pokemon === resEliminar.pokemon;
                        }
                    ),1);
                    await promiseEscribirArchivo(actualizarArchivo(pokemonList));
                }
                console.log('PoKéMoN Eliminado');
                break;

            case 'Visualizar PoKéMoN':
                const resListaPokemons = await promiseListaPokemons(pokemonList);
                console.table(resListaPokemons);
                break;

            case 'Salir':
                caseOption = false;
                console.log('Ha salido del sistema de Registro PoKéMoN');
                break;
        }
    }
}catch (e) {
    console.error('Error: ',e);
    }
}

mainMenu();