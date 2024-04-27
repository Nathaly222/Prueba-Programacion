 export interface NaveEspacial {
    salud: number;
    capacidadCarga: number;
    velocidad: number;

    mostrarEstado(): void;

    reparar(danio: number): void;

    cargarRecursos(cantidad: number): void;

    moverse(direccion: 'norte' | 'sur' | 'este' | 'oeste', distancia: number): void;
}

// Implementación de la lógica relacionada con la nave
 export class MiNave implements NaveEspacial {
    salud: number;
    capacidadCarga: number;
    velocidad: number;

    constructor() {
        this.salud = 100;
        this.capacidadCarga = 200;
        this.velocidad = 1;
    }

    mostrarEstado(): void {
        console.log(`Estado de la nave - Salud: ${this.salud}%, Capacidad de carga: ${this.capacidadCarga}, Velocidad: ${this.velocidad}`);
    }

    reparar(danio: number): void {
        this.salud += danio;
        console.log(`Reparaciones realizadas. Salud actual: ${this.salud}%`);
    }

    cargarRecursos(cantidad: number): void {
        this.capacidadCarga += cantidad;
        console.log(`${cantidad} recursos cargados en la nave. Capacidad de carga actual: ${this.capacidadCarga}`);
    }

    moverse(direccion: 'norte' | 'sur' | 'este' | 'oeste', distancia: number): void {
        console.log(`Nave moviéndose hacia el ${direccion} por ${distancia} unidades.`);
    }
}

// Ejemplo de uso
const miNave = new MiNave();
miNave.mostrarEstado();
miNave.reparar(20);
miNave.cargarRecursos(50);
miNave.moverse('este', 100);
