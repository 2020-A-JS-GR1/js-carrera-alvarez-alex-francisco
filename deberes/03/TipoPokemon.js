const fs = require('fs');
const path = "informacionCRUD.txt";
const inquire = require ('inquirer');

let caseOption = true;

const promiseMenuOptions = () => {
    return inquire
        .prompt({
            type: 'list',
            name: 'option',
            message: 'Seleccione la opcion que desea a continuacion',
            choices: ['Añadir PoKeMoN','Actualizar PoKéMoN', 'Eliminar PoKéMoN', 'Visualizar PoKéMoN', 'Salir']
        });
}

const promiseCrearPokemon = (pokemon) => {
    return inquire
        .prompt([
            {
                type: 'input',
                name: 'pokemon',
                message: 'Ingrese el nombre del PoKéMoN',
            },
            {
                type: 'list',
                name: 'tipo',
                message: 'Elija el tipo de PoKéMoN',
                choises: ['Agua','Fuego','Hielo','Volador','Trueno','Roca']
            },
            {
                type: 'list',
                name: 'activo',
                message: 'El PoKéMoN tiene PS disponibles',
                choises: ['Si','No']
            },
            {
                type: 'input',
                name: 'peso',
                message: 'Ingrese el peso del PoKéMoN',
            },
            {
                type: 'list',
                name: 'sexo',
                message: 'Seleccione el sexo del PoKéMoN',
                choises: ['Masculino','Femenino']
            }
        ]);
}

const promiseSeleccionarTipo = (tipos) => {
    return inquire
        .prompt({
            type: 'list',
            name: 'game',
            message: 'Elija un Tipo de PoKéMoN',
            choises: tipos,
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
                            return val.game === resEliminar.pokemon;
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