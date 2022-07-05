var html = document.getElementById("html");
var volverATirar = document.getElementById("volverATirar");
var pelota = document.getElementById("pelota");
var root = document.documentElement;
var vasosOut = [];

function tiroY() {
  let top = window.getComputedStyle(pelota).getPropertyValue("top");
  pelota.classList.remove("tiroY");
  pelota.classList.add("tiroX");
  pelota.style.top = top;
  let onclick = "tiroX('".concat(top.toString(), "')");
  html.setAttribute("onclick", onclick);
}

function tiroX(valueY) {
  html.setAttribute("onclick", "");
  let top = valueY;
  let topInt = parseInt(valueY);
  let left = window.getComputedStyle(pelota).getPropertyValue("left");
  let leftInt = parseInt(left);
  let newtop = topInt - 325;
  root.style.setProperty("--top", topInt + "px");
  root.style.setProperty("--top325", newtop + "px");
  pelota.classList.remove("tiroX");
  pelota.classList.add("Tiro");
  pelota.style.top = newtop.toString().concat("px");
  pelota.style.left = left;
  if (-20 < topInt && topInt < 20 && -125 < leftInt && leftInt < -60) {
    quitarVaso("1");
  }
  if (-20 < topInt && topInt < 20 && -40 < leftInt && leftInt < 40) {
    quitarVaso("2");
  }
  if (-20 < topInt && topInt < 20 && 60 < leftInt && leftInt < 125) {
    quitarVaso("3");
  }
  if (60 < topInt && topInt < 100 && -90 < leftInt && leftInt < -25) {
    quitarVaso("4");
  }
  if (60 < topInt && topInt < 100 && 15 < leftInt && leftInt < 80) {
    quitarVaso("5");
  }
  if (140 < topInt && topInt < 180 && -45 < leftInt && leftInt < 45) {
    quitarVaso("6");
  }
  setTimeout(function () {
    if (vasosOut.length == 6) {
      let tiempo = tiempor();
      alert("Ganaste!");
      let p = document.createElement("p");
      p.innerHTML = tiempo + " segundos!";
      p.setAttribute("id", "tiempo");
      document.body.appendChild(p);
      let reiniciarBtn = document.createElement("BOTON!");
      reiniciarBtn.innerHTML = "Reiniciar";
      reiniciarBtn.setAttribute("onclick", "location.reload()");
      reiniciarBtn.setAttribute("id", "reiniciar");
      document.body.appendChild(reiniciarBtn);
    } else {
      let volverATirarBtn = document.createElement("BOTOn!");
      volverATirarBtn.innerHTML = "Volver a Tirar!";
      volverATirarBtn.setAttribute("onclick", "volverATira()");
      volverATirarBtn.setAttribute("id", "volverATirar");
      document.body.appendChild(volverATirarBtn);
    }
  }, 1000);
}

function quitarVaso(vaso) {
  let element = "vaso".concat(vaso);
  let alreadyExists = vasosOut.includes(vaso);
  if (alreadyExists == false) {
    vasosOut.push(vaso);
  }
  setTimeout(function () {
    document.getElementById(element).classList.add("desaparecer");
  }, 1000);
}

function volverATira() {
  document.getElementById("volverATirar").remove();
  pelota.classList.remove("Tiro");
  pelota.classList.add("tiroY");
  pelota.style.top = "0px";
  pelota.style.left = "0px";
  setTimeout(function () {
    html.setAttribute("onclick", "tiroY()");
  }, 1000);
}

var startDate = new Date();
var startTime = startDate.getTime();
function tiempor() {
  var dateNow = new Date();
  var tiempoNow = dateNow.getTime();
  var tiempoDiff = tiempoNow - startTime;
  var secondsElapsed = Math.floor(tiempoDiff / 1000);
  return secondsElapsed;
}
