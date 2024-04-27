// Definición de la interfaz para la Nave Espacial
export const NaveEspacial = {
    salud: 0,
    capacidadCarga: 0,
    velocidad: 0
};

// Implementación de la clase MiNave
export class MiNave {
    constructor() {
        this.salud = 100;
        this.capacidadCarga = 200;
        this.velocidad = 1;
    }

    mostrarEstado() {
        console.log(`Estado de la nave - Salud: ${this.salud}%, Capacidad de carga: ${this.capacidadCarga}, Velocidad: ${this.velocidad}`);
    }

    reparar(danio) {
        this.salud += danio;
        console.log(`Reparaciones realizadas. Salud actual: ${this.salud}%`);
    }

    cargarRecursos(cantidad) {
        this.capacidadCarga += cantidad;
        console.log(`${cantidad} recursos cargados en la nave. Capacidad de carga actual: ${this.capacidadCarga}`);
    }

    moverse(direccion, distancia) {
        console.log(`Nave moviéndose hacia el ${direccion} por ${distancia} unidades.`);
    }
}

