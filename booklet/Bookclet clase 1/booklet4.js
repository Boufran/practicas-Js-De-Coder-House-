// ACTIVIDAD 1

/*

Codificar tres funciones:
Una función entrada(), la cual solicite un valor al usuario y lo retorne.
Una función procesamiento(valor), donde se transforme la entrada.
Una función salida(valor), la cual mostrará el resultado por alerta.
Luego, invocar las tres funciones.

*/

function entrada() {
  return prompt("INGRESAR DATO");
}

function procesamiento(valor) {
  return "LA ENTRADA ES " + valor;
}

function salida(valor) {
  alert(valor);
}

//SUMAR LA OTRA FORMA DE LLAMADA
salida(procesamiento(entrada()));

function entrada() {
  let valor = prompt("Ingrese un Valor!");
  return;
}

function valor() {
  return "La entrada es " + valor;
}

function salida(valor) {
  alert(valor);
}

salida(valor(entrada()));
// ACTIVIDAD 2

/*

Codificar una función que reciba un número decimal por parámetro, y lo retorne redondeado al entero más cercano.
Para ello, puede emplearse  Math.round.
Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un número al usuario.

*/

// ACTIVIDAD 3

/*

Codificar una función con la siguiente cabecera: impuesto(precio, porcentaje). 
En ella, se retorna un valor numérico compuesto por el precio recibido, más la suma del porcentaje ingresado.
Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un precio y porcentaje al usuario.


*/

// ACTIVIDAD 4

/*

Codificar dos funciones:
Una función cotizarDolar(pesos), la cual recibe un valor monetario en pesos argentinos, y lo retorna en su equivalente en dólares.
Una función cotizarPesos(dolar), que recibe un valor monetario en dólares, y lo retorna en su equivalente en pesos argentinos.
Luego invocar las funciones solicitando  al usuario el valor y el tipo de cotización a realizar.


*/

// ACTIVIDAD 5

/*

Codificar una función con la siguiente cabecera: validacion(cadena). En ella, se retorna un valor booleano, el cual es true si el parámetro no es un cadena vacía. 
Caso contrario, se retorna false. Luego invocar la función de forma iterativa, hasta que el usuario tipee “ESC”, solicitando en cada ciclo una cadena a validar.

*/
