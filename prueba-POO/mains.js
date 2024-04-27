import { MiNave } from './nave.js';
import { Planeta } from './planeta.js';
import { Evento } from './model.js';
import { userInput } from './user.js';




const miNave = new MiNave();
miNave.mostrarEstado();
miNave.reparar(20);
miNave.cargarRecursos(50);
miNave.moverse('este', 100);


const planeta1 = new Planeta('Mineral', 'alto');
console.log(planeta1.getInfo());
console.log(planeta1.recolectarRecursos(3));
console.log(planeta1.simularEvento());

const evento1 = new Evento('Meteorito', 'Daño en la nave');
console.log(evento1);
