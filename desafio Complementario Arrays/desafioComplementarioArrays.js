// VARIABLES GLOBALES

const names = [
  "Hoyo en unoo!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "A CASAA!",
];

// FUNCIONES
function golfScore(par, golpes) {
  if (golpes == 1) {
    alert(names[0]);
  } else if (golpes <= par - 2) {
    alert(names[1]);
  } else if (golpes === par - 1) {
    alert(names[2]);
  } else if (golpes === par) {
    alert(names[3]);
  } else if (golpes === par + 1) {
    alert(names[4]);
  } else if (golpes === par + 2) {
    alert(names[5]);
  } else {
    alert(names[6]);
  }
}

// MENU
golfScore(
  Number(prompt("Ingrese par del hoyo!")),
  Number(prompt("Ingrese cantidad de golpes"))
);
