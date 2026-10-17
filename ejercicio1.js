// =============================================================
// 1. DEFINIR LAS ESTRUCTURAS DE DATOS
// =============================================================
// Declara la interfaz Producto con los campos obligatorios:
// id: número; nombre: cadena; precio: número; stock: número.
// categoria: solo puede ser "tecnología", "hogar" o "alimentos".
// Recuerda: una interfaz describe los datos; no crea un producto.
// =============================================================
// 2. CREAR EL CATÁLOGO INICIAL
// =============================================================
//  Declara catalogo como un arreglo Producto[] con estos datos:
//
// id  | nombre            | precio | stock | categoria
// 101 | Laptop            | 800    | 5     | tecnología
// 102 | Teclado Mecánico  | 100    | 12    | tecnología
// 103 | Cafetera          | 60     | 0     | hogar
// 104 | Monitor 4K        | 300    | 4     | tecnología
//
// Cada producto debe ser un objeto con todos los campos de la interfaz.
const catalogo = [
    { id: 101, nombre: "Laptop", precio: 800, stock: 5, categoria: "tecnología" },
    { id: 102, nombre: "Teclado Mecánico", precio: 100, stock: 12, categoria: "tecnología" },
    { id: 103, nombre: "Cafetera", precio: 60, stock: 0, categoria: "hogar" },
    { id: 104, nombre: "Monitor 4K", precio: 300, stock: 4, categoria: "tecnología" }
];
// =============================================================
// 3. AGREGAR UN PRODUCTO — push()
// =============================================================
// Agrega al final del catálogo el siguiente producto mediante push:
// id: 105; nombre: "Café en grano"; precio: 15; stock: 20;
// categoria: "alimentos".
// Muestra el catálogo y comprueba que ahora contiene cinco productos.
// Pregunta: ¿qué devuelve push: el producto o la nueva cantidad?
// devuelve la nueva cantidad de elementos en el arreglo, no el producto agregado.
catalogo.push({
    id: 105,
    nombre: "Café en grano",
    precio: 15,
    stock: 20,
    categoria: "alimentos"
});
// =============================================================
// 4. OBTENER LOS PRODUCTOS DISPONIBLES — filter()
// =============================================================
//  Crea disponibles usando filter sobre catalogo.
// Incluye únicamente productos cuyo stock sea mayor que cero.
// Muestra el resultado y comprueba que la Cafetera queda excluida.
// El catálogo original debe conservar los cinco productos.
const disponibles = catalogo.filter(prod => prod.stock > 0);
// =============================================================
// 5. BUSCAR UN PRODUCTO — find()
// =============================================================
// Implementa buscarPorId con los siguientes requisitos:
// - Recibe id de tipo number y lista de tipo Producto[].
// - Utiliza find para buscar un producto con ese identificador.
// - Devuelve Producto | undefined, porque puede no existir.
function buscarPorId(id, lista) {
    return lista.find(item => item.id === id);
}
// Comprueba la función con el ID 101 y con el ID 999.
// Antes de consultar el nombre de un resultado, verifica que exista.
// Si no existe, muestra un mensaje; no accedas a sus propiedades.
// =============================================================
// 6. CREAR EL CARRITO DE COMPRAS
// =============================================================
//  Declara carritoCliente como ItemCarrito[] con estas compras:
// - Producto 101: una unidad.
// - Producto 102: dos unidades.
// El carrito almacena identificadores y cantidades, no productos completos.
const carritoCliente = [
    { productoId: 101, cantidad: 1 }, // Laptop
    { productoId: 102, cantidad: 2 } // Teclado Mecánico
];
// =============================================================
// 7. GENERAR EL DETALLE DEL PEDIDO — map()
// =============================================================
//  Crea detalleCompra transformando carritoCliente mediante map.
// Para cada artículo:
// - Busca su producto utilizando buscarPorId.
// - Comprueba que exista antes de consultar su nombre o su precio.
// - Genera un objeto con descripcion, cantidad y subtotal.
// - Calcula el subtotal multiplicando precio por cantidad.
// Guarda el arreglo que devuelve map; no basta con mostrar datos dentro.
// Si falta un producto, informa el problema y no confirmes el pedido.
// Puedes usar condicionales y mensajes; no necesitas lanzar excepciones.
// Para la compra de prueba, ambos identificadores existen en el catálogo.
const detalleCompra = carritoCliente.map(item => {
    const prod = buscarPorId(item.productoId, catalogo);
    if (!prod) {
        throw new Error(`Producto con ID ${item.productoId} no encontrado`);
    }
    return {
        descripcion: prod.nombre,
        cantidad: item.cantidad,
        subtotal: prod.precio * item.cantidad
    };
});
// =============================================================
// 8. CALCULAR EL TOTAL — reduce()
// =============================================================
//  Calcula totalPagar usando reduce sobre detalleCompra.
// Acumula los subtotales y utiliza cero como valor inicial.
// El total debe ser un número, no una cadena de texto.
const totalPagar = detalleCompra.reduce((acumulado, linea) => {
    return acumulado + linea.subtotal;
}, 0);
// =============================================================
// 9. ACTUALIZAR EL INVENTARIO — forEach()
// =============================================================
// Recorre carritoCliente con forEach.
// Busca cada producto y, si existe, descuenta la cantidad comprada del stock.
// Actualiza los productos que pertenecen al catálogo original.
// Realiza este paso una sola vez, después de generar el pedido válido.
// Para esta práctica, las cantidades indicadas no superan el stock disponible.
carritoCliente.forEach(item => {
    const prod = buscarPorId(item.productoId, catalogo);
    if (prod) {
        prod.stock -= item.cantidad; // Reduce el inventario existente
    }
});
// =============================================================
// 10. MOSTRAR Y COMPROBAR LOS RESULTADOS
// =============================================================
// Muestra en consola:
// - El detalle de la compra: descripción, cantidad y subtotal.
// - El total a pagar en dólares.
// - El nombre y las existencias actualizadas de todos los productos.
// Puedes usar forEach para mostrar el catálogo sin modificarlo.
//
// Con los datos indicados, comprueba:
// - Laptop: subtotal de $800; stock final de 4.
// - Teclado Mecánico: subtotal de $200; stock final de 10.
// - Total del pedido: $1000.
// - Los productos no comprados conservan sus existencias.
console.log("Resumen del pedido:", detalleCompra);
console.log(`Total a pagar: $${totalPagar}`);
console.log("\nStock actualizado:");
catalogo.forEach(prod => {
    console.log(`${prod.nombre}: ${prod.stock} disponibles`);
});
export {};
// =============================================================
// 11. EXPLICAR TUS DECISIONES
// =============================================================
// Responde brevemente en estos comentarios:
// 2. ¿Qué transforma map en este programa?
// map transforma cada elemento de carritoCliente en un objeto que contiene la descripción del producto,
//  la cantidad comprada y el subtotal correspondiente, generando así un nuevo arreglo con el detalle de la compra.
// 3. ¿Para qué se utiliza el valor inicial de reduce?
// El valor inicial de reduce (en este caso, 0) se utiliza para establecer el punto de partida del acumulador.
// 4. ¿Qué instrucción dentro de forEach cambia el inventario?
// La línea `prod.stock -= item.cantidad;` dentro de forEach actualiza el inventario.
