// Función para simular viaje en el espacio
function simularViaje(tiempo) {
    // Simulación del paso del tiempo y la distancia
    console.log(`Simulando viaje de ${tiempo} días...`);
}

// Captura de entrada del usuario desde la consola
const userInput = window.prompt('¿Hacia dónde quieres explorar? (norte/sur/este/oeste)');

// Validación de entrada del usuario
if (userInput && ['norte', 'sur', 'este', 'oeste'].includes(userInput.toLowerCase())) {
    explorar(userInput.toLowerCase()); // Llamar a la función explorar con la dirección ingresada
} else {
    console.log('Entrada no válida. Inténtalo de nuevo.');
}
