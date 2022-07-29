let productos = [
  { id: 1, nombre: "Asiento Playero", precio: 1790 },
  { id: 2, nombre: "Asiento Todo Terreno", precio: 1390 },
  { id: 3, nombre: "Porta Paquetes", precio: 1100 },
];

let aux = localStorage.getItem("productosEnCarro");
let productosEnCarro;

if (!aux) {
  productosEnCarro = [];
} else {
  productosEnCarro = JSON.parse(aux);
  pintarCarrito();
}

function pintarListado() {
  let aux = "";
  for (let i = 0; i < productos.length; i++) {
    aux =
      aux +
      `<div onclick="meterAlCarro({id: ${productos[i].id}, nombre: '${productos[i].nombre}', precio: ${productos[i].precio}})" style="cursor: pointer; border: 1px solid black;">
    <h3> Nombre: ${productos[i].nombre} </h3>
    <p> Precio: $ ${productos[i].precio} </p>
    <p> ID: ${productos[i].id} </p>
  </div>`;
  }
  document.getElementById("div-productos").innerHTML = aux;
}
pintarListado();

function meterAlCarro(objetosProducto) {
  productosEnCarro.push(objetosProducto);
  localStorage.setItem("productosEnCarro", JSON.stringify(productosEnCarro));
  pintarCarrito();
}

function borrarDelCarro(id) {
  productosEnCarro.splice(id, 1);
  localStorage.setItem("productosEnCarro", JSON.stringify(productosEnCarro));
  pintarCarrito();
}

function pintarCarrito() {
  let aux = "";
  for (let i = 0; i < productosEnCarro.length; i++) {
    aux =
      aux +
      `<div style="border: 1px solid green;">
    <h3> Nombre: ${productosEnCarro[i].nombre} </h3>
    <p> Precio: $ ${productosEnCarro[i].precio} </p>
    <p> ID: ${productosEnCarro[i].id} </p>
    <p onclick="borrarDelCarro(${i})" style="cursor: pointer;"> 🗑️</p>
  </div>`;
  }
  document.getElementById("div-carrito").innerHTML = aux;
}
