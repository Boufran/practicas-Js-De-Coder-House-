// Variables globales
let stock = 10;
let opcion;

// Funciones
const registrarVenta = (cant) => {
    if (stock > cant) {
        stock = stock - cant;
        console.log(`El nuevo stock es de ${stock} unidades.`);
    } else {
        console.log(`No hay stock suficiente, quedan ${stock} unidades`);
    }
}

const reponer = (cant) => {
    stock = stock + cant;
    console.log(`El nuevo stock es de ${stock} unidades`);
}

// MENU
do {
    opcion = Number(prompt('Ingrese una opción:\n\n1 - Registrar una venta\n2 - Reponer\n3 - Salir'));
    let cant;

    switch (opcion) {
        case 1:
            cant = Number(prompt('Ingrese la cantidad de unidades que se vendieron'));
            registrarVenta(cant);
            break;
        case 2:
            cant = Number(prompt('Ingrese la cantidad de unidades que ingresaron'));
            reponer(cant);
            break;
        case 3:
            alert('Hasta luego');
            break;
        default:
            alert('Opción incorrecta');
            break;
    }

} while(opcion !== 3);