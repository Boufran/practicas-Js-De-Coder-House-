console.log("Practicando booklet 2");

// ACTIVIDAD NUMERO 1

/* 
Solicitar al usuario un (1) nombre.
Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. 
Caso contrario, la salida será “Yo no fui” 
*/

// let name1 = "Fran";
// let name2 = prompt("Ingresar un nombre");

// if (name1 === name2) {
//   alert("Fui yo");
// } else {
//   alert("Yo no fui");
// }

// ACTIVIDAD NUMERO 2

/* Solicitar al usuario una (1) tecla.
Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. Caso contrario, la salida será “Error”. */

// let tecla = prompt("Ingresar una tecla");

// if (tecla === "Y") {
//   alert("Correcto");
// } else if (tecla === "y") {
//   alert("Correcto");
// } else {
//   alert("Error");
// }

// ACTIVIDAD NUMERO 3

/* 
Solicitar al usuario un (1) un número.
Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
“Elegiste a Homero” si es 1.
“Elegiste a Marge” si es 2.
“Elegiste a Bart” si es 3.
“Elegiste a Lisa” si es 4.

*/

// let numero2 = Number(prompt("Ingresar un numero del 1 al 4"));

// if (numero2 === 1) {
//   alert("Elegiste a Homero");
// } else if (numero2 === 2) {
//   alert("Elegiste a Marge");
// } else if (numero2 === 3) {
//   alert("Elegiste a Bart");
// } else if (numero2 === 4) {
//   alert("Elegiste a Lisa");
// } else {
//   alert("Error");
// }

// ACTIVIDAD NUMERO 4

/* 

Solicitar al usuario un (1) número.
Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda: 
“Presupuesto bajo” si está entre 0 y 1000.
“Presupuesto medio” si está entre 1001 y 3000.
“Presupuesto alto” si es  mayor que 3000.

*/

// let presupuesto = parseFloat(prompt("Ingrese un Presupuesto"));

// if (presupuesto >= 0 && presupuesto <= 1000) {
//   alert("Presupuesto bajo");
// } else if (presupuesto >= 1001 && presupuesto <= 3000) {
//   alert("Presupuesto medio");
// } else if (presupuesto >= 3001) {
//   alert("Presupuesto alto");
// } else {
//   alert("Error");
// }

// ACTIVIDAD NUMERO 5

/* 

Solicitar al usuario cuatro (4) productos de almacén. 
Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos. 
Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.

*/

let productos1 = prompt("Ingresar un Producto de Almacen");
let productos2 = prompt("Ingresar un Producto de Almacen");
let productos3 = prompt("Ingresar un Producto de Almacen");
let productos4 = prompt("Ingresar un Producto de Almacen");

if (productos1 && productos2 && productos3 && productos4) {
  alert(productos1 + " " + productos2 + " " + productos3 + " " + productos4);
} else {
  alert("Es necesario cargar todos los productos ");
}
