// ACTIVIDAD 1

/*

Declarar un clase Tienda que permita registrar:
● Nombre de la tienda.
● Dirección de la tienda.
● Propietario de la tienda.
● Rubro de la tienda.
Luego invocar al menos tres (3) objetos usando
esta clase.

*/

class Tienda {
  constructor(nombre, direccion, propietario, rubro) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.propietario = propietario;
    this.rubro = rubro;
  }
  estaAbierto(hora) {
    if ((hora >= 8 && hora <= 12) || (hora >= 15 && hora <= 19)) {
      return true;
    } else {
      return false;
    }
  }
  esPropietario(nombre) {
    return this.propietario == nombre;
  }
  transferirDinero(valor) {
    if (this.presupuesto > 0 && valor < this.presupuesto) {
      this.presupuesto -= valor;
      return valor;
    } else {
      return 0;
    }
  }
}
const tienda1 = new Tienda(
  "ABC",
  "Avenida Santa Fe 1017",
  "Clau",
  "Bicicleteria"
);
const tienda2 = new Tienda(
  "Akira",
  "Sesquicentenario 123",
  "Pepe",
  "Deportivo"
);
const tienda3 = new Tienda(
  "Beta",
  "Avenida Santa Fe 1023",
  "Viejo pelado",
  "Consecionaria"
);

console.log(tienda1);
console.log(tienda2);
console.log(tienda3);

// ACTIVIDAD 2

/*

Solicitar al usuario el registro de cinco (5) tiendas.
Emplear la clase Tienda de la actividad 1, para
instanciar los objetos en función de las entradas
capturadas. Generar una única salida compuesta
por la información de los objetos instanciados.

*/

// let ingresados = "";

// for (i = 1; i < 3; i++) {
//   tiendas = new Tienda(
//     prompt("ingrese nombre de la tienda" + i),
//     prompt("ingrese direccion de la tienda" + i),
//     prompt("ingrese propietario de la tienda" + i),
//     prompt("ingrese rubro de la tienda" + i)
//   );
//   ingresados +=
//     "Nombre: " +
//     tiendas.nombre +
//     "Direccion: " +
//     tiendas.direccion +
//     "Propietario: " +
//     tiendas.propietario +
//     "Rubro: " +
//     tiendas.rubro +
//     "\n";
// }

// console.log(ingresados);
// ACTIVIDAD 3

/*

Declarar un método para la clase Tienda con la
siguiente cabecera estaAbierto(hora). Este retorna
true si la hora enviada está entre las 08 y 12, o entre
las 15 y 19. Caso contrario, se retorna false.
Luego invocar al menos un (1) objeto usando esta
clase, y solicitar al usuario tres (3) horas. Informar por
alerta si la tienda está abierta, en función de la hora
ingresada.

*/
// const tienda4 = new Tienda(
//   "Fravega",
//   "Parana 12312",
//   "Juan",
//   "Electrodomesticos"
// );

// for (i = 0; i < 3; i++) {
//   let entrada = parseInt(prompt("ingrese un horario"));
//   if (tienda4.estaAbierto(entrada)) {
//     alert("Esta abierto a las " + entrada + " hs");
//   } else {
//     alert("No esta abierto a las " + entrada + " hs");
//   }
// }

// ACTIVIDAD 4

/*

Declarar un método para la clase Tienda con la
siguiente cabecera esPropietario(nombre). Se retorna
true si el nombre enviado corresponde al propietario
de la tienda.Caso contrario, se retorna false.
Luego, invocar al menos tres(3) objetos usando esta
clase y solicitar al usuario cinco(5) nombres. Informar
por alerta si los nombres pertenecen a algún dueño
de tienda.

*/

for (let index = 0; index < 3; index++) {
  let entrada = prompt("INGRESAR NOMBRE DE PROPITARIO");
  if (tienda1.esPropietario(entrada)) {
    alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda1.nombre);
  }
  if (tienda2.esPropietario(entrada)) {
    alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda2.nombre);
  }
  if (tienda3.esPropietario(entrada)) {
    alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda3.nombre);
  }
}

// ACTIVIDAD 5

/*

Declarar una clase Cliente que permita:
● Registrar nombre, presupuesto, si tiene tarjeta de
descuento, y número de teléfono del cliente.
● Un método transferirDinero(valor), que permita 
obtener y restar cierta cantidad del presupuesto,
siempre que este parámetro sea menor al valor
enviado, y mayor que cero.
Luego invocar al menos tres (3) objetos usando esta clase, y
solicitar al usuario cinco (5) números. Informar por alerta si
cada uno de los clientes cuenta con el presupuesto
suficiente para realizar una transferencia de igual monto al
ingresado.

*/

const cliente1 = new Cliente("Homero", 2000, true, "1234560");
const cliente2 = new Cliente("Carlos", "1000", false, "21234560");
const cliente3 = new Cliente("Barny", "50", false, "231234560");
for (let index = 0; index < 5; index++) {
  let entrada = parseFloat(prompt("INGRESAR MONTO"));
  if (cliente1.transferirDinero(entrada)) {
    alert("EL CLIENTE " + cliente1.nombre + " TE PUEDE PAGAR " + entrada);
  }
  if (cliente2.transferirDinero(entrada)) {
    alert("EL CLIENTE " + cliente2.nombre + " TE PUEDE PAGAR " + entrada);
  }
  if (cliente3.transferirDinero(entrada)) {
    alert("EL CLIENTE " + cliente3.nombre + " TE PUEDE PAGAR " + entrada);
  }
}
