
// Función para explorar diferentes sectores del espacio
function explorar(direccion) {
    // Lógica de exploración
    console.log(`Explorando hacia el ${direccion}...`);
}

// Función genérica para recolectar recursos
function recolectarRecursos(planeta, cantidad) {
    // Lógica de recolección de recursos
    console.log(`Recolectando ${cantidad} recursos del planeta con tipo ${planeta.tipoRecurso}`);
    return [];
}

// Función para manejar eventos aleatorios
function manejarEvento(evento) {
    // Lógica para responder a eventos
    console.log(`Se ha encontrado un evento: ${evento.nombre}. Impacto: ${evento.impacto}`);
}

// Exportar las funciones para ser utilizadas como módulo
module.exports = {
    explorar,
    recolectarRecursos,
    manejarEvento
};
