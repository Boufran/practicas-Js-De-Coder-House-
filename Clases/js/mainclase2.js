// Probando si esta bien vinculado el script

console.log("Probando la consola!")

/* El flujo del script es de arriba para abajo, primero la linea 1 la 2 la 3 etc. Pero con la funcion if hacemos que cambie el flujo.
El if es un condicional, como la funcion si de excel.El Si pasa Esto hacemos esto si no tal otra */

// Probando IF

// Esto se ejecuta porq 1 es igual a 1.

if(1 == 1){
    console.log("Si aparece esto es porque 1 igual a 1")
    console.log("Idem reglon de arriba")
}

// Esto no se ejecuta porque claramente 7 no es iugal a 2.

if(7 == 2){
    console.log("Esto no deberia verse en la consola")
}

// Un valor BOOLEANO es que es una cosa o la otra. Osea o true or false. Dos valores unicamente. Esto o Esto. Punto Final.


// Un string es cuando es una cadena de valores y esta con comillas! Puede contener numeros tambien! Numero sin comillas valen el valor numerico. Con comillas se convierten en Strings!
let nombre = "Fran";
let myBooleano = true;
let myBooleano2 = false;

// Practicando por mi cuenta, osea el IF se ejecuta si o si si el valor es TRUE, al menos que vos indiques que el valor es falso

let modoObscuro = false;

if(modoObscuro == false){
    console.log("Modo Obscuro en falso pa!")
}

if(myBooleano){
    console.log("Hola que Tal?")
}

// Ojo Con poner un solo = en el IF, porque te cambia el valor de la variable, en este caso X vale 5 y por el if con un solo gion me lo cambio a 4!

let x = 5;

if( x = 4){
    console.log("X vale 4, pero en realidad vale 5, cambio su valor porque pusimos un solo guion en el IF")
}

// Proban el NO IGUAL osea !=

if(x != 10){
    console.log("Probando el NO IGUAL !=")
}

// El ELSE es como un sino

if( x == 5){
    console.log("Mostrar este cartel si X vale 5")
} else{
    console.log("Mostrar este cartel si X no vale 5!")
}
