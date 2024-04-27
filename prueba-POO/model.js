// Definición de la interfaz para la Nave Espacial
export class NaveEspacial {
    constructor(salud, capacidadCarga, velocidad) {
        this.salud = salud;
        this.capacidadCarga = capacidadCarga;
        this.velocidad = velocidad;
    }
}

// Definición de la clase para representar los Planetas
export class Planeta {
    constructor(tipoRecurso, peligro) {
        this.tipoRecurso = tipoRecurso;
        this.peligro = peligro;
    }
}



// Definición de la clase para representar Eventos
export class Evento {
    constructor(nombre, impacto) {
        this.nombre = nombre;
        this.impacto = impacto;
    }
}

