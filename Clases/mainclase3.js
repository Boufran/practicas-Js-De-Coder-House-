// Probando la funcion for

// Se va a repetir de 0 a 9, osea 10 veces. i++ es de 1 en 1. 
//  El for es, el primer valor desde cuando  {Seria desde 0 (let i = 0)} , el segundo es hasta cuando {(i > 10 ) hasta menor de 10} y tercero es la actualizacion ( osea de 1 en 1 de 2 en 2 etc.){( i++ seria de 1 en 1)}

/* i = i + 1

ES LO MISMO QUE:

i++

*/

for(let i = 0; i < 10 ; i++){
    console.log(i);
}

//  Ejercicio para hacer las tablas, por ejemplo la del 3

let table = 3 ;
let table3;

for(let i = 1; i < 10 ; i++){
    table3 = table * i;
    console.log(table + " x " + i + " es igual a " + table3);
}

// Existe la funcion BREAK que es para cortar el for, vamos a usar de ejemplo la tabla

let table5 = 5 ;
let tablee5;

for(let i = 1; i < 10 ; i++){
    tablee5 = table5 * i;
    console.log(table5 + " x " + i + " es igual a " + tablee5);
    if(i == 5) {
        break;
    }
}


// Existe la funcion CONTINUE que es para saltear una parte del for, vamos a usar de ejemplo otra tabla.

for (let i = 1; i <= 10; i++) {
    //Si la variable i es 5, no se interpreta la repetición
    if(i == 5){
        continue;
    }
    alert(i);
}

