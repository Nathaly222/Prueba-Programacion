import { userInput } from "./logic";
export const UserInput = prompt('¿Hacia dónde quieres explorar? (norte/sur/este/oeste)');
if (userInput !== null && ['norte', 'sur', 'este', 'oeste'].includes(userInput)) {
    (userInput);
} else {
    console.log('Entrada no válida. Inténtalo de nuevo.');
}
