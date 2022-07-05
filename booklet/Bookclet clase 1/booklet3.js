// ACTIVIDAD 1

/* Solicitar al usuario un (1) un número y un (1) texto. 
Efectuar una salida por alerta con el mensaje ingresado por cada repetición, hasta alcanzar el valor señalado por el usuario. */

let numero = prompt("Ingrese un numero");
let texto = prompt("Ingresar un texto");

for (let i = 0; i < numero; i++) {
  alert(texto);
  if (i == numero) {
    break;
  }
}

// ACTIVIDAD 2

/* Solicitar al usuario un (1) un número. Emplear este valor para determinar la cantidad de repeticiones, 
    y efectuar una salida por alerta con el mensaje “lado” en cada repetición. 
    Pero si se alcanza un número de iteraciones mayor que cuatro (4), cancelar el ciclo. */

//  El for es, el primer valor desde cuando  {Seria desde 0 (let i = 0)} , el segundo es hasta cuando {(i > 10 ) hasta menor de 10} y tercero es la actualizacion ( osea de 1 en 1 de 2 en 2 etc.){( i++ seria de 1 en 1)}

let numero2 = prompt("Ingresar un valor");
for (let i = 0; i < numero2; i++) {
  if (i > 4) {
    break;
  }
  alert("lado");
}

// ACTIVIDAD 3

/*
Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
Luego realizar un única salida por alerta, con el listado de alumnos registrados.
*/

let alumnos = " ";
for (let i = 0; i < 10; i++) {
  alumnos += prompt("Ingresar nombre") + "\n";
}
alert(alumnos);

// \n es un salto de linea . Sino, aparecerian todos los nombres uno al lado del otro.

// ACTIVIDAD NUMERO 4

/*

Solicitar al usuario la carga de nombres de forma consecutiva,  hasta que se ingrese “Voldemort”.
Luego realizar un única salida por alerta, con todos los nombres ingresados.

*/

let harryPotter = prompt("Ingresar personajes de Harry Potter");
let personajes = " ";
while (harryPotter != "Voldemort") {
  personajes += harryPotter + "\n";
  harryPotter = prompt("Ingresar personajes de Harry Potter");
}
alert(personajes);

// ACTIVIDAD NUMERO 5

/* 
Solicitar al usuario un (1) número de forma consecutiva, hasta que se ingrese “ESC”. 
Generar una única salida compuesta por los siguientes productos, según el valor ingresado en cada ciclo:
“Tomate” si es 1.
“Papa” si es 2.
“Carne” si es 3.
“Pollo” si es 4.

*/

let actv5 = prompt("Seleccionar un numero del 1 al 4 , ESC para salir");
while (actv5 != "ESC") {
  switch (actv5) {
    case "1":
      alert("Tomate");
      break;
    case "2":
      alert("Papa");
      break;
    case "3":
      alert("Carne");
      break;
    case "4":
      alert("Pollo");
      break;
    default:
      alert("Error");
      break;
  }
  actv5 = prompt("Seleccionar un numero del 1 al 4 , ESC para salir");
}
