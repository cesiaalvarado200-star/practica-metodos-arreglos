// =============================================================
// 1. DEFINIR LAS ESTRUCTURAS DE DATOS
// =============================================================
// Declara la interfaz Taller con los campos:
// id, nombre, costo y cuposDisponibles.
// Declara Inscripcion con tallerId y cantidadParticipantes.
// =============================================================
// 2. CREAR EL CATÁLOGO INICIAL
// =============================================================
// Crea cuatro talleres, incluyendo uno sin cupos disponibles.
const catalogoTalleres = [
    { id: 101, nombre: "Programación", costo: 25, cuposDisponibles: 10 },
    { id: 102, nombre: "Diseño Web", costo: 30, cuposDisponibles: 8 },
    { id: 103, nombre: "Robótica", costo: 40, cuposDisponibles: 0 },
    { id: 104, nombre: "Ciberseguridad", costo: 35, cuposDisponibles: 6 }
];
// =============================================================
// 3. AGREGAR UN TALLER — push()
// =============================================================
// Agrega un nuevo taller al final del catálogo.
// push() modifica el arreglo original.
catalogoTalleres.push({
    id: 105,
    nombre: "Bases de Datos",
    costo: 20,
    cuposDisponibles: 12
});
console.log("Catálogo de talleres:", catalogoTalleres);
// =============================================================
// 4. FILTRAR TALLERES DISPONIBLES — filter()
// =============================================================
// Obtiene únicamente los talleres que tienen cupos mayores que cero.
// filter() devuelve un nuevo arreglo sin modificar el catálogo.
const talleresDisponibles = catalogoTalleres.filter(taller => taller.cuposDisponibles > 0);
console.log("Talleres disponibles:", talleresDisponibles);
// =============================================================
// 5. BUSCAR UN TALLER POR ID — find()
// =============================================================
// La función recibe un identificador y busca el taller correspondiente.
// Devuelve un Taller o undefined si no existe.
function buscarTaller(id) {
    return catalogoTalleres.find(taller => taller.id === id);
}
// Comprueba si el taller existe antes de mostrar sus datos.
const tallerEncontrado = buscarTaller(101);
if (tallerEncontrado) {
    console.log("Taller encontrado:", tallerEncontrado.nombre);
}
else {
    console.log("El taller no existe.");
}
// También se prueba con un identificador inexistente.
const tallerInexistente = buscarTaller(999);
if (tallerInexistente) {
    console.log("Taller encontrado:", tallerInexistente.nombre);
}
else {
    console.log("No se encontró el taller con ID 999.");
}
// =============================================================
// 6. CREAR LAS INSCRIPCIONES
// =============================================================
// Simula la inscripción a dos talleres.
// Las cantidades no deben superar los cupos disponibles.
const inscripciones = [
    { tallerId: 101, cantidadParticipantes: 3 },
    { tallerId: 102, cantidadParticipantes: 2 }
];
// =============================================================
// 7. GENERAR EL RESUMEN — map()
// =============================================================
// Recorre las inscripciones y busca cada taller.
// Comprueba que exista antes de consultar sus datos.
// Genera el nombre, los participantes y el subtotal.
// El subtotal se calcula multiplicando costo por participantes.
const resumenInscripciones = inscripciones.map(inscripcion => {
    const taller = buscarTaller(inscripcion.tallerId);
    if (!taller) {
        throw new Error(`No se encontró el taller ${inscripcion.tallerId}`);
    }
    if (inscripcion.cantidadParticipantes > taller.cuposDisponibles) {
        throw new Error(`No hay suficientes cupos en ${taller.nombre}`);
    }
    return {
        nombre: taller.nombre,
        cantidadParticipantes: inscripcion.cantidadParticipantes,
        subtotal: taller.costo * inscripcion.cantidadParticipantes
    };
});
// =============================================================
// 8. CALCULAR EL TOTAL — reduce()
// =============================================================
// Suma los subtotales del resumen.
// El cero es el valor inicial del acumulador.
const totalDolares = resumenInscripciones.reduce((acumulado, inscripcion) => acumulado + inscripcion.subtotal, 0);
// =============================================================
// 9. ACTUALIZAR LOS CUPOS — forEach()
// =============================================================
// Recorre las inscripciones y descuenta los participantes registrados.
// Se modifican los talleres del catálogo original.
// Se ejecuta una sola vez después de generar un resumen válido.
inscripciones.forEach(inscripcion => {
    const taller = buscarTaller(inscripcion.tallerId);
    if (taller) {
        taller.cuposDisponibles -= inscripcion.cantidadParticipantes;
    }
});
// =============================================================
// 10. MOSTRAR Y COMPROBAR LOS RESULTADOS
// =============================================================
// Muestra el resumen, el total y los cupos restantes.
console.log("Resumen de inscripciones:", resumenInscripciones);
console.log(`Total a pagar: $${totalDolares}`);
console.log("\nCupos restantes:");
catalogoTalleres.forEach(taller => {
    console.log(`${taller.nombre}: ${taller.cuposDisponibles} cupos`);
});
export {};
// =============================================================
// 11. EXPLICAR LAS OPERACIONES
// =============================================================
// push() agrega un taller al catálogo.
// filter() selecciona los talleres con cupos disponibles.
// find() busca un taller por su identificador.
// map() transforma las inscripciones en un resumen.
// reduce() suma los subtotales para obtener el total.
// forEach() recorre las inscripciones y actualiza los cupos.
//
// Resultados esperados:
// Programación: 3 participantes, subtotal $75, quedan 7 cupos.
// Diseño Web: 2 participantes, subtotal $60, quedan 6 cupos.
// Total a pagar: $135.
// Robótica conserva 0 cupos.
