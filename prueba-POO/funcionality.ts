import { Planeta } from "./model";
import { Evento } from "./model";
// Función para explorar diferentes sectores del espacio
export function explorar(direccion: 'norte' | 'sur' | 'este' | 'oeste') {
    // Lógica de exploración
    console.log(`Explorando hacia el ${direccion}...`);
}

// Función genérica para recolectar recursos
function recolectarRecursos<T>(planeta: Planeta, cantidad: number): T[] {
    // Lógica de recolección de recursos
    console.log(`Recolectando ${cantidad} recursos del planeta con tipo ${planeta.tipoRecurso}`);
    return [] as T[];
}

// Función para manejar eventos aleatorios
function manejarEvento(evento: Evento) {
    // Lógica para responder a eventos
    console.log(`Se ha encontrado un evento: ${evento.nombre}. Impacto: ${evento.impacto}`);
}
