import { NaveEspacial } from "./nave";
export class Evento {
    constructor(public nombre: string, public impacto: string) {}

    // Método para obtener detalles del evento
    obtenerDetalles(): string {
        return `Evento: ${this.nombre}. Impacto: ${this.impacto}`;
    }

    // Método para simular el impacto del evento en la nave
    simularImpactoEnNave(nave: NaveEspacial): void {
        switch (this.impacto) {
            case 'positivo':
                nave.reparar(10);
                break;
            case 'negativo':
                nave.salud -= 20;
                console.log(`La nave ha sufrido daños debido al evento ${this.nombre}. Salud actual: ${nave.salud}`);
                break;
            default:
                console.log(`El evento ${this.nombre} no tiene un impacto definido.`);
        }
    }
}

// Ejemplo de uso
const evento1 = new Evento('Tormenta de meteoritos', 'negativo');
console.log(evento1.obtenerDetalles());



