/**
 * Pokemon.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default', //nombre de la conexion
  tableName: 'pokemon',

  attributes: {

    nombre: {
      type: 'string',
      required: true,
    },

    tipo:{
      type: 'string',
      isIn: ['Agua', 'Fuego', 'Trueno','Roca','Normal','Psiquico']
    },

    sexo:{
      type: 'string',
      isIn: ['Male','Female']
    },

    peso:{
      type: 'number',
      required: true
    },

    //RELACIONES
    // POKEMON -> ENTRENADOR

    entrenador:{ //nombre de la FK

      model:'Entrenador',
      required: true, //Requerida 1-N
      //false Opcional 0-N (Por defecto)

    }



  },

};

