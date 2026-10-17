// =============================================================
// 1. DEFINIR LA ESTRUCTURA DE DATOS
// =============================================================
// Declara la interfaz Solicitud con los campos:
// id: número; nombreEstudiante: cadena; problemaReportado: cadena.
// =============================================================
// 2. CREAR LA FILA INICIAL
// =============================================================
// Inicializa un arreglo tipado con cuatro solicitudes.
// Las solicitudes se encuentran en orden de llegada.
const filaSolicitudes = [
    { id: 1, nombreEstudiante: "Ana", problemaReportado: "No enciende la computadora" },
    { id: 2, nombreEstudiante: "Luis", problemaReportado: "Falla de conexión" },
    { id: 3, nombreEstudiante: "Marta", problemaReportado: "Error al iniciar sesión" },
    { id: 4, nombreEstudiante: "Pedro", problemaReportado: "Problema con el teclado" }
];
// =============================================================
// 3. AGREGAR UNA SOLICITUD AL FINAL — push()
// =============================================================
// Agrega una nueva solicitud al final de la fila.
// push() modifica el arreglo original.
filaSolicitudes.push({
    id: 5,
    nombreEstudiante: "Carlos",
    problemaReportado: "Impresora sin conexión"
});
console.log("Después de push():", filaSolicitudes);
// =============================================================
// 4. AGREGAR UNA SOLICITUD URGENTE — unshift()
// =============================================================
// Coloca la solicitud urgente al inicio de la fila.
filaSolicitudes.unshift({
    id: 6,
    nombreEstudiante: "Sofía",
    problemaReportado: "Equipo bloqueado durante una evaluación"
});
console.log("Después de unshift():", filaSolicitudes);
// =============================================================
// 5. ATENDER LA PRIMERA SOLICITUD — shift()
// =============================================================
// Retira la primera solicitud de la fila.
// Comprueba que exista antes de mostrar el nombre.
const solicitudAtendida = filaSolicitudes.shift();
if (solicitudAtendida) {
    console.log("Solicitud atendida:", solicitudAtendida.nombreEstudiante);
}
else {
    console.log("No hay solicitudes para atender.");
}
// =============================================================
// 6. RETIRAR LA ÚLTIMA SOLICITUD — pop()
// =============================================================
// Retira la última solicitud porque el estudiante resolvió el problema.
// Comprueba que exista antes de mostrar el nombre.
const solicitudResuelta = filaSolicitudes.pop();
if (solicitudResuelta) {
    console.log("Problema resuelto por:", solicitudResuelta.nombreEstudiante);
}
else {
    console.log("No hay solicitudes para retirar.");
}
// =============================================================
// 7. INSERTAR UNA SOLICITUD PRIORITARIA — splice()
// =============================================================
// Inserta una solicitud en el índice 1.
// El número cero indica que no se elimina ninguna solicitud.
filaSolicitudes.splice(1, 0, {
    id: 7,
    nombreEstudiante: "Elena",
    problemaReportado: "Falla urgente del sistema"
});
console.log("Después de insertar la solicitud prioritaria:", filaSolicitudes);
// =============================================================
// 8. DERIVAR UNA SOLICITUD — splice()
// =============================================================
// Retira la solicitud ubicada en el índice 3.
// Se deriva a otro técnico y se elimina de la fila actual.
const solicitudesDerivadas = filaSolicitudes.splice(3, 1);
if (solicitudesDerivadas.length > 0) {
    console.log("Solicitud derivada a otro técnico:", solicitudesDerivadas[0].nombreEstudiante);
}
else {
    console.log("No existe una solicitud en ese índice.");
}
// =============================================================
// 9. OBTENER LAS PRÓXIMAS DOS SOLICITUDES — slice()
// =============================================================
// Copia las solicitudes desde el índice 0 hasta antes del índice 2.
// slice() no modifica el arreglo original.
const proximasSolicitudes = filaSolicitudes.slice(0, 2);
console.log("Próximas dos solicitudes:", proximasSolicitudes);
// =============================================================
// 10. MOSTRAR Y COMPROBAR LOS RESULTADOS
// =============================================================
// Muestra la selección y la fila completa para compararlas.
// La fila original conserva sus elementos después de usar slice().
console.log("Fila completa de solicitudes:", filaSolicitudes);
console.log("Selección de dos solicitudes:", proximasSolicitudes);
export {};
// =============================================================
// 11. EXPLICAR LAS OPERACIONES
// =============================================================
// push() agregó una solicitud al final.
// unshift() agregó una solicitud urgente al inicio.
// shift() retiró la primera solicitud.
// pop() retiró la última solicitud.
// splice() insertó y retiró solicitudes, modificando la fila original.
// slice() creó una copia con las próximas dos solicitudes.
// Se comprobó que slice() no modificó la fila al mostrar ambas
// estructuras y verificar que la fila original permaneció intacta.
