// Clase Producto
class Producto {
    constructor(nombre, categoria, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.cantidadStock = 0; // Comienza con 0 en stock
    }

    // Método para actualizar el stock del producto
    actualizarStock(cantidad) {
        this.cantidadStock += cantidad;
        if (this.cantidadStock < 0) {
            this.cantidadStock = 0; // No se puede tener stock negativo
        }
        console.log("El stock de ${this.nombre} es ahora de ${this.cantidadStock} unidades.");
    }
}

// Clase Inventario
class Inventario {
    constructor() {
        this.productos = [];
    }

    // Método para agregar un nuevo producto al inventario
    agregarProducto(producto) {
        this.productos.push(producto);
        console.log("${producto.nombre} ha sido agregado al inventario.");
    }

    // Método para eliminar un producto del inventario por su nombre
    eliminarProducto(nombre) {
        this.productos = this.productos.filter(producto => producto.nombre !== nombre);
        console.log("${nombre} ha sido eliminado del inventario.");
    }

    // Método para buscar un producto por su nombre y mostrar su información
    buscarProducto(nombre) {
        const producto = this.productos.find(producto => producto.nombre === nombre);
        if (producto) {
            console.log("Producto encontrado: ${producto.nombre}, Categoría: ${producto.categoria}, Precio: ${producto.precio}, Stock: ${producto.cantidadStock}");
        } else {
            console.log("El producto ${nombre} no está en el inventario.");
        }
    }
}

// Pruebas del sistema de gestión de inventario
let inventario = new Inventario();
let pocion = new Producto("Poción de Vida", "Poción", 50);
let varita = new Producto("Varita Mágica", "Varita", 120);

inventario.agregarProducto(pocion);
inventario.agregarProducto(varita);

pocion.actualizarStock(10); // Agregar 10 unidades de poción
varita.actualizarStock(5);  // Agregar 5 unidades de varita

inventario.buscarProducto("Poción de Vida"); // Buscar el producto poción
inventario.eliminarProducto("Varita Mágica"); // Eliminar varita del inventario
inventario.buscarProducto("Varita Mágica"); // Buscar varita después de eliminarla
