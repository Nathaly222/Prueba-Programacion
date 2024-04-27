// Importar las clases desde los módulos
import { MiNave } from './nave';
import { Planeta } from './planeta';
import { Evento } from './model';



const miNave = new MiNave();
miNave.mostrarEstado();
miNave.reparar(20);
miNave.cargarRecursos(50);
miNave.moverse('este', 100);
console.log(miNave);


const planeta1 = new Planeta('Mineral', 'alto');
console.log(planeta1.getInfo());
console.log(planeta1.recolectarRecursos(3));
console.log(planeta1.simularEvento());


const evento1 = new Evento('Meteorito', 'Daño en la nave');
console.log(evento1);

