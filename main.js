// CONSTRUCTORES

class Producto {
  constructor(id, nombre, precio, categoria) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
  }
  mostrarProducto() {
    return (
      "id:" +
      this.id +
      " precio:" +
      this.precio +
      " " +
      " producto: " +
      this.nombre +
      " \n"
    );
  }
}

// FUNCIONES

function comprar(nombre, email, tel, carrito) {
  let cant = carrito.reduce((acc, item) => item.precio + acc, 0);
  alert("Gracias " + nombre + " por tu compra. \n Total: $" + cant);
}

// VARIABLES

let productos = [
  new Producto(1, "Asiento AKIRA playero", 1100, "asientos"),
  new Producto(2, "Portapaquetes AKIRA Todo Terreno", 900, "portapaquetes"),
  new Producto(3, "Puños PVC AKIRA", 200, "punos"),
];

let categorias = ["asientos", "portapaquetes", "punos"];

let carrito = [];
let categoria = "";

// MENU

while (categoria != "salir" && categoria != null) {
  let aux = categorias.join(", ");
  categoria = prompt(
    'Ingrese una categoria para comprar o ingrese "salir": \n(' + aux + ")"
  );

  if ((categoria != "salir" && categoria != null) || categorias == categoria) {
    let productosFiltradoPorCategoria = productos.filter(
      (item) => item.categoria == categoria
    );

    let cartel = "";
    for (let i = 0; i < productosFiltradoPorCategoria.length; i++) {
      cartel += productosFiltradoPorCategoria[i].mostrarProducto();
    }
    let idSeleccionado = parseInt(
      prompt("Seleccione id del producto que quiere comprar: \n\n" + cartel)
    );

    let productoParaCarro = productosFiltradoPorCategoria.find(
      (item) => item.id == idSeleccionado
    );

    if (productoParaCarro) {
      carrito.push(productoParaCarro);
    }
  }
}

// COMPRA

if (carrito.length > 0) {
  alert("Ingrese sus datos para terminar su compra");
  let nombre = prompt("ingrese su nombre");
  let email = prompt("ingrese su email");
  let tel = prompt("ingrese su tel");
  comprar(nombre, email, tel, carrito);
}
