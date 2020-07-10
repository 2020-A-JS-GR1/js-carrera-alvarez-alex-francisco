interface Usuario {
    nombre: string;
    apellido: string;
    edad?: number; // opcional
    sueldo?: number; // opcionalç
    casado: boolean;
    estado: 'AC' | 'IN' | 'BN'
    imprimirUsuario: (mensaje:string) => string;
    calcularImpuesto: (impuesto: number) => number;
    estadoActual: () => string;
}

const alex: Usuario = {
    nombre: 'Alex',
    apellido: 'Carrera',
    casado: false,
    sueldo: 11.2,
    estado: "BN",
    imprimirUsuario: (mensaje)=>{
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: (impuesto: 12) => {
        return this.sueldo+this.sueldo*(impuesto/100);
    },
    estadoActual: () => {
        switch (this.estado) {
            case "AC": return 'AP';
            case "IN": return 'AF';
            case "BN": return 'AT';
        }
    }
}