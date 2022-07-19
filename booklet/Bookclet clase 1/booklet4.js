// ACTIVIDAD 1

/*

Codificar tres funciones:
Una función entrada(), la cual solicite un valor al usuario y lo retorne.
Una función procesamiento(valor), donde se transforme la entrada.
Una función salida(valor), la cual mostrará el resultado por alerta.
Luego, invocar las tres funciones.

*/

// function entrada() {
//   x = parseFloat(prompt("Ingrese un valor"));
//   return x;
// }
// function procesamiento(valor) {
//   return "Usted ingreso " + valor;
// }
// function salida(valor) {
//   alert(valor);
// }

// salida(procesamiento(entrada()));

// ACTIVIDAD 2

//

/*

Codificar una función que reciba un número decimal por parámetro, y lo retorne redondeado al entero más cercano.
Para ello, puede emplearse  Math.round.
Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un número al usuario.

*/

// function redondeo(valor) {
//   return Math.round(valor);
// }

// for (i = 0; i < 5; i++) {
//   x = redondeo(prompt("Ingrese un numero"));
//   console.log(x);
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

// for (i = 0; i < 5; i++) {
//   x = impuesto(
//     parseFloat(prompt("ingrese un precio")),
//     parseFloat(prompt("ingrese un porcentaje %"))
//   );
//   console.log(x);
// }

// ACTIVIDAD 4

/*

Codificar dos funciones:
Una función cotizarDolar(pesos), la cual recibe un valor monetario en pesos argentinos, y lo retorna en su equivalente en dólares.
Una función cotizarPesos(dolar), que recibe un valor monetario en dólares, y lo retorna en su equivalente en pesos argentinos.
Luego invocar las funciones solicitando  al usuario el valor y el tipo de cotización a realizar.


*/
// const valordolar = 250;

// function cotizarDolar(pesos) {
//   return pesos * valordolar;
// }

// let y;
// x = cotizarDolar(
//   (y = prompt("ingrese Cantidad de dolares que quiere comprar"))
// );
// console.log("Usted va a vender $ " + x + " y recibira " + y + " U$D");

// function cotizarPesos(pesos) {
//   return valordolar * pesos;
// }

// let b;

// z = cotizarPesos(
//   (b = prompt("Ingrese cantidad de dolares que quiere comprar"))
// );

// console.log("Usted debe abonar $ " + z + " y recibira U$D " + b);
// // ACTIVIDAD 5

/*

Codificar una función con la siguiente cabecera: validacion(cadena). En ella, se retorna un valor booleano, el cual es true si el parámetro no es un cadena vacía. 
Caso contrario, se retorna false. Luego invocar la función de forma iterativa, hasta que el usuario tipee “ESC”, solicitando en cada ciclo una cadena a validar.

*/

// function validacion(cadena) {
//   return cadena != "";
// }

// let entrada = prompt("Ingrese un texto");

// while (entrada != "ESC") {
//   alert(validacion(entrada));
//   entrada = prompt("Ingrese un texto");
// }

function validacion(cadena) {
  return cadena != "";
}

let entrada = prompt("INGRESAR CADENA");
while (entrada != "ESC") {
  alert(validacion(entrada));
  entrada = prompt("INGRESAR CADENA");
}
