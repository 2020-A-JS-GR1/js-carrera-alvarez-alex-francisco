class Persona {
    public nombre: string;
    public apellido: string;
    static nombreReferencial: string = 'Humano';
    protected nombreYApellido: string = '';

    constructor(
        nombreParametro: string,
        apellidoParametro: string,
    ) {
        this.nombre = nombreParametro
        this.apellido = apellidoParametro
        this.nombreYApellido = this.nombre + '' + this.apellido
    }
}

class Usuario extends Persona {
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
        public cedula:string,
        public estadoCivil:string,
    ) {
        super(nombreParametro,apellidoParametro);
    }
}

const alex = new Usuario(
    'Alex',
    'Carrera',
    '1716484827',
    'soltero'
)

console.log(alex.nombre);
console.log(alex.apellido);
console.log(alex.cedula);
console.log(alex.estadoCivil);