let len = "ingles";
let nombre = "Fran";
let msg = "Bienvenido al Curso de JS!"

function saludoSegunIdioma(){
    if (len == "espanol") {
  console.log("Hola!");
} else if (len == "portugues") {
  console.log("Oi!");
} else {
  console.log("Hello!");
}

if (nombre != " ") {
  console.log(nombre);
} else {
  console.log("Amigo");
}
}

saludoSegunIdioma();
saludoSegunIdioma();
saludoSegunIdioma();


// lo que esta entre parentesis de la funcion es el parametro, osea lo que puede variar

function saludar(msj){
    console.log("EMPIEZA LA FUNCION");
    console.log("hola");
    console.log("hola");
    console.log(msj);
    console.log("el de arriba cambio porque es el parametro");
    console.log("FIN DE LA FUNCION");
}

saludar("Saludo de Bienvenida");
saludar("Prueba");
saludar("Prueba 2");


//  HACIENDO UNA CALCULADORA

function calcular(tipo, a, b){
    let resultado = 0;
    if (tipo == "resta")
    {resultado = a - b;}
    else if (tipo == "suma")
    {resultado = a + b;}
    else if (tipo == "multiplicacion")
    {resultado = a * b;}
    else if (tipo == "division")
    {resultado = a / b;}

    return resultado;
}

let resultadoFinal = calcular("division", 20, 10);

alert(resultadoFinal)

// DECLARAR FUNCION DE FORMA CLASICA

function sumar(a, b){
    return a + b;
}

/* DECLARAR LA MISMA FUNCION ES SINTAXIS DE FLECHA v1,
la funcion de arriba es igual a esta */

const sumar2 = (a, b) =>{
    return a + b;
};

let resultado2 = sumar2(30,10);
console.log(resultado2);