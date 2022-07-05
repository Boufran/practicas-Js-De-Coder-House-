// Repaso de objetos
// Objetos literales
// const persona1 = {
//     nombre: "Alexis",
//     edad: 65,
//     profesion: 'Programador'
// }

// const persona2 = {
//     nombre: 'Romina',
//     equipoFutbol: "San Lorenzo",
//     domicilio: {
//         calle: 'Av. siempre viva',
//         ciudad: 'Springfield'
//     }
// }

// console.log(persona1.profesion);
// console.log(persona2.equipoFutbol);
// console.log(persona2.domicilio.ciudad);
// const nuevoNombre = prompt('Ingrese nuevo nombre');
// persona2.nombre = nuevoNombre;
// console.log(persona2.nombre);

// Objetos a partir de un constructor
// function Torta(tipoMasa, relleno, cobertura) {
//     this.tipoMasa = tipoMasa;
//     this.relleno = relleno;
//     this.cobertura = cobertura;
// }

// const torta1 = new Torta('Brownie', 'Chocolate', 'Glase');
// const torta2 = new Torta('Vainilla', 'Crema pastelera', 'Frutas');

// console.log(torta1.tipoMasa);
// console.log(torta2.tipoMasa);

class Vehiculo {
    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = Number(anio);
    }

    mostrarAntiguedad() {
        console.log(`El vehículo ${this.marca} ${this.modelo} tiene ${2022 - this.anio} años.`);
    }
}

const vehiculo = new Vehiculo("Fiat", "Palio", 2015);

console.log(vehiculo.marca);
vehiculo.mostrarAntiguedad();