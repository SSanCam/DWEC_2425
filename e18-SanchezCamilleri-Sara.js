// Función para calcular el precio final después de aplicar los descuentos
function calcularPrecioFinal(precioBase, descuentos) {
    let precioFinal = precioBase;

    // Validar que el precio base sea un número positivo
    if (precioBase <= 0 || isNaN(precioBase)) {
        console.log("Error: El precio base debe ser un número positivo.");
        return null;
    }

    // Validar que los descuentos sean porcentajes válidos
    for (let descuento of descuentos) {
        if (descuento < 0 || descuento > 100 || isNaN(descuento)) {
            console.log(`Error: El descuento ${descuento} no es válido.`);
            return null;
        }
        // Aplicar el descuento
        precioFinal -= precioFinal * (descuento / 100);
    }

    return precioFinal;
}

// Función para mostrar el precio final con un mensaje amigable
function mostrarPrecioFinal(precioBase, descuentos) {
    let precioFinal = calcularPrecioFinal(precioBase, descuentos);
    if (precioFinal !== null) {
        console.log(`El precio final después de aplicar los descuentos es: ${precioFinal.toFixed(2)}`);
    }
}

// Prueba de la función calcularPrecioFinal
let precioBase = 100;
let descuentos = [10, 20]; // 10% y luego 20% de descuento

mostrarPrecioFinal(precioBase, descuentos); // Muestra el precio final con los descuentos aplicados
