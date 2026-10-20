// Cola de pacientes
let colaDeEspera = [
    { id: 1, nombre: "Carlos Eduardo", motivo: "consulta General" },
    { id: 2, nombre: "Maria Fernanda", motivo: "Revision Dental" },
    { id: 3, nombre: "Juan Pablo", motivo: "Dolor de cabeza" },
    { id: 4, nombre: "Ana Sofia", motivo: "Dolor lumbar" },
];
//1- .Push: Agregar un nuevo paciente a la cola de espera
colaDeEspera.push({ id: 5, nombre: "Luis Miguel", motivo: "Consulta de rutina" });
//2- .unshift: Atender al primer paciente de la cola de espera
colaDeEspera.unshift({ id: 0, nombre: "Wilfredo Tobar", motivo: "Dolor de estomago" });
//3- .shift: Atender al primer paciente de la cola de espera y eliminarlo de la lista
const pacienteAtendido = colaDeEspera.shift();
console.log(`Paciente atendido: ${pacienteAtendido?.nombre}, motivo: ${pacienteAtendido?.motivo}`);
//4- .pop: Eliminar al último paciente de la cola de espera
const pacienteEliminado = colaDeEspera.pop();
console.log(`Paciente eliminado: ${pacienteEliminado?.nombre}, motivo: ${pacienteEliminado?.motivo}`);
//5- Crear un nuevo paciente y agregarlo a la cola de espera
const pacientePreseferencial = {
    id: 7, nombre: "Pedro Pablo", motivo: "Consulta de rutina"
};
//insertar paciente preferencial en la posición 1 con splice
//el 1 indica la posición donde se insertará el nuevo paciente y el 0 indica que no se eliminará ningún elemento
//pacientePreseferencial se insertará en la posición 1 y los demás pacientes se moverán una posición hacia atrás
colaDeEspera.splice(1, 0, pacientePreseferencial);
//El paciente del indice 3 se fue
//el 3 indica la posición del paciente que se eliminará y el 1 indica que se eliminará un solo elemento 
colaDeEspera.splice(3, 1);
//.slice: Obtener una copia de la cola de espera sin modificar el arreglo original
//El 0 indica la posición inicial y el 2 indica la posición final (no incluida) de los elementos que se copiarán
const proximosPacientes = colaDeEspera.slice(0, 2);
//Imprimir la lista de pacientes en la cola de espera
console.log("\nLista de pacientes en la cola de espera:");
console.log(colaDeEspera);
export {};
