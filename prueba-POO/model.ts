// Definición de la interfaz para la Nave Espacial
export interface NaveEspacial {
    salud: number;
    capacidadCarga: number;
    velocidad: number;
}

// Definición de la clase para representar los Planetas
export class Planeta {
    constructor(public tipoRecurso: string, public peligro: 'bajo' | 'medio' | 'alto') {}
}

// Definición de la clase para representar Eventos
export class Evento {
    constructor(public nombre: string, public impacto: string) {}
}
