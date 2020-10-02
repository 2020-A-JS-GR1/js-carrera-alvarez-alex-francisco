/**
 * Entrenador.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default', //nombre de la conexion
  tableName: 'entrenador',

  attributes: {

    nombre:{
      type: 'string',
      minLength: 3,
      required: true,
    },

    edad:{
      type: 'number',
      required: true,
    },

    region:{
      type: 'string',
      required: true,
    },

    //RELACIONES
    // ENTRENADOR -> POKEMON

    pokemones:{ //Uno a muchos (nombre plural)
      collection: 'Pokemon',
      via: 'entrenador'

    }

  },

};

