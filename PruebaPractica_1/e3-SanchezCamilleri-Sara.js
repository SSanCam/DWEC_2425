let listaCompra = ["fresa", "manzana", "chicharrones"];

function agregarOEliminarElemento(listaCompra, producto) {

    console.log(listaCompra);

    for (item of listaCompra){

        if (!listaCompra.includes(producto)){
            listaCompra.push(item);
            console.log(listaCompra);
        } else {
            listaCompra.splice(0, producto, listaCompra);
            console.log(listaCompra);
        }
    }
    
}

console.log(agregarOEliminarElemento(listaCompra, "cachopo"));
console.log(agregarOEliminarElemento(listaCompra, "manzana"));

