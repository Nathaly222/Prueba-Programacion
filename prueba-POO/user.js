// Captura de entrada del usuario desde la consola
export const userInput = prompt('¿Hacia dónde quieres explorar? (norte/sur/este/oeste)');

// Validación de entrada del usuario
if (userInput !== null && ['norte', 'sur', 'este', 'oeste'].includes(userInput)) {
    console.log(userInput);
} else {
    console.log('Entrada no válida. Inténtalo de nuevo.');
}
