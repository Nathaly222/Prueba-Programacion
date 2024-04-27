// Definición de la clase para representar los Planetas
export class Planeta {
    constructor(tipoRecurso, peligro) {
        this.tipoRecurso = tipoRecurso;
        this.peligro = peligro;
    }

    // Método para obtener información sobre el planeta
    getInfo() {
        return `Planeta con recurso: ${this.tipoRecurso}, peligro: ${this.peligro}`;
    }

    // Método para simular recolección de recursos en el planeta
    recolectarRecursos(cantidad) {
        let recursosRecolectados = [];
        for (let i = 0; i < cantidad; i++) {
            recursosRecolectados.push(`${this.tipoRecurso} ${i + 1}`);
        }
        return recursosRecolectados;
    }

    // Método para simular un evento peligroso en el planeta
    simularEvento() {
        if (this.peligro === 'alto') {
            return '¡Ha ocurrido un evento peligroso en el planeta!';
        } else {
            return 'No ha ocurrido ningún evento peligroso.';
        }
    }
}
