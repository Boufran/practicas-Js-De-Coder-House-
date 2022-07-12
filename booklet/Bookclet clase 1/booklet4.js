// ACTIVIDAD 1

/*

Codificar tres funciones:
Una función entrada(), la cual solicite un valor al usuario y lo retorne.
Una función procesamiento(valor), donde se transforme la entrada.
Una función salida(valor), la cual mostrará el resultado por alerta.
Luego, invocar las tres funciones.

*/

// function entrada() {
//   return prompt("INGRESAR DATO");
// }

// function procesamiento(valor) {
//   return "LA ENTRADA ES " + valor;
// }

// function salida(valor) {
//   alert(valor);
// }

// //SUMAR LA OTRA FORMA DE LLAMADA
// salida(procesamiento(entrada()));

// function entrada() {
//   return prompt("Ingrese un Valor!");
// }

// function procesamiento(valor) {
//   return "La entrada es " + valor;
// }

// function salida(valor) {
//   alert(valor);
// }

// salida(procesamiento(entrada()));
// // ACTIVIDAD 2

//

/*

Codificar una función que reciba un número decimal por parámetro, y lo retorne redondeado al entero más cercano.
Para ello, puede emplearse  Math.round.
Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un número al usuario.

*/

// function redondeo(valor) {
//   return Math.round(valor);
// }

// for (let i = 0; i < 5; i++) {
//   let entrada = prompt("INGRESAR NUMERO");
//   alert(redondeo(entrada));
// }

// ACTIVIDAD 3

/*

Codificar una función con la siguiente cabecera: impuesto(precio, porcentaje). 
En ella, se retorna un valor numérico compuesto por el precio recibido, más la suma del porcentaje ingresado.
Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un precio y porcentaje al usuario.


*/

// function impuesto(precio, porcentaje) {
//   return precio + (precio * porcentaje) / 100;
// }

// for (i = 0; i < 2; i++) {
//   let resultado = impuesto(
//     Number(prompt("ingrese un precio")),
//     Number(prompt("ingrse un porcentaje"))
//   );
//   console.log(resultado);
// }

// function impuesto(precio, porcentaje) {
//   return precio + (precio * porcentaje) / 100;
// }

// for (let index = 0; index < 2; index++) {
//   let resultado = impuesto(
//     parseFloat(prompt("INGRESAR PRECIO")),
//     parseFloat(prompt("INGRESAR %"))
//   );
//   alert(resultado);
// }

// ACTIVIDAD 4

/*

Codificar dos funciones:
Una función cotizarDolar(pesos), la cual recibe un valor monetario en pesos argentinos, y lo retorna en su equivalente en dólares.
Una función cotizarPesos(dolar), que recibe un valor monetario en dólares, y lo retorna en su equivalente en pesos argentinos.
Luego invocar las funciones solicitando  al usuario el valor y el tipo de cotización a realizar.


*/

// function compraDolar(pesos, dolar) {
//   return pesos / dolar;
// }

// function venderDolar(dolar, pesos) {
//   return pesos * dolar;
// }

// console.log(
//   "USTED RECIBIRA u$D " +
//     compraDolar(
//       prompt("Ingrese Cantidad de pesos"),
//       prompt("ingresar valor dolar")
//     )
// );

// console.log(
//   "USTED RECIBIRA $" +
//     venderDolar(
//       parseFloat(prompt("Ingrese valor Dolar!")),
//       parseFloat(prompt("Ingrese cantida de Dolares a vender"))
//     )
// );

const COTIZACION_DOLAR = 250;
const cotizarDolar = (pesos) => pesos / COTIZACION_DOLAR;
const cotizarPesos = (dolar) => dolar * COTIZACION_DOLAR;
let seleccion = prompt(
  "SELECCIONAR COTIZACION \n 1 - DOLARES A PESOS \n 2 - PESOS A DOLAR "
);
let valor = prompt("VALOR");
switch (seleccion) {
  case "1":
    alert(cotizarPesos(valor));
    break;
  case "2":
    alert(cotizarDolar(valor));
    break;
  default:
    break;
}

// ACTIVIDAD 5

/*

Codificar una función con la siguiente cabecera: validacion(cadena). En ella, se retorna un valor booleano, el cual es true si el parámetro no es un cadena vacía. 
Caso contrario, se retorna false. Luego invocar la función de forma iterativa, hasta que el usuario tipee “ESC”, solicitando en cada ciclo una cadena a validar.

*/

function validacion(cadena) {
  return cadena != "";
}

let entrada = prompt("INGRESAR CADENA");
while (entrada != "ESC") {
  alert(validacion(entrada));
  entrada = prompt("INGRESAR CADENA");
}
