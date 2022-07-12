// ACTIVIDAD 1
let nombre = "Homero";
let apellido = "Simpson";
let edad = "40";

console.log(nombre);
console.log(apellido);
console.log(edad);

// ACTIVIDAD 2

const city1 = "Olivos";
const city2 = "Martinez";
const city3 = "Pilar";
const city4 = "Beccar";
const city5 = "Florida";

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
console.log(city5);

// ACTIVIDAD 3

let persona = "BART SIMPSON";
let domicilio = "742 EVERGREEN";
let pais = "USA";
let nacimiento = "02-11-70";
const codigo = "B47U89RE243";

let carnet =
  "CODIGO:" +
  " " +
  codigo +
  " " +
  "NOMBRE:" +
  " " +
  persona +
  " " +
  "DOMICILIO:" +
  " " +
  domicilio +
  " " +
  "NACIMIENTO:" +
  " " +
  nacimiento;

console.log(carnet);

// ACTIVIDAD 4

let miembro1 = prompt("Ingresar 1 miembro familiar");
let miembro2 = prompt("Ingresar 1 miembro familiar");
let miembro3 = prompt("Ingresar 1 miembro familiar");
let miembro4 = prompt("Ingresar 1 miembro familiar");
let miembro5 = prompt("Ingresar 1 miembro familiar");

let familia =
  miembro1 + " " + miembro2 + " " + miembro3 + " " + miembro4 + " " + miembro5;

console.log(familia);

// ACTIVIDAD 5

let precio = parseFloat(prompt("INGRESAR PRECIO"));
let descuento20 = precio - precio * 0.2;
let descuento30 = precio - precio * 0.3;
console.log(descuento20);
console.log(descuento30);
