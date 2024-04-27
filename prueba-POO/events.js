class Evento {
    constructor(nombre, impacto) {
        this.nombre = nombre;
        this.impacto = impacto;
    }

    obtenerDetalles() {
        return `Evento: ${this.nombre}. Impacto: ${this.impacto}`;
    }

    simularImpactoEnNave(nave) {
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
