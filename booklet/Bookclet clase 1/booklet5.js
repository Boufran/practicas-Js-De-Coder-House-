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
  esPropietario(ingresarPropietario) {
    return this.propietario == ingresarPropietario;
  }
}
const tienda1 = new Tienda("Kwik-E-Mart ", "Park 123", "Apu", "Almacen");
const tienda2 = new Tienda(
  "Edna's Edibles ",
  "PEREZ 323",
  "Edna Krabappel",
  "Panaderia"
);
const tienda3 = new Tienda(
  "Springfield Mall ",
  "Hall 231",
  "Mr. Burns",
  "Shopping"
);

// for (i = 0; i < 3; i++) {
//   let ingresarHorario = parseInt(prompt("Ingrese un horario"));
//   if (tienda1.estaAbierto(ingresarHorario)) {
//     alert(tienda1.nombre + " esta abierto a las " + ingresarHorario + " HS.");
//   } else {
//     alert(
//       tienda1.nombre + " no esta abierto a las " + ingresarHorario + " HS."
//     );
//   }
// }

console.log(tienda1, tienda2, tienda3);

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

  esPropietario(ingresarPropietario) {
    return this.propietario == ingresarPropietario ;
  }

*/

for (i = 0; i < 3; i++) {
  let ingresarPropietario = prompt("Ingrese nombre de propietario");
  if (tienda1.esPropietario(ingresarPropietario)) {
    alert(tienda1.propietario + " es dueño de " + tienda1.nombre);
  } else if (tienda2.esPropietario(ingresarPropietario)) {
    alert(tienda2.propietario + " es dueño de " + tienda2.nombre);
  } else if (tienda3.esPropietario(ingresarPropietario)) {
    alert(tienda3.propietario + " es dueño de " + tienda3.nombre);
  }
}

// ACTIVIDAD 2

/*

Solicitar al usuario el registro de cinco (5) tiendas.
Emplear la clase Tienda de la actividad 1, para
instanciar los objetos en función de las entradas
capturadas. Generar una única salida compuesta
por la información de los objetos instanciados.

*/

// let registroTiendaNueva = "";

// for (i = 1; i < 3; i++) {
//   let tienda = new Tienda(
//     prompt("Ingrese nombre de la tienda " + i),
//     prompt("Ingrese direccion de la tienda " + i),
//     prompt("Ingrese propietario de la tienda " + i),
//     prompt("Ingrese rubro de la tienda " + i)
//   );
//   registroTiendaNueva +=
//     "Nombre de la tienda " +
//     i +
//     " : " +
//     tienda.nombre +
//     " Direccion: " +
//     tienda.direccion +
//     " Propietario: " +
//     tienda.propietario +
//     " Rubro: " +
//     tienda.rubro +
//     "\n ";
// }

// console.log(registroTiendaNueva);

// const tienda4 = new Tienda(
//   "Edna's Edibles ",
//   "PEREZ 323",
//   "Edna Krabappel",
//   "Panaderia"
// );

// tienda4.esPropietario(prompt("ingrese nombre del propietario"));

// for (let index = 0; index < 5; index++) {
//   let entrada = prompt("INGRESAR NOMBRE DE PROPITARIO");
//   if (tienda1.esPropietario(entrada)) {
//     alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda1.nombre);
//   }
//   if (tienda2.esPropietario(entrada)) {
//     alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda2.nombre);
//   }
//   if (tienda3.esPropietario(entrada)) {
//     alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda3.nombre);
//   }
// }

// class Tienda {
//   constructor(nombre, direccion, propietario, rubro) {
//     this.nombre = nombre;
//     this.direccion = direccion;
//     this.propietario = propietario;
//     this.rubro = rubro;
//   }
//   esPropietario(nombre) {
//     return this.propietario == nombre;
//   }
// }
// const tienda8 = new Tienda("Kwik-E-Mart", "Park 123", "Apu", "Almacen");
// const tienda9 = new Tienda(
//   "Edna's Edibles",
//   "PEREZ 323",
//   "Edna Krabappel",
//   "Panaderia"
// );
// const tienda10 = new Tienda(
//   "Springfield Mall",
//   "Hall 231",
//   "Mr. Burns",
//   "Shopping"
// );
// for (let index = 0; index < 5; index++) {
//   let entrada = prompt("INGRESAR NOMBRE DE PROPITARIO");
//   if (tienda1.esPropietario(entrada)) {
//     alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda1.nombre);
//   }
//   if (tienda2.esPropietario(entrada)) {
//     alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda2.nombre);
//   }
//   if (tienda3.esPropietario(entrada)) {
//     alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda3.nombre);
//   }
// }

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

// class Cliente {
//   constructor(nombre, presupuesto, tarjeta, telefono) {
//     this.nombre = nombre;
//     this.presupuesto = parseFloat(presupuesto);
//     this.tarjeta = tarjeta;
//     this.telefono = telefono;
//   }
//   transferirDinero(valor) {
//     if (this.presupuesto > 0 && valor < this.presupuesto) {
//       this.presupuesto -= valor;
//       return valor;
//     } else {
//       return 0;
//     }
//   }
// }
// const cliente1 = new Cliente("Homero", 2000, true, "1234560");
// const cliente2 = new Cliente("Carlos", "1000", false, "21234560");
// const cliente3 = new Cliente("Barny", "50", false, "231234560");
// for (let index = 0; index < 5; index++) {
//   let entrada = parseFloat(prompt("INGRESAR MONTO"));
//   if (cliente1.transferirDinero(entrada)) {
//     alert("EL CLIENTE " + cliente1.nombre + " TE PUEDE PAGAR " + entrada);
//   }
//   if (cliente2.transferirDinero(entrada)) {
//     alert("EL CLIENTE " + cliente2.nombre + " TE PUEDE PAGAR " + entrada);
//   }
//   if (cliente3.transferirDinero(entrada)) {
//     alert("EL CLIENTE " + cliente3.nombre + " TE PUEDE PAGAR " + entrada);
//   }
// }
