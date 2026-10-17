// Ejercicio 2: Gestión de turnos de pacientes
// Un centro de salud necesita administrar su lista de espera. Desarrolla un programa en
//  TypeScript con una interfaz Paciente que incluya identificador, nombre y motivo de consulta, 
//  y crea un arreglo tipado con cuatro pacientes iniciales.

// Agrega un paciente regular al final mediante .push() y uno de emergencia al inicio con .unshift(). Simula 
// el llamado al consultorio retirando al primero con .shift() y la cancelación de turno retirando al último con 
// .pop(). En ambos casos, verifica que exista un paciente antes de mostrar su nombre.

// Utiliza .splice() para insertar a un paciente de atención preferencial en el índice 1 sin eliminar a nadie.
//  Después, retira al paciente del índice 2, simulando su derivación a otro centro médico. Finalmente, usa .slice() 
//  para obtener los próximos dos pacientes y muestra esta selección junto con la cola completa, comprobando que la copia
//   no modifica la lista original.


 // =============================================================
 // 1. DEFINIR LA ESTRUCTURA DE DATOS
 // =============================================================
 // Declara la interfaz Paciente con los campos:
 // identificador: número; nombre: cadena; motivoConsulta: cadena.

interface Paciente {
  identificador: number;
  nombre: string;
  motivoConsulta: string;
}

// =============================================================
// 2. CREAR LA LISTA INICIAL DE PACIENTES
// =============================================================
// Crea un arreglo tipado con cuatro pacientes iniciales.
// Cada paciente debe tener todos los campos de la interfaz.

const colaPacientes: Paciente[] = [
  { identificador: 1, nombre: "Ana", motivoConsulta: "Dolor de cabeza" },
  { identificador: 2, nombre: "Carlos", motivoConsulta: "Fiebre" },
  { identificador: 3, nombre: "María", motivoConsulta: "Consulta general" },
  { identificador: 4, nombre: "José", motivoConsulta: "Dolor de estómago" }
];

// =============================================================
// 3. AGREGAR UN PACIENTE AL FINAL — push()
// =============================================================
// Agrega un paciente regular al final de la cola.
// push() modifica el arreglo original y devuelve su nueva longitud.

colaPacientes.push({
  identificador: 5,
  nombre: "Pedro",
  motivoConsulta: "Dolor de garganta"
});

console.log("Después de push():", colaPacientes);

// =============================================================
// 4. AGREGAR UN PACIENTE AL INICIO — unshift()
// =============================================================
// Agrega un paciente de emergencia al inicio de la cola.
// unshift() modifica el arreglo original.

colaPacientes.unshift({
  identificador: 6,
  nombre: "Laura",
  motivoConsulta: "Emergencia respiratoria"
});

console.log("Después de unshift():", colaPacientes);

// =============================================================
// 5. LLAMAR AL PRIMER PACIENTE — shift()
// =============================================================
// Retira al primer paciente de la cola.
// Comprueba que exista antes de mostrar su nombre.
// shift() devuelve el paciente retirado o undefined si está vacío.

const pacienteAtendido: Paciente | undefined = colaPacientes.shift();

if (pacienteAtendido) {
  console.log("Paciente atendido:", pacienteAtendido.nombre);
} else {
  console.log("No hay pacientes para atender.");
}

// =============================================================
// 6. CANCELAR EL ÚLTIMO TURNO — pop()
// =============================================================
// Retira al último paciente de la cola.
// Comprueba que exista antes de mostrar su nombre.

const pacienteCancelado: Paciente | undefined = colaPacientes.pop();

if (pacienteCancelado) {
  console.log("Turno cancelado:", pacienteCancelado.nombre);
} else {
  console.log("No hay turnos para cancelar.");
}

// =============================================================
// 7. INSERTAR ATENCIÓN PREFERENCIAL — splice()
// =============================================================
// Inserta un paciente preferencial en el índice 1.
// El segundo argumento es cero porque no se elimina ningún elemento.
// splice() modifica el arreglo original.

colaPacientes.splice(1, 0, {
  identificador: 7,
  nombre: "Sofía",
  motivoConsulta: "Atención preferencial"
});

console.log("Después de insertar al paciente preferencial:", colaPacientes);

// =============================================================
// 8. DERIVAR UN PACIENTE — splice()
// =============================================================
// Retira al paciente ubicado en el índice 2.
// Se elimina un elemento para simular su derivación a otro centro.

const pacienteDerivado: Paciente[] = colaPacientes.splice(2, 1);

if (pacienteDerivado.length > 0) {
  console.log("Paciente derivado:", pacienteDerivado[0].nombre);
} else {
  console.log("No hay paciente en ese índice.");
}

// =============================================================
// 9. OBTENER LOS PRÓXIMOS DOS PACIENTES — slice()
// =============================================================
// Obtiene dos pacientes desde el índice 0.
// slice() crea una copia y no modifica la cola original.

const proximosPacientes: Paciente[] = colaPacientes.slice(0, 2);

console.log("Próximos dos pacientes:", proximosPacientes);

// =============================================================
// 10. MOSTRAR Y COMPROBAR LOS RESULTADOS
// =============================================================
// Muestra la cola completa y la selección de dos pacientes.
// slice() no elimina ni agrega pacientes a la cola original.

console.log("Cola completa:", colaPacientes);
console.log("Selección de dos pacientes:", proximosPacientes);

// =============================================================
// 11. EXPLICAR LAS OPERACIONES
// =============================================================
// push() agrega al final y unshift() agrega al inicio.
// shift() retira al primero y pop() retira al último.
// splice() inserta o elimina elementos de la cola original.
// slice() obtiene una copia sin modificar la cola original.
