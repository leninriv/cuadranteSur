import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsListService {

  constructor() { }


  getTerritorios() {
    return [
      'Azuay',
      'Bolívar',
      'Cañar',
      'Carchi',
      'Chimborazo',
      'Cotopaxi',
      'El Oro',
      'Esmeraldas',
      'Exterior',
      'Galápagos',
      'Guayas',
      'Imbabura',
      'Loja',
      'Los Ríos',
      'Manabí',
      'Morona Santiago',
      'Nacional',
      'Napo',
      'Orellana',
      'Pastaza',
      'Pichincha',
      'Santa Elena',
      'Santo Domingo de los Tsáchilas',
      'Sucumbíos',
      'Tungurahua',
      'Zamora Chinchipe',
    ]
  }

  getCircunscripciones() {
    return [
      'América Latina, el Caribe y África',
      'Azuay',
      'Bolívar',
      'Cañar',
      'Carchi',
      'Chimborazo',
      'Cotopaxi',
      'El Oro',
      'Esmeraldas',
      'Estados Unidos y Canadá',
      'Europa, Asia y Oceanía',
      'Galápagos',
      'Guayas - Circunscripción 1',
      'Guayas - Circunscripción 2',
      'Guayas - Circunscripción 3',
      'Guayas - Circunscripción 4',
      'Imbabura',
      'Loja',
      'Los Ríos',
      'Manabí - Circunscripción 1 Norte',
      'Manabí - Circunscripción 2 Sur',
      'Morona Santiago',
      'Nacional',
      'Napo',
      'Orellana',
      'Pastaza',
      'Pichincha - Circunscripción 1 Centro-Norte',
      'Pichincha - Circunscripción 2 Centro-Sur',
      'Pichincha - Circunscripción 3 Quito rural',
      'Pichincha - Circunscripción 4 Resto de la provincia',
      'Santa Elena',
      'Santo Domingo de los Tsáchilas',
      'Sucumbíos',
      'Tungurahua',
      'Zamora Chinchipe',
    ]
  }

  getPartidos() {
    return [
      'CD-Centro Democrático',
      'CD/FCS-Unión por la Esperanza (Centro Democrático/Fuerza Compromiso Social)',
      'ID-Izquierda Democrática',
      'MUPP-Movimiento de Unidad Plurinacional Pachakutik',
      'MUPP/Construye-Renace la Esperanza (alianza Movimiento de Unidad Plurinacional Pachakutik/Construye)',
      'MUPP/UP-Minka por la Vida (Movimiento de Unidad Plurinacional Pachakutik/Unidad Popular)',
      'UP/MUPP-Minka por la Vida (Unidad Popular/Movimiento de Unidad Plurinacional Pachakutik)',
      'MUPP/UP-Alianza por la Dignidad de Zamora Chinchipe (Movimiento de Unidad Plurinacional Pachakutik/Unidad Popular)'
    ]
  }

}
