const eleccionComputadora = document.getElementById("computadora");
const eleccionJugador = document.getElementById("jugador");
const resultadoJuego = document.getElementById("resultado");
const elecciones = document.querySelectorAll("button");
let jugador;
let computadora;
let resultado;

elecciones.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    jugador = e.target.id;
    eleccionJugador.innerHTML = jugador;
    generarEleccionComputadora();
    obtenerResultado();
  })
);

function generarEleccionComputadora() {
  const numeroRandom = Math.floor(Math.random() * elecciones.length) + 1;

  if (numeroRandom === 1) {
    computadora = "piedra";
  }
  if (numeroRandom === 2) {
    computadora = "tijera";
  }
  if (numeroRandom === 3) {
    computadora = "papel";
  }
  eleccionComputadora.innerHTML = computadora;
}

function obtenerResultado() {
  if (computadora === jugador) {
    resultado = "Empate :/";
  }
  if (computadora === "piedra" && jugador === "papel") {
    resultado = "Ganaste :D";
  }
  if (computadora === "piedra" && jugador === "tijera") {
    resultado = "Perdiste :(";
  }
  if (computadora === "papel" && jugador === "tijera") {
    resultado = "Ganaste :D";
  }
  if (computadora === "papel" && jugador === "piedra") {
    resultado = "Perdiste :(";
  }
  if (computadora === "tijera" && jugador === "piedra") {
    resultado = "Ganaste :D";
  }
  if (computadora === "tijera" && jugador === "papel") {
    resultado = "Perdiste :(";
  }
  resultadoJuego.innerHTML = resultado;
}
