export class Planeta {
    constructor(public tipoRecurso: string, public peligro: 'bajo' | 'medio' | 'alto') {}

    // Método para obtener información sobre el planeta
    getInfo(): string {
        return `Planeta con recurso: ${this.tipoRecurso}, peligro: ${this.peligro}`;
    }

    // Método para simular recolección de recursos en el planeta
    recolectarRecursos(cantidad: number): string[] {
        let recursosRecolectados: string[] = [];
        for (let i = 0; i < cantidad; i++) {
            recursosRecolectados.push(`${this.tipoRecurso} ${i + 1}`);
        }
        return recursosRecolectados;
    }

    // Método para simular un evento peligroso en el planeta
    simularEvento(): string {
        if (this.peligro === 'alto') {
            return '¡Ha ocurrido un evento peligroso en el planeta!';
        } else {
            return 'No ha ocurrido ningún evento peligroso.';
        }
    }
}
