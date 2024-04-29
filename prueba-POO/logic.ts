// Función para simular viaje en el espacio
 export function SimularViaje(tiempo: number) {
    // Simulación del paso del tiempo y la distancia
    console.log(`Simulando viaje de ${tiempo} días...`);
}

// Captura de entrada del usuario desde la consola
export const userInput = prompt('¿Hacia dónde quieres explorar? (norte/sur/este/oeste)');

// Validación de entrada del usuario
if (userInput && ['norte', 'sur', 'este', 'oeste'].includes(userInput)) {
    (userInput);
} else {
    console.log('Entrada no válida. Inténtalo de nuevo.');
}
