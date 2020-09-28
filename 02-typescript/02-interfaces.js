var _this = this;
var alex = {
    nombre: 'Alex',
    apellido: 'Carrera',
    casado: false,
    sueldo: 11.2,
    estado: "BN",
    imprimirUsuario: function (mensaje) {
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: function (impuesto) {
        return _this.sueldo + _this.sueldo * (impuesto / 100);
    },
    estadoActual: function () {
        switch (_this.estado) {
            case "AC": return 'AP';
            case "IN": return 'AF';
            case "BN": return 'AT';
        }
    }
};
